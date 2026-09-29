const {test, expect}=require('@playwright/test')
test('Login page Test', async ({browser})=> {

    
const context=await browser.newContext();
const page=await context.newPage();
const userEmail =page.locator("#userEmail")
const userPassword = page.locator("#userPassword");
const login=await page.locator("#login");
const products = page.locator(".card-body");
const myProduct= "iphone 13 pro";
const email = "shivanshu.saini65@gmail.com";
const placeOrderBtn = page.locator(".action__submit");
const ordersBttn = page.locator("button[routerlink ='/dashboard/myorders']");
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
await expect(page.locator(".cartSection h3")).toHaveText('iphone 13 pro');

await page.locator("text=Checkout").click();
await page.locator("[placeholder*='Country']").pressSequentially("ind");
const dropDown = await page.locator(".ta-results");
await dropDown.waitFor({ state: 'visible' });
const optionCount = await dropDown.locator("button").count();
for(let i=0; i< optionCount; i++)
{
    const optionText = await dropDown.locator("button").nth(i).textContent();
    if(optionText.trim() === "India")
    {
        await dropDown.locator("button").nth(i).click();
        break;
    }
}

await expect(await page.locator(".user__name label")).toHaveText(email);
await placeOrderBtn.click();
await expect(await page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");

const OrderId= await page.locator("label[class=ng-star-inserted]").textContent();
console.log(OrderId);
await ordersBttn.click();
await page.locator("tbody").waitFor();
const rows = await page.locator("tbody tr")

for(let i=0; i< await rows.count(); i++)
{
   const rowText = await rows.nth(i).locator("th").textContent();
   if(OrderId.includes(rowText)) 
   {
         await rows.nth(i).locator("button").first().click();
            break;
   }
}

const FinalOrderID = await page.locator(".col-md-6 .col-text").textContent();
await console.log(FinalOrderID);
await expect(OrderId.includes(FinalOrderID)).toBeTruthy();

});