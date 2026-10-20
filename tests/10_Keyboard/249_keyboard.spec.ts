import {test, expect} from '@playwright/test'

test('Keyboard actions', async({page})=>{
    await page.goto("https://keycode.info");

    await page.keyboard.press("s");
    await page.screenshot({path : "s.png"});

   await page.keyboard.press('ArrowLeft');
   await page.screenshot({ path: 'ArrowLeft.png' });


   await page.keyboard.press('Shift+O');
   await page.screenshot({ path: 'O.png' });

   await page.keyboard.up("Shift");
   await page.keyboard.down("Shift");


   await page.pause();
})