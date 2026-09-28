const {test, expect}=require('@playwright/test');

test('Browser Context Test', async ({browser})=>
{

    const context=await browser.newContext(); 
    const page=await context.newPage(); 
    const userName = page.locator("[name=username]");
    const signIn   = page.locator("#signInBtn");
    const pageTitle = page.locator(".card-body a");
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await userName.fill('rahulshetty');
    await page.locator("[name=password]").fill('Learning@830$3mK2');
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    console.log(await pageTitle.first().textContent());
    const allTitles = await pageTitle.allTextContents();
    console.log(allTitles);



});

test('Page Playwright Test', async ({page})=>
{
    // const context=await browser.newContext(); 
    // const page=await context.newPage(); 
    await page.goto('https://google.com');
   console.log(await page.title())
   await expect(await page).toHaveTitle('Google');
});


test.only('UIControls', async ({page})=>
{
   
    const userName = page.locator("[name=username]");
    const signIn   = page.locator("#signInBtn");
    const pageTitle = page.locator(".card-body a");
    const blinkingText = page.locator("[href*=job-ready]");
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    page.locator("select.form-control").selectOption("Teacher");
    const radiobutton = page.locator("span.checkmark").last();
    const checkBox = page.locator("#terms");
    await radiobutton.click();
    await page.locator("#okayBtn").click();
    //await page.pause();
    await expect(await radiobutton).toBeChecked();
    await checkBox.check();
    await expect(await checkBox).toBeChecked();

    await checkBox.uncheck();
    await expect(await checkBox.isChecked()).toBeFalsy();
    await expect(blinkingText).toHaveAttribute("class", "blinkingText");





});
