import {Locator, Page} from '@playwright/test';

export class loginPage{
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginbtn: Locator;
    readonly title: Locator;

    constructor(page:Page){
        this.page = page;
        this.username = page.getByRole("textbox", {name:"Username"});
        this.password = page.getByRole("textbox", { name: "Password" });
        this.loginbtn = page.getByRole("button", { name: "Login" });
        this.title = page.getByText("TTACart");
    }

    async goto(){
        await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    }

    async login(user:string, pass:string){
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginbtn.click();
    }

}