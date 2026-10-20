import { test as setup } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const USER = process.env.ADMIN_USER;

setup('authenticate', async ({ page }) => {
  if (!USER) {
    throw new Error('ADMIN_USER is not defined');
  }

  await page.goto('https://app.thetestingacademy.com/login');

  await page.locator('#identifier-field').fill(USER);

  await page
    .locator('button[data-localization-key="formButtonPrimary"]')
    .click();

  // Complete password / OTP manually
  await page.pause();

  await page.context().storageState({
    path: './user-session_TTA.json'
  });

  console.log('Session saved');
});

//npx playwright test tests/00_Practice/SessionStorageForTTA.spec.ts --headed 

