import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Load OPENAI_API_KEY from the same .env the transcription script uses,
// so /api/transcribe-voiceover can call Whisper without the secret ever
// being hard-coded or committed. Override with env var OPENAI_ENV_PATH.
const OPENAI_ENV_PATH = process.env.OPENAI_ENV_PATH
  || '/Users/stugrey/Documents/Student Voice ICD/configs/student-voice-eleventy/.env';

function loadEnvFile(envPath) {
  if (!fs.existsSync(envPath)) return;
  const src = fs.readFileSync(envPath, 'utf8');
  for (const raw of src.split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const m = line.match(/^(?:export\s+)?([A-Z_][A-Z0-9_]*)\s*=\s*(.*)$/i);
    if (!m) continue;
    let [, key, val] = m;
    val = val.trim();
    if ((val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = val;
  }
}
loadEnvFile(OPENAI_ENV_PATH);

/** Helper: backup a file with a timestamp, then write new data */
function backupAndWrite(filePath, data, ts) {
  const ext = path.extname(filePath);
  const base = path.basename(filePath, ext);
  const dir = path.dirname(filePath);
  const backupPath = path.join(dir, `${base}_${ts}${ext}`);
  if (fs.existsSync(filePath)) {
    fs.copyFileSync(filePath, backupPath);
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  return path.basename(backupPath);
}

/** Vite plugin: save content.json + config.json via POST /api/save */
function savePlugin() {
  return {
    name: 'deck-save',
    configureServer(server) {
      // Keep the old endpoint working
      server.middlewares.use('/api/save-content', async (req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; res.end('Method not allowed'); return; }
        let body = ''; for await (const chunk of req) body += chunk;
        try {
          const json = JSON.parse(body);
          const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
          const backup = backupAndWrite(path.resolve('content.json'), json, ts);
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: true, backup }));
        } catch (e) { res.statusCode = 400; res.end(JSON.stringify({ error: e.message })); }
      });

      // Save a PNG slide image to disk
      server.middlewares.use('/api/save-slide', async (req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; res.end('Method not allowed'); return; }
        const chunks = [];
        for await (const chunk of req) chunks.push(chunk);
        const body = Buffer.concat(chunks);
        try {
          // Expect JSON with { filename, dataUrl }
          const { filename, dataUrl, subdir } = JSON.parse(body.toString());
          const exportDir = subdir
            ? path.resolve('export', subdir)
            : path.resolve('export');
          if (!fs.existsSync(exportDir)) fs.mkdirSync(exportDir, { recursive: true });
          const base64 = dataUrl.replace(/^data:image\/png;base64,/, '');
          const rawBuf = Buffer.from(base64, 'base64');
          const filePath = path.join(exportDir, filename);

          // Lossless PNG optimization via sharp — better compression, same pixels
          const optimized = await sharp(rawBuf)
            .png({ compressionLevel: 9, adaptiveFiltering: true })
            .toBuffer();

          const saved = Math.round((1 - optimized.length / rawBuf.length) * 100);
          fs.writeFileSync(filePath, optimized);
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: true, path: `export/${filename}`, saved: `${saved}%` }));
        } catch (e) { res.statusCode = 400; res.end(JSON.stringify({ error: e.message })); }
      });

      // Build PPTX and PDF from exported PNGs
      server.middlewares.use('/api/build-deck', async (req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; res.end('Method not allowed'); return; }
        try {
          const PptxGenJS = (await import('pptxgenjs')).default;
          const PDFDocument = (await import('pdfkit')).default;

          async function buildDeck(dir, widthIn, heightIn, label) {
            const pngs = fs.readdirSync(dir)
              .filter(f => f.endsWith('.png') && f.startsWith('slide-'))
              .sort();
            if (pngs.length === 0) return null;

            // ── PPTX ──
            const pptx = new PptxGenJS();
            pptx.defineLayout({ name: 'CUSTOM', width: widthIn, height: heightIn });
            pptx.layout = 'CUSTOM';

            for (const png of pngs) {
              const slide = pptx.addSlide();
              const b64 = fs.readFileSync(path.join(dir, png)).toString('base64');
              slide.addImage({
                data: `image/png;base64,${b64}`,
                x: 0, y: 0, w: '100%', h: '100%',
              });
            }
            await pptx.writeFile({ fileName: path.join(dir, 'presentation.pptx') });

            // ── PDF ──
            const pageW = widthIn * 72;
            const pageH = heightIn * 72;
            await new Promise((resolve, reject) => {
              const doc = new PDFDocument({ size: [pageW, pageH], autoFirstPage: false, margin: 0 });
              const stream = fs.createWriteStream(path.join(dir, 'presentation.pdf'));
              doc.pipe(stream);
              for (const png of pngs) {
                doc.addPage({ size: [pageW, pageH], margin: 0 });
                doc.image(path.join(dir, png), 0, 0, { width: pageW, height: pageH });
              }
              doc.end();
              stream.on('finish', resolve);
              stream.on('error', reject);
            });

            return pngs.length;
          }

          const exportDir = path.resolve('export');
          const dir16x9 = path.join(exportDir, '16x9');
          const dir4x3 = path.join(exportDir, '4x3');
          const results = {};

          // 16:9 — 13.333 × 7.5 inches
          if (fs.existsSync(dir16x9)) {
            const count16 = await buildDeck(dir16x9, 13.333, 7.5, '16:9');
            if (count16) results['16:9'] = count16;
          }

          // 4:3 — 10 × 7.5 inches
          if (fs.existsSync(dir4x3)) {
            const count43 = await buildDeck(dir4x3, 10, 7.5, '4:3');
            if (count43) results['4:3'] = count43;
          }

          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: true, results }));
        } catch (e) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: e.message }));
        }
      });

      // New combined endpoint
      server.middlewares.use('/api/save', async (req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; res.end('Method not allowed'); return; }
        let body = ''; for await (const chunk of req) body += chunk;
        try {
          const { content, config } = JSON.parse(body);
          const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
          const backups = [];
          if (content) backups.push(backupAndWrite(path.resolve('content.json'), content, ts));
          if (config)  backups.push(backupAndWrite(path.resolve('config.json'), config, ts));
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: true, backups }));
        } catch (e) { res.statusCode = 400; res.end(JSON.stringify({ error: e.message })); }
      });

      // Save a per-slide voiceover audio file
      server.middlewares.use('/api/save-voiceover', async (req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; res.end('Method not allowed'); return; }
        let body = ''; for await (const chunk of req) body += chunk;
        try {
          const { slideId, dataUrl, ext } = JSON.parse(body);
          if (!/^[a-z0-9]{4,32}$/i.test(slideId || '')) throw new Error('invalid slideId');
          if (!/^(webm|mp4|m4a|ogg)$/.test(ext || '')) throw new Error('invalid ext');
          if (typeof dataUrl !== 'string' || !dataUrl.startsWith('data:')) throw new Error('invalid dataUrl');

          const voiceoversDir = path.resolve('voiceovers');
          if (!fs.existsSync(voiceoversDir)) fs.mkdirSync(voiceoversDir, { recursive: true });

          // Remove any prior take with a different extension for this slideId
          for (const e of ['webm', 'mp4', 'm4a', 'ogg']) {
            if (e === ext) continue;
            const stale = path.join(voiceoversDir, `${slideId}.${e}`);
            if (fs.existsSync(stale)) fs.unlinkSync(stale);
          }

          // Strip the entire data-URL header. Must use [^,]+ (not [^;]+;base64,)
          // because MIME types with parameters (e.g. audio/webm;codecs=opus)
          // contain semicolons before the base64, marker.
          const commaIdx = dataUrl.indexOf(',');
          if (commaIdx < 0) throw new Error('malformed dataUrl');
          const base64 = dataUrl.slice(commaIdx + 1);
          const buf = Buffer.from(base64, 'base64');
          if (buf.length === 0) throw new Error('empty audio buffer');
          const filePath = path.join(voiceoversDir, `${slideId}.${ext}`);
          fs.writeFileSync(filePath, buf);

          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: true, file: `voiceovers/${slideId}.${ext}`, bytes: buf.length }));
        } catch (e) { res.statusCode = 400; res.end(JSON.stringify({ error: e.message })); }
      });

      // Transcribe a per-slide voiceover audio file via OpenAI Whisper.
      // Returns { ok, transcript, words } — the client merges these into
      // slide.voiceover and persists them on the next /api/save.
      server.middlewares.use('/api/transcribe-voiceover', async (req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; res.end('Method not allowed'); return; }
        let body = ''; for await (const chunk of req) body += chunk;
        try {
          const { slideId, file, mime } = JSON.parse(body);
          if (!/^[a-z0-9]{4,32}$/i.test(slideId || '')) throw new Error('invalid slideId');
          if (typeof file !== 'string' || !file) throw new Error('missing file');

          const voiceoversDir = path.resolve('voiceovers');
          const resolved = path.resolve(file);
          if (!resolved.startsWith(voiceoversDir + path.sep)) throw new Error('path escapes voiceovers dir');
          if (!fs.existsSync(resolved)) throw new Error('audio file not found');

          const apiKey = process.env.OPENAI_API_KEY;
          if (!apiKey) throw new Error('OPENAI_API_KEY not set');

          const buf = fs.readFileSync(resolved);
          const fd = new FormData();
          fd.append('file', new Blob([buf], { type: mime || 'audio/webm' }), path.basename(resolved));
          fd.append('model', 'whisper-1');
          fd.append('response_format', 'verbose_json');
          fd.append('timestamp_granularities[]', 'word');

          const whisperRes = await fetch('https://api.openai.com/v1/audio/transcriptions', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${apiKey}` },
            body: fd,
          });
          if (!whisperRes.ok) {
            const text = await whisperRes.text();
            throw new Error(`whisper ${whisperRes.status}: ${text.slice(0, 200)}`);
          }
          const result = await whisperRes.json();

          const transcript = (result.text || '').trim();
          const words = Array.isArray(result.words)
            ? result.words.map(w => ({
                word: w.word,
                start: Number(w.start.toFixed(3)),
                end: Number(w.end.toFixed(3)),
              }))
            : [];

          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: true, transcript, words }));
        } catch (e) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: false, error: e.message }));
        }
      });

      // Clear stale slide-*.png files from export/16x9/ and export/4x3/.
      // Without this, slides whose type changed (e.g. content → statement)
      // leave old PNGs behind, and build-deck bundles BOTH into the PPTX/PDF.
      server.middlewares.use('/api/clear-export', async (req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; res.end('Method not allowed'); return; }
        try {
          const dirs = [path.resolve('export/16x9'), path.resolve('export/4x3')];
          let removed = 0;
          for (const dir of dirs) {
            if (!fs.existsSync(dir)) continue;
            for (const name of fs.readdirSync(dir)) {
              if (/^slide-\d+-[a-z0-9-]+\.png$/i.test(name)) {
                fs.unlinkSync(path.join(dir, name));
                removed++;
              }
            }
          }
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: true, removed }));
        } catch (e) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: false, error: e.message }));
        }
      });

      // Build the standalone public viewer → dist-site/
      // Runs scripts/build-viewer.js which transcodes voiceovers and then
      // invokes `vite build --config vite.viewer.config.js`. Streams
      // stdout/stderr into the response as text so the caller can show
      // progress on the Export All button.
      server.middlewares.use('/api/export-site', async (req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; res.end('Method not allowed'); return; }

        const { spawn } = await import('node:child_process');
        const scriptPath = path.resolve('scripts/build-viewer.js');
        if (!fs.existsSync(scriptPath)) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: false, error: 'scripts/build-viewer.js not found' }));
          return;
        }

        const child = spawn(process.execPath, [scriptPath], { cwd: process.cwd() });
        let stdout = '';
        let stderr = '';
        child.stdout.on('data', d => { stdout += d.toString(); });
        child.stderr.on('data', d => { stderr += d.toString(); });

        child.on('close', code => {
          res.setHeader('Content-Type', 'application/json');
          if (code === 0) {
            // Compute dist-site byte total for the button label
            const dist = path.resolve('dist-site');
            let bytes = 0;
            const walk = (dir) => {
              if (!fs.existsSync(dir)) return;
              for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
                const p = path.join(dir, e.name);
                if (e.isDirectory()) walk(p);
                else { try { bytes += fs.statSync(p).size; } catch {} }
              }
            };
            walk(dist);
            res.end(JSON.stringify({ ok: true, path: dist, bytes, stdout }));
          } else {
            res.statusCode = 500;
            res.end(JSON.stringify({ ok: false, code, error: stderr.slice(-2000) || 'build failed' }));
          }
        });

        child.on('error', e => {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: false, error: e.message }));
        });
      });

      // Delete a per-slide voiceover audio file
      server.middlewares.use('/api/delete-voiceover', async (req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; res.end('Method not allowed'); return; }
        let body = ''; for await (const chunk of req) body += chunk;
        try {
          const { slideId, file } = JSON.parse(body);
          if (!/^[a-z0-9]{4,32}$/i.test(slideId || '')) throw new Error('invalid slideId');
          const voiceoversDir = path.resolve('voiceovers');

          // If a specific file was supplied, validate it lives inside voiceoversDir
          if (file) {
            const resolved = path.resolve(file);
            if (!resolved.startsWith(voiceoversDir + path.sep)) throw new Error('path escapes voiceovers dir');
            if (fs.existsSync(resolved)) fs.unlinkSync(resolved);
          } else {
            // Otherwise nuke any take for this slideId
            for (const e of ['webm', 'mp4', 'm4a', 'ogg']) {
              const f = path.join(voiceoversDir, `${slideId}.${e}`);
              if (fs.existsSync(f)) fs.unlinkSync(f);
            }
          }

          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: true }));
        } catch (e) { res.statusCode = 400; res.end(JSON.stringify({ error: e.message })); }
      });
    },
  };
}

export default defineConfig({
  root: '.',
  server: {
    open: true,
  },
  plugins: [savePlugin()],
});
