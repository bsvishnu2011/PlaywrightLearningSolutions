import {test, expect} from '@playwright/test'

test('view', async ({page}) => {
    await page.goto("https://www.google.com")

    await expect(page).toHaveTitle("Google")
})


test('admin', async({page})=>{
    await page.goto("https://www.google.com")

    await expect(page).toHaveURL("https://www.google.com/")
})

