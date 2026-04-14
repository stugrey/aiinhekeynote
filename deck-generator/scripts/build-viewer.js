#!/usr/bin/env node
// Orchestrator for the standalone viewer build.
//
// Steps:
//   1. Transcode any fresh voiceovers to .m4a (idempotent).
//   2. Run `vite build --config vite.viewer.config.js` → dist-site/.
//   3. Sanity-check the output.
//   4. Print path + total byte size.
//
// Exits non-zero on any failure so callers (`/api/export-site`) can bubble
// the error back to the Export All button.

import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist-site');

function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { cwd: ROOT, stdio: 'inherit', ...opts });
    p.on('error', reject);
    p.on('close', code => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} ${args.join(' ')} exited ${code}`));
    });
  });
}

function walkSize(dir) {
  if (!fs.existsSync(dir)) return 0;
  let total = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) total += walkSize(p);
    else total += fs.statSync(p).size;
  }
  return total;
}

function fmtMB(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function sanityCheck() {
  const required = [
    'index.html',
    'content.json',
    'config.json',
    'assets',
    'tokens',
    'env-theater.hdr',
  ];
  const missing = required.filter(p => !fs.existsSync(path.join(DIST, p)));
  if (missing.length) {
    throw new Error(`Missing required output paths: ${missing.join(', ')}`);
  }

  // Require at least one sample voiceover in both formats
  const vo = path.join(DIST, 'voiceovers');
  if (!fs.existsSync(vo)) {
    throw new Error('Missing voiceovers/ directory in output');
  }
  const voFiles = fs.readdirSync(vo);
  const hasWebm = voFiles.some(f => f.endsWith('.webm'));
  const hasM4a = voFiles.some(f => f.endsWith('.m4a'));
  if (!hasWebm) throw new Error('No .webm files in voiceovers/');
  if (!hasM4a) throw new Error('No .m4a files in voiceovers/ (transcode failed?)');

  // PDF fallback is a soft dependency — warn but don't fail
  if (!fs.existsSync(path.join(DIST, 'pdf/presentation.pdf'))) {
    console.warn('[build-viewer] warning: pdf/presentation.pdf missing — users will not see a PDF fallback link');
  }
}

async function main() {
  console.log('[build-viewer] step 1/2: transcode voiceovers');
  await run(process.execPath, [path.join(__dirname, 'transcode-voiceovers.js')]);

  console.log('[build-viewer] step 2/2: vite build');
  await run('npx', ['vite', 'build', '--config', 'vite.viewer.config.js']);

  console.log('[build-viewer] sanity-checking output');
  sanityCheck();

  const bytes = walkSize(DIST);
  console.log(`[build-viewer] done → ${DIST}`);
  console.log(`[build-viewer] total: ${fmtMB(bytes)}`);
}

main().catch(e => {
  console.error('[build-viewer] failed:', e.message);
  process.exit(1);
});
