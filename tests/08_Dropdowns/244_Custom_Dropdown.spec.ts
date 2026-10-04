import {test, expect} from '@playwright/test'

test('custom dropdown selection', async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");
    
    await page.locator('#lang-shell').click();
    await page.getByRole("option",{name:'Python'}).click();

    await page.getByTestId("experience-trigger").click();
    await page.getByText("Mid-level (4-6 years)", {exact : true}).click();
    await page.pause();
})



