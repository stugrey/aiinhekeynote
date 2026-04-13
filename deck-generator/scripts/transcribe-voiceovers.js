#!/usr/bin/env node
// Transcribe per-slide voiceovers with OpenAI Whisper and write the results
// back into content.json as `slide.voiceover.transcript`.
//
// Usage:
//   node scripts/transcribe-voiceovers.js              # transcribe all untranscribed
//   node scripts/transcribe-voiceovers.js --force      # retranscribe everything
//   node scripts/transcribe-voiceovers.js --limit 1    # stop after N slides
//   node scripts/transcribe-voiceovers.js --dry-run    # show what would run
//
// Reads OPENAI_API_KEY from an .env file (default path below).
// Incremental save: writes content.json after every slide so a failure
// mid-run can be resumed just by re-running.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ENV_PATH = process.env.OPENAI_ENV_PATH
  || '/Users/stugrey/Documents/Student Voice ICD/configs/student-voice-eleventy/.env';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const CONTENT_PATH = path.join(ROOT, 'content.json');

function loadEnv(envPath) {
  if (!fs.existsSync(envPath)) {
    throw new Error(`env file not found: ${envPath}`);
  }
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

function parseArgs(argv) {
  const args = { force: false, dryRun: false, limit: Infinity };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--force') args.force = true;
    else if (a === '--dry-run') args.dryRun = true;
    else if (a === '--limit') args.limit = Number(argv[++i]) || Infinity;
  }
  return args;
}

async function transcribeFile(filePath, mime) {
  const buf = fs.readFileSync(filePath);
  const fd = new FormData();
  fd.append('file', new Blob([buf], { type: mime || 'audio/webm' }), path.basename(filePath));
  fd.append('model', 'whisper-1');
  // verbose_json is required to request word-level timestamps — those feed
  // future karaoke/closed-caption highlighting, so we always store them.
  fd.append('response_format', 'verbose_json');
  fd.append('timestamp_granularities[]', 'word');

  const res = await fetch('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` },
    body: fd,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text}`);
  }
  return res.json();
}

function writeContent(content) {
  fs.writeFileSync(CONTENT_PATH, JSON.stringify(content, null, 2) + '\n');
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  loadEnv(ENV_PATH);
  if (!process.env.OPENAI_API_KEY) {
    console.error(`OPENAI_API_KEY not set (checked ${ENV_PATH})`);
    process.exit(1);
  }

  const content = JSON.parse(fs.readFileSync(CONTENT_PATH, 'utf8'));
  const slides = content.slides || [];

  let transcribed = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < slides.length; i++) {
    if (transcribed >= args.limit) break;
    const slide = slides[i];
    const vo = slide?.voiceover;
    const page = String(i + 1).padStart(2, '0');

    if (!vo?.file) {
      console.log(`slide ${page}: no voiceover — skip`);
      skipped++;
      continue;
    }
    if (vo.transcript && !args.force) {
      console.log(`slide ${page}: already transcribed — skip (--force to redo)`);
      skipped++;
      continue;
    }

    const filePath = path.join(ROOT, vo.file);
    if (!fs.existsSync(filePath)) {
      console.warn(`slide ${page}: audio missing on disk — ${vo.file}`);
      failed++;
      continue;
    }

    if (args.dryRun) {
      console.log(`slide ${page}: would transcribe ${vo.file}`);
      continue;
    }

    process.stdout.write(`slide ${page}: transcribing ${path.basename(filePath)}... `);
    try {
      const result = await transcribeFile(filePath, vo.mime);
      vo.transcript = (result.text || '').trim();
      vo.words = Array.isArray(result.words)
        ? result.words.map(w => ({
            word: w.word,
            start: Number(w.start.toFixed(3)),
            end: Number(w.end.toFixed(3)),
          }))
        : [];
      vo.transcribed_at = new Date().toISOString();
      transcribed++;
      writeContent(content);
      console.log(`${vo.transcript.length} chars · ${vo.words.length} words ✓`);
    } catch (e) {
      failed++;
      console.log(`FAILED`);
      console.error(`  ${e.message}`);
    }
  }

  console.log();
  console.log(`done — transcribed: ${transcribed}, skipped: ${skipped}, failed: ${failed}`);
  if (failed > 0) process.exit(2);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
