import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

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
