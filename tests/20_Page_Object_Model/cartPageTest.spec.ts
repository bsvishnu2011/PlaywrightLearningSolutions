import {test, expect} from '@playwright/test'
import { loginPage } from './pages/loginPage'
import { cartPage } from './pages/cartPage'
import { inventoryPage } from './pages/inventoryPage'

test.describe("Cartpage Test", ()=>{
    test("Cart page test flow", async({page})=>{
        const loginpg = new loginPage(page);
        const cartpg = new cartPage(page);
        const inventorypg = new inventoryPage(page);

        await test.step("Navigate to login page", async()=>{
            await loginpg.goto();
            await expect(page).toHaveURL(/ttacart/)
        })

        await test.step("Login to app", async()=>{
            await loginpg.login("standard_user","tta_secret");
            await expect(inventorypg.tittle).toHaveText("Products")
        })

        await test.step("Add products to cart", async()=>{
            await inventorypg.addFirstItemToCart();

        })

        await test.step("open cart", async()=>{
            await inventorypg.openCart();
        })

        await test.step("verify item is in cart", async()=>{
            await expect(cartpg.linkCheckout).toBeVisible();
        })
    })
})