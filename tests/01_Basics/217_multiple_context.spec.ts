import { test, expect } from '@playwright/test';

test('multiple context', async({browser}) => {

    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();
    await adminPage.goto("https://www.google.com");
    console.log("Admin on google.com")


    //user context

    let userContext = await browser.newContext();
    let userPage = await userContext.newPage();
    await userPage.goto("https://www.facebook.com");
    console.log("user on facebook.com")

})