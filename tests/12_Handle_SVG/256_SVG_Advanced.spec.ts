import { test, expect, Locator } from '@playwright/test';

const URL = 'https://app.thetestingacademy.com/playwright/widgets/svg'; // replace with target page


test.describe("SVG Handling", ()=>{
    test.beforeEach(async({page})=>{
        await page.goto(URL);

    })

    test("Locate or click svg", async({page})=>{
        const circle: Locator =page.locator('#circle-blue');
        await circle.click();

        const circleOutput = await page.locator('#shapes-output').innerText();

        expect(circleOutput).toContain("circle-blue");


        await page.getByRole("button", {name: /Q3 bar/}).click();
        await page.getByRole("radio",{name:'4 stars'}).click();

        const bars = await page.locator('.bar').all();

        for(let bar of bars){
            const bartxt = await bar.getAttribute('data-quarter');
            console.log(bartxt);
        }


        await page.pause();
    })
})