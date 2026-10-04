import {test, expect} from '@playwright/test'


test("Click on Rohan Mehta", async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    const row = await page.locator('//table[@aria-label="Employee Management System table"]/tbody/tr').count();
    console.log(`row count : ${row}`);

    const col = await page.locator('//table[@aria-label="Employee Management System table"]/tbody/tr[1]/td').count();
    console.log(`column count : ${col}`);
    //Dynamic xpath
    let first = '//table[@aria-label="Employee Management System table"]/tbody/tr['
    let second = ']/td['
    let third = ']'

    for(let i=2; i<row+1; i++){
        for(let j=1; j<col+1; j++){
            let dynamicXpath = `${first}${i}${second}${j}${third}`
            let elem = await page.locator(dynamicXpath).innerText();
            
            if(elem === "Rohan.Mehta"){
                let countryPath = `${dynamicXpath}/preceding-sibling::td[1]/input`

                await page.locator(`xpath=${countryPath}`).check();
                await page.pause();
                await expect(page.locator(`xpath=${countryPath}`)).toBeChecked();
            }
        }
    }


})