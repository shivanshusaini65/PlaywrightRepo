const {test, expect}=require('@playwright/test')
test('Playwright special locators', async ({page})=> {

await page.goto("https://rahulshettyacademy.com/angularpractice/");
await page.getByLabel("Check me out if you Love IceCreams!").click();
await page.getByLabel("Employed").click();
await page.getByLabel("Gender").selectOption("Female");
await page.locator("#exampleFormControlSelect1").selectOption("Female");
await page.getByPlaceholder("Password").fill("shivanshu");
await page.getByRole("button", {name : "Submit"}).click();
await page.getByRole("link", {name: "Shop"}).click();
await page.locator("app-card").filter({hasText : "Nokia Edge"}).getByRole("button").click() ;






});