import {test, expect} from '@playwright/test'


test("login to testing academy", async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    let username = page.locator('#email');
    let password = page.locator('#password');
    username.fill("bsvishnu996@gmail.com");
    password.fill("Goblet#18");
    let submit = page.locator("//button[@data-testid='login-button']");
    await submit.click();
    await expect(page).toHaveURL("https://app.thetestingacademy.com/playwright/multiple_element_filter?email=bsvishnu996%40gmail.com&password=Goblet%2318#login-success");


})