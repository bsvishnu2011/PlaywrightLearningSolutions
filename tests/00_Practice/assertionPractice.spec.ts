import {test, expect} from '@playwright/test'

test.describe("Assertion practice", ()=>{
    test.beforeEach(async({page})=>{
        await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    });

    test("TTA login assertions", async({page})=>{
        const username = page.getByRole("textbox",{name:"email"});
        const pass = page.getByRole("textbox",{name:"password"});
        await username.fill("bsvishnu996@gmail.com");
        expect(username).toHaveAttribute("name","eMail",{ignoreCase:true});
        expect(username).toHaveValue("bsvishnu996@gmail.com");
        await pass.fill("Goblet#18");
        expect(pass).toBeEnabled();
        await page.getByTestId("login-button").click();
        await expect(page).toHaveURL(/login-success/);
        console.log("this is second test")
    });

    test("this runs first @p1", async({page})=>{
        console.log("hiiiiiiiiiiiiiiiii")
    })
});