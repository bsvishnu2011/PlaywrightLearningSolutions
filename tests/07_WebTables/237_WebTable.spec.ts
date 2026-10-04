import {test,expect} from '@playwright/test'

test('Test for webtable 2', async({page})=>{
    await page.goto("https://awesomeqa.com/webtable1.html");

    const rows = page.locator('table[summary="Sample Table"] tbody tr')
    const rowcount = await rows.count();
    console.log(rowcount)
    for(let i=0; i<rowcount-1; i++){
        const rowsData = await rows.nth(i).locator('td').allInnerTexts();
        console.log(`row ${i+1}`, rowsData);
    }
})