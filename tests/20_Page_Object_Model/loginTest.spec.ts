import { test, expect } from '@playwright/test';
import { loginPage } from './pages/loginPage';

test.describe("Login and checkout", ()=>{
    test("login",async({page})=>{
        const loginPg = new loginPage(page);
        await loginPg.goto();
        await loginPg.login("standard_user","tta_secret");
        await expect(page.getByText("TTACart").first()).toHaveText("TTACart");
    })
})