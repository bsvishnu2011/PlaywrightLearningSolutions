import {test, expect, FrameLocator} from '@playwright/test'

test('Fill the form', async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice#page");
    await page.getByTestId('first-name').fill("vishnu");
    await page.getByTestId('last-name').fill("prasad");
    await page.getByTestId('gender-male').click();
    await page.getByTestId('years-experience').click();
    await page.selectOption('#years-experience','1');

    await page.getByTestId('profession-automation').click();
    await page.getByTestId('tool-uft').check();
    await page.getByTestId('continent-europe').check();
    await page.getByTestId('profile-submit').click();
    await expect(page.locator('#submission-output')).toContainText('vishnu');


    //dothis by using the getby role and allll

})
