import {test, expect} from '@playwright/test'

test("Navigating to the tta website", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/");
});


test("BCP - in app.vwo.com two roles", async ( {browser} ) => {
    let adminContext = await browser.newContext(); 
    let userContext = await browser.newContext(); 
    let customerContext = await browser.newContext(); 

    let adminPage = await adminContext.newPage();
    let userPage = await userContext.newPage();
    let customerPage = await customerContext.newPage();

    await adminPage.goto("https://www.google.com");

    await userPage.goto("https://playwright.dev/");

    await customerPage.goto("https://onecompiler.com/typescript");

    await adminPage.close()
    await userPage.close()
    await customerPage.close()

})