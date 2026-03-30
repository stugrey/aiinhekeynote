/**
 * Export script — renders slides to PNG using Playwright.
 *
 * Usage:
 *   npm run export                    — export with current config
 *   npm run export -- --out=./output  — custom output directory
 *   npm run export -- --width=1920    — custom width (height = width / (16/9))
 */

import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import { resolve, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PROJECT_ROOT = resolve(__dirname, '..');

// Parse CLI args
const args = Object.fromEntries(
  process.argv.slice(2)
    .filter(a => a.startsWith('--'))
    .map(a => {
      const [k, v] = a.slice(2).split('=');
      return [k, v || 'true'];
    })
);

const OUTPUT_DIR = resolve(PROJECT_ROOT, args.out || 'output');
const WIDTH = parseInt(args.width || '1920', 10);
const HEIGHT = Math.round(WIDTH / (16 / 9));
const DEV_SERVER = args.url || 'http://localhost:5173';

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  console.log(`\nExporting slides at ${WIDTH}x${HEIGHT}`);
  console.log(`Output: ${OUTPUT_DIR}\n`);

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 2,  // 2x for crisp output
  });

  await page.goto(DEV_SERVER, { waitUntil: 'networkidle' });

  // Wait for fonts to load
  await page.evaluate(() => document.fonts.ready);
  // Extra settle time for font rendering
  await page.waitForTimeout(500);

  // Find all slides
  const slideIds = await page.$$eval('.slide', els => els.map(el => el.id));
  console.log(`Found ${slideIds.length} slides\n`);

  for (const id of slideIds) {
    const slideEl = page.locator(`#${id}`);
    const filename = `${id}.png`;
    const filepath = join(OUTPUT_DIR, filename);

    await slideEl.screenshot({ path: filepath });
    console.log(`  Exported: ${filename}`);
  }

  await browser.close();
  console.log(`\nDone. ${slideIds.length} slides exported to ${OUTPUT_DIR}\n`);
}

main().catch(err => {
  console.error('Export failed:', err);
  process.exit(1);
});
