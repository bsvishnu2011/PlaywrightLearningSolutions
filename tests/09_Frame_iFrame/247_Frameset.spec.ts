import {test, expect, FrameLocator} from '@playwright/test'

test('handling frameset', async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");
    let mainFrame : FrameLocator = await page.frameLocator('[name="main"]');
    let sideFrame : FrameLocator = page.frameLocator('frame[name="side"]');
    let footerFrame : FrameLocator = page.frameLocator('frame[name="footer"]');

    const hdtxt = await mainFrame.locator('h2').innerText();
    console.log(hdtxt);

    const allLocators: Locator[] = await page.locator('//frame').all();
    console.log(allLocators)

    for(const frame of allLocators){
        console.log(await frame.getAttribute('name'), ': ', await frame.getAttribute('src'));
    }

    let sideFramee: FrameLocator = await page.frameLocator('[name="side"]');
    await sideFramee.getByTestId('side-link-registration').click();
})