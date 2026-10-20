import { test } from '@playwright/test';
import path from 'path';

test.use({
  storageState: './user-session_TTA.json'
});

test('Upload profile picture to testingacademy', async ({ page }) => {

  await page.goto('https://app.thetestingacademy.com/student/dashboard');

  await page.getByRole('link', { name: 'Settings' }).click();

  const fileName = path.join(__dirname, 'me.jpg');

  await page.locator('#avatar-upload').setInputFiles(fileName);

  await page.pause();
});