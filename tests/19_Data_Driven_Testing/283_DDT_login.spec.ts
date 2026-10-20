import { test, expect } from '@playwright/test'
import datas from './test-data/login.json'


test.describe("Testing login", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    })

    test(`Login DDT`, async ({ page }) => {
        for (data of datas) {
            await page.getByRole("textbox", { name: "email" }).fill(datas.validcred.username);
            await page.getByRole("textbox", { name: "password" }).fill(datas.validcred.password);
            await page.getByTestId("login-button").click();
            await expect(page).toHaveURL(/login/);
        }

    })
})