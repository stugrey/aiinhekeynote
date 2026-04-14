#!/usr/bin/env node
// Transcode voiceovers/*.webm to matching .m4a (AAC-LC 128kbps) so the
// standalone viewer can serve a universal fallback for browsers without
// opus-in-webm support (Safari ≤14, older iOS WebViews).
//
// Idempotent: skips files whose .m4a already exists and is newer than the
// source .webm. Re-runs are cheap.
//
// Usage:
//   node scripts/transcode-voiceovers.js
//   node scripts/transcode-voiceovers.js --force    # re-transcode everything
//   node scripts/transcode-voiceovers.js --dry-run  # show what would run

import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const VO_DIR = path.join(ROOT, 'voiceovers');

const FFMPEG_CANDIDATES = [
  process.env.FFMPEG_BIN,
  '/opt/homebrew/bin/ffmpeg',
  '/usr/local/bin/ffmpeg',
  'ffmpeg',
].filter(Boolean);

function resolveFfmpeg() {
  for (const candidate of FFMPEG_CANDIDATES) {
    if (candidate === 'ffmpeg') return 'ffmpeg'; // rely on PATH
    if (fs.existsSync(candidate)) return candidate;
  }
  return 'ffmpeg';
}

function parseArgs(argv) {
  return {
    force: argv.includes('--force'),
    dryRun: argv.includes('--dry-run'),
  };
}

function fmtKB(bytes) {
  return `${(bytes / 1024).toFixed(0)}KB`;
}

function runFfmpeg(ffmpegBin, args) {
  return new Promise((resolve, reject) => {
    const p = spawn(ffmpegBin, args, { stdio: ['ignore', 'ignore', 'pipe'] });
    let stderr = '';
    p.stderr.on('data', d => { stderr += d.toString(); });
    p.on('error', reject);
    p.on('close', code => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg exited ${code}: ${stderr.slice(-500)}`));
    });
  });
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!fs.existsSync(VO_DIR)) {
    console.error(`No voiceovers directory at ${VO_DIR}`);
    process.exit(0);
  }

  const ffmpegBin = resolveFfmpeg();
  const webms = fs.readdirSync(VO_DIR).filter(f => f.endsWith('.webm')).sort();

  if (webms.length === 0) {
    console.log('No .webm files to transcode.');
    return;
  }

  let transcoded = 0;
  let skipped = 0;
  let failed = 0;

  for (const name of webms) {
    const webmPath = path.join(VO_DIR, name);
    const m4aPath = path.join(VO_DIR, name.replace(/\.webm$/i, '.m4a'));

    // Skip if up-to-date (m4a newer than webm) unless --force
    if (!args.force && fs.existsSync(m4aPath)) {
      const webmStat = fs.statSync(webmPath);
      const m4aStat = fs.statSync(m4aPath);
      if (m4aStat.mtimeMs >= webmStat.mtimeMs) {
        skipped++;
        continue;
      }
    }

    if (args.dryRun) {
      console.log(`would transcode ${name}`);
      continue;
    }

    process.stdout.write(`transcoding ${name}... `);
    try {
      await runFfmpeg(ffmpegBin, [
        '-y',
        '-i', webmPath,
        '-vn',
        '-c:a', 'aac',
        '-b:a', '128k',
        '-movflags', '+faststart',
        '-hide_banner',
        '-loglevel', 'error',
        m4aPath,
      ]);
      const src = fs.statSync(webmPath).size;
      const dst = fs.statSync(m4aPath).size;
      console.log(`ok (${fmtKB(src)} → ${fmtKB(dst)})`);
      transcoded++;
    } catch (e) {
      console.log('FAILED');
      console.error(`  ${e.message}`);
      failed++;
    }
  }

  console.log();
  console.log(`done — transcoded: ${transcoded}, skipped up-to-date: ${skipped}, failed: ${failed}`);

  if (failed > 0) process.exit(2);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
