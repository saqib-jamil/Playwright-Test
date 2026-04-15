const {test,expect}=require('@playwright/test')

test("My Test",async({page})=>{

    await page.goto("https://www.google.com/")

    const url = await page.url()
    console.log(url,"Console aa gia")

    await expect(page).toHaveURL("https://www.google.com/")
    console.log("Yhi URL ha")

    await expect(page).toHaveTitle("Google")
    console.log("Yhi Title ha")

})