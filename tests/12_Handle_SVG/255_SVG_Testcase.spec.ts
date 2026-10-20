import {test, expect, Locator} from '@playwright/test'

const URL = 'https://www.flipkart.com/search'



test.describe(async()=>{
    test.beforeEach("Logging title in flipkart search", async({page})=>{
    await page.goto(URL);
    })

    test("Verify the SVG elements", async({page})=>{
        await page.goto(URL);
        await page.locator('[name="q"]').fill("macmini");
        const search:Locator = page.locator('svg');

        await search.first().click();
        await page.waitForLoadState('networkidle');
        const titleResults: Locator = page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[2]");

       const count: number = await titleResults.count();
        for (let i = 0; i < count; i++) {
            const title: string | null = await titleResults.nth(i).textContent();
            console.log(title);
        }


      await page.pause();

    })
})