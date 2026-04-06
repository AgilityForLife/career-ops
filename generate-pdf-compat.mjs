#!/usr/bin/env node
/**
 * generate-pdf-compat.mjs — PDF generation using available Chromium
 */
import { chromium } from 'playwright-core';
import { resolve, dirname } from 'path';
import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CHROME_PATH = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const [inputPath, outputPath] = process.argv.slice(2);
if (!inputPath || !outputPath) {
  console.error('Usage: node generate-pdf-compat.mjs <input.html> <output.pdf>');
  process.exit(1);
}

const absInput = resolve(inputPath);
const absOutput = resolve(outputPath);

let html = await readFile(absInput, 'utf-8');
const fontsDir = resolve(__dirname, 'fonts');
html = html.replace(/url\(['"]?\.\/fonts\//g, `url('file://${fontsDir}/`);
html = html.replace(/file:\/\/([^'")]+)\.woff2['"]\)/g, `file://$1.woff2')`);

const browser = await chromium.launch({ headless: true, executablePath: CHROME_PATH });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);

const pdfBuffer = await page.pdf({
  format: 'Letter',
  printBackground: true,
  margin: { top: '0.6in', right: '0.6in', bottom: '0.6in', left: '0.6in' },
});

await writeFile(absOutput, pdfBuffer);
await browser.close();

const kb = (pdfBuffer.length / 1024).toFixed(1);
console.log(`✅ ${absOutput} (${kb} KB)`);
