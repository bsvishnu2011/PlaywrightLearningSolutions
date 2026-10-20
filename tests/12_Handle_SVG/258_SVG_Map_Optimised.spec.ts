import {test, expect, Locator} from '@playwright/test'

const maplink ='https://simplemaps.com/svg/country/in';
test.describe('SVG Map',()=>{
    test.beforeEach(async({page})=>{
        await page.goto(maplink);
    })

    test("select kerala", async({page})=>{
        let states: Locator[] = await page.locator('path').all();

        for(const state of states){
            const attri = await state.getAttribute('class');

            if(attri?.endsWith('KL')){
                state.click();
                console.log("clicked on kerala");
            }
        }
        await page.pause();
    })
    
})