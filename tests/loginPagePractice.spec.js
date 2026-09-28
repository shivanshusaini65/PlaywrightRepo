const {test, expect}=require('@playwright/test')
test('Login page Test', async ({browser})=> {

    
const context=await browser.newContext();
const page=await context.newPage();
const userEmail =page.locator("#userEmail")
const userPassword = page.locator("#userPassword");
const login=await page.locator("#login");
const products = page.locator(".card-body");
const myProduct= "iphone 13 pro";
await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
await userEmail.fill("shivanshu.saini65@gmail.com");
await userPassword.fill("Shiv@123");
await login.click();
await page.locator(".card-body b").first().textContent();
await page.waitForLoadState('networkidle');
const allTitles=await page.locator(".card-body b").allTextContents();
console.log(allTitles);

const count = await products.count();

for(let i=0; i<count; i++)
{
    const productTitle = await products.nth(i).locator("b").textContent();
    if(productTitle === myProduct)
    {
        await products.nth(i).locator("text= Add To Cart").click();
        break;
    }
}

await page.locator("[routerlink*='cart']").click();
//const bool =await page.locator("h3:has-text('iphone 13 pro')").isVisible();
//expect(bool).toBeTruthy();
await expect( page.locator("h3:has-text('iphone 13 pro')")).toBeVisible();
await expect(page.locator(".cartSection h3")).toHaveText('iphone 15 pro');
});