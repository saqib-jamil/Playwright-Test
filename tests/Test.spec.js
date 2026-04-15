const {test,expect}=require('playwright/test')

test('First Test Case', async ({page})=>{
    expect(13).toBe(12)
})

// test.only('Second Test Case', async ({page})=>{
//     expect("Saqib Jamil").toContain("Saqib")
//     console.log("Test Run")
// })

test.skip('Third Test Case', async ({page})=>{
    expect("Saqib Jamil").toContain("Saqib")
    console.log("Test Run")
})

test('Fourth Test Case', async ({page})=>{
    expect("Saqib Jamil".includes("saqib")).toBeFalsy()
})

test('Fifth Test Case', async ({page})=>{
    expect("Saqib Jamil".includes("Saqib")).toBeTruthy()
})

test('Sixth Test Case', async({page})=>{
    await page.goto("https://www.google.com/")
    const url = await page.url()
    console.log(url,"Console aa gia")
})
