const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://in.tradingview.com/');
  await page.getByRole('link', { name: 'Get started for free' }).click();
  await page.getByRole('link', { name: 'Community Community menu' }).click();
  await page.getByRole('link', { name: 'Trading ideas' }).click();
  await page.getByRole('tab', { name: 'Editors\' picks' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();