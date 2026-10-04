import {test, locator, expect} from '@playwright/test'

test("Test for webtable", async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    await page.pause();
})