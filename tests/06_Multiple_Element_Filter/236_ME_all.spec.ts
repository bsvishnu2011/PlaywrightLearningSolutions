import {test, Locator} from '@playwright/test'

test("Multiple test 2", async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    let allElements: Locator[] = await page.locator('a.list-group-item').all();

    console.log(allElements.length)

    for(const name of allElements){
        console.log(await name.getAttribute("href"));
    }

    await page.pause();

    
});