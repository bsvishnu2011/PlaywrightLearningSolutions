import {test, expect} from '@playwright/test'


test("Find Helen Bankett", async({page})=>{
    await page.goto("https://awesomeqa.com/webtable.html");

    const row = await page.locator('//table[@id="customers"]//tbody/tr').count();
    console.log(`row count : ${row}`);

    const col = await page.locator('//table[@id="customers"]//tbody/tr[2]/td').count();
    console.log(`column count : ${col}`);

    //Dynamic xpath
    let first = '//table[@id="customers"]//tbody/tr['
    let second = ']/td['
    let third = ']'

    for(let i=2; i<row+1; i++){
        for(let j=1; j<col+1; j++){
            let dynamicXpath = `${first}${i}${second}${j}${third}`
            let elem = await page.locator(dynamicXpath).innerText();
            
            if(elem === "Helen Bennett"){
                let countryPath = `${dynamicXpath}/following-sibling::td`
                let companyPath = `${dynamicXpath}/preceding-sibling::td`
                let helenCountry = await page.locator(countryPath).innerText();
                let helenCompany = await page.locator(companyPath).innerText();

                console.log(`Helen is working in ${helenCompany} and she is from ${helenCountry}`);
            }
        }
    }


})