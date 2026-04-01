const {test,expect}=require('playwright/test')

test('First Test Case', async ({page})=>{
    expect(12).toBe(12)
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
    expect("Saqib Jamil").includes("saqib").toBeFalsy()
    console.log("Test Run")
})

test('Fifth Test Case', async ({page})=>{
    expect("Saqib Jamil").toContain("Saqib").toBeTruthy()
    console.log("Test Run")
})
