// Separate Vite config for the standalone public viewer. Builds viewer.html
// only, outputs to dist-site/, and copies runtime assets (content.json,
// config.json, tokens, book covers, env-theater.hdr, voiceovers in both
// formats, the PDF fallback) via a custom closeBundle plugin.
//
// Crucially, this config does NOT import or register the editor's savePlugin,
// so none of the /api/* middlewares ship with the viewer build.

import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function copyDir(src, dest, predicate = () => true) {
  if (!fs.existsSync(src)) return 0;
  fs.mkdirSync(dest, { recursive: true });
  let count = 0;
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      count += copyDir(s, d, predicate);
    } else if (predicate(entry.name)) {
      fs.copyFileSync(s, d);
      count++;
    }
  }
  return count;
}

function copyFile(src, dest) {
  if (!fs.existsSync(src)) return false;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  return true;
}

function writeTranscript(contentPath, outPath) {
  if (!fs.existsSync(contentPath)) return false;
  const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
  const lines = [];
  lines.push('# Who Will Control the AI Infrastructure of Higher Education?');
  lines.push('Dr Stuart Grey — Teesside, April 2026');
  lines.push('');
  (content.slides || []).forEach((s, i) => {
    const heading = s.heading || s.title || s.text || s.type;
    lines.push(`## Slide ${i + 1} — ${heading}`);
    lines.push('');
    const t = s.voiceover?.transcript;
    if (t) {
      lines.push(t.trim());
    } else {
      lines.push('(no narration on this slide)');
    }
    lines.push('');
  });
  fs.writeFileSync(outPath, lines.join('\n'));
  return true;
}

function writeReadme(outPath) {
  const body = `# aiinhe.com keynote — standalone site

This folder is a **self-contained static site**. Drop it on any static host and
it will play the keynote with synchronized narration, captions, and auto-advance.

## Deploy

### Cloudflare Pages (recommended)

\`\`\`sh
npx wrangler pages deploy dist-site --project-name=aiinhe-keynote
\`\`\`

Then point \`aiinhe.com\` at the Pages project in the Cloudflare dashboard.

### Netlify

\`\`\`sh
npx netlify deploy --dir=dist-site --prod
\`\`\`

### Plain rsync

\`\`\`sh
rsync -avz dist-site/ user@aiinhe.com:/var/www/keynote/
\`\`\`

## Verify

After deploy, hit the root URL and confirm:

1. The "Start presentation" overlay appears, focus lands on the button.
2. Clicking Start plays slide 1 with audio and word-level captions.
3. Arrow keys advance slides. Auto-advance triggers when a voiceover ends.
4. \`/voiceovers/<id>.webm\` serves as \`audio/webm\` and \`/voiceovers/<id>.m4a\`
   as \`audio/mp4\`. If Cloudflare Pages misreports content-types, drop a
   \`_headers\` file at the root.

## Browser notes

- **Modern Chrome/Edge/Firefox/Safari 14.1+**: plays webm/opus (smaller files).
- **Safari ≤ 14 / older iOS**: automatically falls back to m4a/aac.
- **Reduced-motion users**: WebGL droplet shapes are skipped; slides render flat.
- **Screen readers**: flat transcript is exposed per slide via \`aria-describedby\`.
  Slide changes announced once via a live region.
- **No JavaScript**: a direct PDF download link is shown.

## Fallbacks

- Full slide deck as a PDF: \`pdf/presentation.pdf\`
- Flat transcript of the whole talk: \`transcript.txt\`
`;
  fs.writeFileSync(outPath, body);
}

function writeHeaders(outPath) {
  // Content-type hints for Cloudflare Pages, in case it mis-types audio.
  const body = `/voiceovers/*.webm
  Content-Type: audio/webm; codecs=opus

/voiceovers/*.m4a
  Content-Type: audio/mp4; codecs="mp4a.40.2"

/pdf/*.pdf
  Content-Type: application/pdf

/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: no-referrer-when-downgrade
`;
  fs.writeFileSync(outPath, body);
}

function writeRobots(outPath) {
  fs.writeFileSync(outPath, 'User-agent: *\nAllow: /\n');
}

