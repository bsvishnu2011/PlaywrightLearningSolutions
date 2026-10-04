import {test, expect} from '@playwright/test'

test("Multiple element test 1", async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    let allElements: string[] = await page.locator('a.list-group-item').allInnerTexts();

    console.log(allElements.length)

    for(const name of allElements){
        console.log(name);
    }

    for(const elem of allElements){
        if(elem === "Forgot Password"){
            await page.getByText(elem).first().click();
        }
    }

    const getAtt = await page.locator('a.list-group-item').all();
    for(const loc of getAtt){
        console.log(await loc.getAttribute("href"));
    }
});