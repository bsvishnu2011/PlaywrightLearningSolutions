import {test, expect, Locator} from '@playwright/test'


test("automate applitools", async({page})=>{
    await page.goto("https://demo.applitools.com/");
    await page.locator('#username').fill("Admin");
    await page.locator('#password').fill("Password@123");
    await page.locator('#log-in').click();
    await expect(page).toHaveURL('https://demo.applitools.com/app.html');

    const table = page.locator('.table.table-padded');
    const rowCount = await table.locator('tbody tr').count();
    console.log(rowCount);

    let earned = 0;
    let spend = 0;
    let total = 0;

    for(let i=0; i<rowCount; i++){
        const row = await page.locator('.text-right.bolder.nowrap').nth(i);
        const coloumn = await row.innerText();
        const result = Number(coloumn.replace(/[, ]|USD/g, ''));
        if(result < 0){
            spend += result;
        }else{
            earned += result;
        }
    }

    console.log(`Earned amount is ${earned}`);
    console.log(`Spend amount is ${spend}`);
    console.log(`Total amount is ${earned + spend}`)

})