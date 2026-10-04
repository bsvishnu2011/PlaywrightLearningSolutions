import {test, expect} from '@playwright/test'

test("print DSLR names with price from flipkart", async({page})=>{
    await page.goto("https://www.flipkart.com/");

    const searchBox =  page.locator('//input[contains(@placeholder,"Search for Products")]').first();
    await searchBox.fill("DSLR Camera");
    await searchBox.press("Enter");
    await page.waitForTimeout(5000);

    while(true){
        const names: string[] = await page.locator(".RG5Slk").allInnerTexts();
        const prices: string[] = await page.locator(".hZ3P6w.DeU9vF").allInnerTexts();
        
        for(let n of names){
            console.log(n);
        }
        for(let p of prices){
            console.log(p);
        }
        

        const nextBtn = page.getByRole("link",{name:"Next"})
        if(await nextBtn.count()===0){
            break;
        }
        if(await nextBtn.isVisible()){
            console.log("nextbutton exists")
            await nextBtn.click();
        }else{
            break;
        }
        
        

    }








})