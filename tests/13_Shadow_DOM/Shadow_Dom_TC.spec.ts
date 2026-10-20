import {test, expect, Locator} from '@playwright/test'

test.describe('shadow DOM', ()=>{
    test.beforeEach(async({page})=>{
        await page.goto("https://app.thetestingacademy.com/playwright/widgets/shadow-dom");
    })

    test("sign in", async({page})=>{
        await page.getByTestId("card-account-email").fill('vishnu@gmail.com');
        await page.getByTestId("card-account-password").fill("pass");
        await page.getByTestId("card-account-submit").click();
        const namee = page.getByTestId('card-account-status');
        await expect(namee).toContainText("vishnu@gmail.com");


        const target = page.getByTestId("counter-cart-inc");
        await target.click();
        await target.click();
        await expect(page.getByTestId('counter-cart').getByTestId('counter-value')).toHaveText('5');
        await page.pause();
    });
});