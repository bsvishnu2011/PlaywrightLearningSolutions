import {test, expect, Locator} from '@playwright/test'

test.describe('shadow DOM', ()=>{
    test.beforeEach(async({page})=>{
        await page.goto("https://selectorshub.com/xpath-practice-page/");
    })

    test("sign in", async({page})=>{
        await page.locator('#kils').fill('vishnu');
        await page.locator('#pizza').fill('vishnu@123');
        await page.keyboard.press('Tab'); 
        await page.keyboard.type('secret');
        await page.keyboard.press('Tab'); 
        await page.keyboard.press('Tab'); 
        await page.keyboard.type('secretqwe');
        await page.pause();
    });
});