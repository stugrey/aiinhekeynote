import { chromium } from 'playwright';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');

function parseArgs(argv) {
  const args = {};
  for (const arg of argv) {
    if (!arg.startsWith('--')) continue;
    const [key, value = 'true'] = arg.slice(2).split('=');
    args[key] = value;
  }
  return args;
}

function stamp() {
  return new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
}

const args = parseArgs(process.argv.slice(2));
const url = args.url || 'http://127.0.0.1:5173';
const width = Number(args.width || 1600);
const height = Math.round(width / (16 / 9));
const quality = Number(args.quality || 88);
const scale = Number(args.scale || 1);
const renderer = args.renderer || 'screenshot';
const outputDir = path.resolve(PROJECT_ROOT, args.out || `anki_build/slides_${stamp()}`);
const chromePath = args.chrome || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

async function waitForSlides(page) {
  await page.locator('.slide').first().waitFor({ timeout: 15000 });
  await page.evaluate(() => document.fonts?.ready);
  await page.waitForTimeout(1200);
}

async function enableCaptureMode(page) {
  await page.addStyleTag({
    content: `
      #controls {
        display: none !important;
      }
    `,
  });
}

async function main() {
  const contentPath = path.join(PROJECT_ROOT, 'content.json');
  const content = JSON.parse(await readFile(contentPath, 'utf8'));
  const totalSlides = content.slides.length;

  await mkdir(outputDir, { recursive: true });

  let browser;
  try {
    browser = await chromium.launch();
  } catch (error) {
    if (!error.message.includes("Executable doesn't exist")) throw error;
    browser = await chromium.launch({ executablePath: chromePath });
  }
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: scale,
  });

  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => {
    sessionStorage.setItem('deckPage', '0');
    location.reload();
  });
  await page.waitForLoadState('networkidle');
  await waitForSlides(page);
  await enableCaptureMode(page);

  let captured = 0;
  while (captured < totalSlides) {
    const slides = page.locator('.slide-wrapper .slide');
    const visibleCount = await slides.count();

    for (let i = 0; i < visibleCount && captured < totalSlides; i += 1) {
      const slideNumber = captured + 1;
      const slide = content.slides[captured];
      const filename = `slide-${String(slideNumber).padStart(2, '0')}-${slide.type}.jpg`;
      const filepath = path.join(outputDir, filename);

      if (renderer === 'html2canvas') {
        const dataUrl = await slides.nth(i).evaluate(
          async (el, { captureScale, captureQuality }) => {
            const { default: html2canvas } = await import('/node_modules/.vite/deps/html2canvas.js');
            const canvas = await html2canvas(el, {
              scale: captureScale,
              useCORS: true,
              logging: false,
              backgroundColor: null,
            });
            return canvas.toDataURL('image/jpeg', captureQuality / 100);
          },
          { captureScale: scale, captureQuality: quality },
        );
        await writeFile(filepath, Buffer.from(dataUrl.split(',')[1], 'base64'));
      } else {
        await slides.nth(i).screenshot({
          path: filepath,
          type: 'jpeg',
          quality,
          animations: 'disabled',
        });
      }

      console.log(`Exported ${filename}`);
      captured += 1;
    }

    if (captured >= totalSlides) break;

    const infoBefore = await page.locator('#pagination-top .pg-info').textContent();
    await page.locator('#pagination-top .pg-next').click();
    await page.waitForFunction(
      previous => document.querySelector('#pagination-top .pg-info')?.textContent !== previous,
      infoBefore,
    );
    await waitForSlides(page);
  }

  await browser.close();
  console.log(`\nExported ${captured} current slides to ${outputDir}`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
