import {test, expect} from '@playwright/test'

test("Add and delete user from OrangeHRM website", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //await page.locator('xpath=//input[@name="username"]').fill("Admin");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("password").fill("admin123");
    await page.getByRole("button",{name : "Login"}).click();

    await page.locator(".oxd-main-menu").getByText("PIM",{exact:true}).click();
    await page.getByRole("button",{name:"Add"}).click();

    await page.getByPlaceholder('First Name').fill("vishnu");


    await page.getByPlaceholder('Middle Name').fill("prasad");
    await page.getByPlaceholder('Last Name').fill("bs");
    await page.getByRole("button",{name:"Save"}).click()


    await page.locator(".oxd-main-menu").getByText("PIM",{exact:true}).click();
    page.pause();
    //await page.getByPlaceholder("Type for hints...").fill("vishnu");
    //await page.getByRole("button",{name:"Search"}).click()

    // Locate the employee row
    const row = page
        .locator(".oxd-table-card")
        .filter({ hasText: "vishnu" });
    // Verify employee exists
    await expect(row).toBeVisible();
    await row.locator('input[type="checkbox"]').check();

    // Verify checkbox is selected
    await expect(
        row.locator('input[type="checkbox"]')
    ).toBeChecked();
// Click Delete button
await page.getByRole("button", { name: "Delete" }).click();

// Confirm deletion
await expect(
    page.getByText("Are you Sure", { exact: false })
).toBeVisible();

await page.getByRole("button", { name: "Yes, Delete" }).click();

// Verify employee is deleted
await expect(row).not.toBeVisible();

console.log("Employee deleted successfully");

})