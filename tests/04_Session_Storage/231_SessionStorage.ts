import { chromium } from "playwright"
import dotenv from "dotenv";

dotenv.config();

const VWO_PASS = process.env.VWO_PASS;
const VWO_USER = process.env.VWO_USER;

async function saveStorage(){
    let browser = await chromium.launch({headless: false});
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://app.wingify.com/#/login");

    await page.fill("#login-username", VWO_USER);
    await page.fill("#login-password", VWO_PASS);
    page.click("#js-login-btn");
    await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });
    await context.storageState({path: "./user-session.json"});
    console.log("session saved to user-session.json")
    await browser.close();

}
saveStorage();

//this will start the browser and create a file.