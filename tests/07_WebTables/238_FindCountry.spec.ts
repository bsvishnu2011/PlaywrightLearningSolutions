import {test,expect} from '@playwright/test'

test('Find helen bennet country', async({page})=>{
    await page.goto("https://awesomeqa.com/webtable.html");

    const row = await page.locator('//table[@id="customers"]/tbody/tr').count();
    const col = await page.locator('//table[@id="customers"]/tbody/tr[2]/td').count();
    console.log(`row: ${row}`)
    console.log(`col: ${col}`)


    let first = '//table[@id="customers"]/tbody/tr['
    let second = ']/td['
    let third = ']'

    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            const dynamicPath = `${first}${i}${second}${j}${third}`
            const celldata = await page.locator(dynamicPath).innerText();
            console.log(celldata)
            if(celldata.includes('Helen Bennett')){
                const contrypath = `${dynamicPath}/following-sibling::td`;
                const countrypathtext = await page.locator(contrypath).innerText();
                console.log(`hellen is from ${countrypathtext}`)

            }
        }
    }
})