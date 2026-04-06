#!/usr/bin/env node
/**
 * apply-job.mjs — Automated job application submission via Playwright
 * Usage: node apply-job.mjs <portal> <url> <pdf_path>
 * Portals: lever, greenhouse, ashby, dice, leidos
 */
import { chromium } from 'playwright-core';
import { resolve } from 'path';

const CHROME_PATH = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const CANDIDATE = {
  firstName: 'Erick',
  lastName: 'Rosa',
  fullName: 'Erick G. Rosa',
  email: 'ErickRosa01@gmail.com',
  phone: '862-202-0908',
  location: 'New Jersey',
  linkedin: 'https://linkedin.com/in/erickgrosa',
  website: '',
};

const [portal, url, pdfPath] = process.argv.slice(2);
if (!portal || !url || !pdfPath) {
  console.error('Usage: node apply-job.mjs <lever|greenhouse|ashby|dice|leidos> <url> <pdf_path>');
  process.exit(1);
}

const absPdf = resolve(pdfPath);

async function applyLever(page, url) {
  // Lever application pages have /apply at the end or we navigate to the apply form
  const applyUrl = url.includes('/apply') ? url : url + '/apply';
  await page.goto(applyUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(2000);

  // Fill standard Lever fields
  const nameInput = page.locator('input[name="name"]');
  if (await nameInput.count() > 0) {
    await nameInput.fill(CANDIDATE.fullName);
  }

  const emailInput = page.locator('input[name="email"]');
  if (await emailInput.count() > 0) {
    await emailInput.fill(CANDIDATE.email);
  }

  const phoneInput = page.locator('input[name="phone"]');
  if (await phoneInput.count() > 0) {
    await phoneInput.fill(CANDIDATE.phone);
  }

  const locationInput = page.locator('input[name="location"]');
  if (await locationInput.count() > 0) {
    await locationInput.fill(CANDIDATE.location);
  }

  const linkedinInput = page.locator('input[name="urls[LinkedIn]"]');
  if (await linkedinInput.count() > 0) {
    await linkedinInput.fill(CANDIDATE.linkedin);
  }

  // Upload resume
  const fileInput = page.locator('input[type="file"]').first();
  if (await fileInput.count() > 0) {
    await fileInput.setInputFiles(absPdf);
    await page.waitForTimeout(2000);
  }

  // Take screenshot before submit
  await page.screenshot({ path: resolve('output', 'screenshot-before-submit-lever.png'), fullPage: true });

  // Submit
  const submitBtn = page.locator('button[type="submit"], button:has-text("Submit application"), button:has-text("Submit")').first();
  if (await submitBtn.count() > 0) {
    await submitBtn.click();
    await page.waitForTimeout(5000);
    await page.screenshot({ path: resolve('output', 'screenshot-after-submit-lever.png'), fullPage: true });
    console.log('✅ Lever application submitted');
  } else {
    console.log('⚠️ Could not find submit button');
  }
}

async function applyGreenhouse(page, url) {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(2000);

  // Look for "Apply" button to open the form
  const applyBtn = page.locator('a:has-text("Apply"), button:has-text("Apply for this job"), button:has-text("Apply now")').first();
  if (await applyBtn.count() > 0) {
    await applyBtn.click();
    await page.waitForTimeout(2000);
  }

  // Fill Greenhouse standard fields
  const firstNameInput = page.locator('#first_name, input[name="first_name"]').first();
  if (await firstNameInput.count() > 0) {
    await firstNameInput.fill(CANDIDATE.firstName);
  }

  const lastNameInput = page.locator('#last_name, input[name="last_name"]').first();
  if (await lastNameInput.count() > 0) {
    await lastNameInput.fill(CANDIDATE.lastName);
  }

  const emailInput = page.locator('#email, input[name="email"]').first();
  if (await emailInput.count() > 0) {
    await emailInput.fill(CANDIDATE.email);
  }

  const phoneInput = page.locator('#phone, input[name="phone"]').first();
  if (await phoneInput.count() > 0) {
    await phoneInput.fill(CANDIDATE.phone);
  }

  const linkedinInput = page.locator('input[name*="linkedin"], input[id*="linkedin"]').first();
  if (await linkedinInput.count() > 0) {
    await linkedinInput.fill(CANDIDATE.linkedin);
  }

  // Upload resume
  const fileInput = page.locator('input[type="file"]').first();
  if (await fileInput.count() > 0) {
    await fileInput.setInputFiles(absPdf);
    await page.waitForTimeout(2000);
  }

  await page.screenshot({ path: resolve('output', `screenshot-before-submit-greenhouse-${Date.now()}.png`), fullPage: true });

  const submitBtn = page.locator('button[type="submit"], input[type="submit"], button:has-text("Submit Application"), button:has-text("Submit")').first();
  if (await submitBtn.count() > 0) {
    await submitBtn.click();
    await page.waitForTimeout(5000);
    await page.screenshot({ path: resolve('output', `screenshot-after-submit-greenhouse-${Date.now()}.png`), fullPage: true });
    console.log('✅ Greenhouse application submitted');
  } else {
    console.log('⚠️ Could not find submit button');
  }
}

async function applyAshby(page, url) {
  const applyUrl = url.includes('/application') ? url : url + '/application';
  await page.goto(applyUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(2000);

  // Ashby forms — fill by label
  const nameInput = page.locator('input[name*="name"], input[placeholder*="name"]').first();
  if (await nameInput.count() > 0) {
    await nameInput.fill(CANDIDATE.fullName);
  }

  const emailInput = page.locator('input[name*="email"], input[type="email"]').first();
  if (await emailInput.count() > 0) {
    await emailInput.fill(CANDIDATE.email);
  }

  const phoneInput = page.locator('input[name*="phone"], input[type="tel"]').first();
  if (await phoneInput.count() > 0) {
    await phoneInput.fill(CANDIDATE.phone);
  }

  const linkedinInput = page.locator('input[name*="linkedin"], input[placeholder*="linkedin"], input[placeholder*="LinkedIn"]').first();
  if (await linkedinInput.count() > 0) {
    await linkedinInput.fill(CANDIDATE.linkedin);
  }

  // Upload resume
  const fileInput = page.locator('input[type="file"]').first();
  if (await fileInput.count() > 0) {
    await fileInput.setInputFiles(absPdf);
    await page.waitForTimeout(2000);
  }

  await page.screenshot({ path: resolve('output', 'screenshot-before-submit-ashby.png'), fullPage: true });

  const submitBtn = page.locator('button[type="submit"], button:has-text("Submit"), button:has-text("Apply")').first();
  if (await submitBtn.count() > 0) {
    await submitBtn.click();
    await page.waitForTimeout(5000);
    await page.screenshot({ path: resolve('output', 'screenshot-after-submit-ashby.png'), fullPage: true });
    console.log('✅ Ashby application submitted');
  } else {
    console.log('⚠️ Could not find submit button');
  }
}

async function run() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: CHROME_PATH,
  });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  try {
    switch (portal) {
      case 'lever':
        await applyLever(page, url);
        break;
      case 'greenhouse':
        await applyGreenhouse(page, url);
        break;
      case 'ashby':
        await applyAshby(page, url);
        break;
      default:
        // For dice and leidos, just navigate and screenshot the apply page
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
        await page.waitForTimeout(3000);
        await page.screenshot({ path: resolve('output', `screenshot-${portal}.png`), fullPage: true });
        console.log(`⚠️ ${portal} portal requires manual submission — screenshot saved`);
    }
  } catch (err) {
    console.error(`❌ Error: ${err.message}`);
    await page.screenshot({ path: resolve('output', `screenshot-error-${portal}.png`), fullPage: true });
  }

  await browser.close();
}

run();
