import {test, expect, FrameLocator} from '@playwright/test'

test('handling iframe', async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/frames/");
    let vehicleFrame : FrameLocator = page.frameLocator('#frame-one');

    await vehicleFrame.locator('#RESULT_TextField-1').fill("Virtus");
    await vehicleFrame.locator('#RESULT_TextField-2').fill("vishnu");
    await vehicleFrame.locator('#RESULT_TextField-3').fill("KL577666");
    await vehicleFrame.locator('#RESULT_RadioButton-1').click();
    await vehicleFrame.locator('#RESULT_RadioButton-1').selectOption('Hatchback');
    await vehicleFrame.locator('#RESULT_TextField-4').fill("2010");
    await vehicleFrame.locator('#RESULT_TextArea-1').fill("helloo my name is vishnu...")
    await vehicleFrame.getByTestId('vehicle-submit').click();
    await expect(vehicleFrame.locator('#vehicle-output')).toContainText('vishnu');
    let output = await vehicleFrame.locator("#vehicle-output").innerText();
    console.log(output);
})
