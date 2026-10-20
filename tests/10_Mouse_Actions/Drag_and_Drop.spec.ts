import {test, expect} from '@playwright/test'

test('Drag and drop', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop",{waitUntil:'domcontentloaded',timeout:90000});

    let a = page.locator('#column-a');
    let b = page.locator('#column-b');
    await expect(a).toContainText("A");
    await a.dragTo(b);
    await expect(a).toContainText("B");
    console.log("coloumn A test is : " + await a.innerText());
})