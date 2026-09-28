const {test, expect}=require('@playwright/test');
test.only('UIControls', async ({browser})=>
{
   
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator("[name=username]");
    const signIn   = page.locator("#signInBtn");
    const pageTitle = page.locator(".card-body a");
    const blinkingText = page.locator("[href*=documents-request]");
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    
    const [newPage] = await Promise.all 
    ([
    context.waitForEvent('page'),
    blinkingText.click()
    ]);

    const text= await newPage.locator("p.red").textContent();
    console.log(text);
    const arrayText =text.split("@");
    const emailAddress = arrayText[1].split(" ")[0];
    //await console.log(emailAddress);
    await userName.fill(emailAddress);
   // await page.pause();
    const filledValue = await userName.inputValue();
    console.log(filledValue);


});