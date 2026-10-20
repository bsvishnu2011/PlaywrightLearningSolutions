import {test, expect} from '@playwright/test'
import path from 'path';

const URL = 'https://the-internet.herokuapp.com/upload';

test.describe('Path TC', ()=>{
    test.beforeEach(async({page})=>{
        await page.goto(URL);
    })

    test("Upload file in herokuap", async({page})=>{
        const filePath = path.join(__dirname, 'testdata.txt');
        console.log(filePath);
        // __dirname - Current working directory full path 
        await page.locator("#file-upload").setInputFiles([filePath]);
        await page.getByRole("button", { name: "Upload" }).click();
        await expect(page.locator('#uploaded-files')).toContainText('testdata.txt');
    })
})