function copyViewerAssets() {
  let outDir = 'dist-site';

  return {
    name: 'copy-viewer-assets',

    configResolved(resolved) {
      outDir = resolved.build.outDir;
    },

    closeBundle() {
      const abs = path.resolve(__dirname, outDir);

      // 1. content.json + config.json
      copyFile(path.resolve(__dirname, 'content.json'), path.join(abs, 'content.json'));
      copyFile(path.resolve(__dirname, 'config.json'),  path.join(abs, 'config.json'));

      // 2. tokens — palette + typography CSS files
      const tokenCount = copyDir(
        path.resolve(__dirname, 'tokens'),
        path.join(abs, 'tokens'),
        n => n.endsWith('.css'),
      );
      console.log(`[copy-viewer-assets] copied ${tokenCount} token files`);

      // 3. Book covers (under public/)
      const coverCount = copyDir(
        path.resolve(__dirname, 'public/book-covers'),
        path.join(abs, 'book-covers'),
      );
      console.log(`[copy-viewer-assets] copied ${coverCount} book cover files`);

      // 4. HDR envmap needed by shapes-droplets.js — keep path as /env-theater.hdr
      copyFile(
        path.resolve(__dirname, 'public/env-theater.hdr'),
        path.join(abs, 'env-theater.hdr'),
      );

      // 5. Voiceovers — both .webm originals and the .m4a transcodes
      const voCount = copyDir(
        path.resolve(__dirname, 'voiceovers'),
        path.join(abs, 'voiceovers'),
        n => /\.(webm|m4a)$/i.test(n),
      );
      console.log(`[copy-viewer-assets] copied ${voCount} voiceover files`);

      // 6. PDF fallback — only copy if reasonably sized. The editor's
      // export exports at 4K which can easily balloon past 100 MB; that
      // would dominate the hosted bundle and is unnecessary. Skip with a
      // warning if the PDF is over 25 MB; user can drop a compressed copy
      // at dist-site/pdf/presentation.pdf manually.
      const PDF_MAX = 25 * 1024 * 1024;
      const srcPdf = path.resolve(__dirname, 'export/16x9/presentation.pdf');
      if (fs.existsSync(srcPdf)) {
        const pdfSize = fs.statSync(srcPdf).size;
        if (pdfSize <= PDF_MAX) {
          copyFile(srcPdf, path.join(abs, 'pdf/presentation.pdf'));
          console.log(`[copy-viewer-assets] copied pdf (${(pdfSize / 1024 / 1024).toFixed(1)} MB)`);
        } else {
          console.warn(`[copy-viewer-assets] skipping pdf — ${(pdfSize / 1024 / 1024).toFixed(0)} MB exceeds ${PDF_MAX / 1024 / 1024} MB cap. Drop a compressed PDF at dist-site/pdf/presentation.pdf manually.`);
        }
      }

      // 7. Rename viewer.html → index.html so hosts serve from /
      const viewerHtml = path.join(abs, 'viewer.html');
      const indexHtml = path.join(abs, 'index.html');
      if (fs.existsSync(viewerHtml)) {
        fs.renameSync(viewerHtml, indexHtml);
        console.log('[copy-viewer-assets] renamed viewer.html -> index.html');
      }

      // 8. Flat transcript for accessibility / offline reading
      writeTranscript(
        path.resolve(__dirname, 'content.json'),
        path.join(abs, 'transcript.txt'),
      );

      // 9. robots.txt, _headers, README
      writeRobots(path.join(abs, 'robots.txt'));
      writeHeaders(path.join(abs, '_headers'));
      writeReadme(path.join(abs, 'README.md'));

      console.log(`[copy-viewer-assets] done → ${abs}`);
    },
  };
}

export default defineConfig({
  root: '.',
  publicDir: false,
  build: {
    outDir: 'dist-site',
    emptyOutDir: true,
    assetsDir: 'assets',
    target: 'es2020',
    rollupOptions: {
      input: path.resolve(__dirname, 'viewer.html'),
    },
  },
  plugins: [copyViewerAssets()],
});
