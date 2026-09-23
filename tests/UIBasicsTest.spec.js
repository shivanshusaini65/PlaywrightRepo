const {test, expect}=require('@playwright/test');

test.only('Browser Context Test', async ({browser})=>
{
    const context=await browser.newContext(); 
    const page=await context.newPage(); 
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator("[name=username]").fill('rahulshetty');
    await page.locator("[name=password]").fill('learning');
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
});

test('Page Playwright Test', async ({page})=>
{
    // const context=await browser.newContext(); 
    // const page=await context.newPage(); 
    await page.goto('https://google.com');
   console.log(await page.title())
   await expect(await page).toHaveTitle('Google');
});
