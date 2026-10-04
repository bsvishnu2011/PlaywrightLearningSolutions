import {test, expect} from '@playwright/test'

test('Advanced custom dropdown', async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");
    
    //Single searchable
    await page.getByTestId("rs-single").click();
    await page.getByText("WebdriverIO",{exact : false}).click();

    //Multi selection dropdown
    await page.getByTestId("rs-multi-input").click();
    await page.getByText("Pytest", {exact : true}).click();
    await page.getByText("JUnit", {exact : true}).click();
    await page.keyboard.press("Escape");

    //multi search and click dropdowns
    await page.locator('#rs-creatable').click();
    await page.getByText("api-testing").click();
    await page.getByText("performance").click();
    await page.keyboard.press("Escape");

    //Fetch on type
    await page.locator("#rs-async").click();
    await page.getByTestId("rs-async-input").fill("Pune");
    await expect(page.getByTestId("rs-async-menu")).toHaveText("Pune");
    await page.getByRole("option",{name : "Pune", exact : true}).click();


    await page.pause();
})



