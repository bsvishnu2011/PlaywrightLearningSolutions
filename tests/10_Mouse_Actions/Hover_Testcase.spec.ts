import {test, expect} from '@playwright/test'

test('Hover mouse to spicejet menu', async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");

    await page.getByTestId("nav-add-ons").hover();
    await page.getByRole('menuitem',{name : "Wi-Fi"}).click()
    const outp = await page.getByTestId("hover-output").innerText();
    console.log(outp);
    await expect(outp).toContain("nWi-Fi");

   await page.pause();
})