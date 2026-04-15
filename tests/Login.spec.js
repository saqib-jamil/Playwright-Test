import {test,expect} from '@playwright/test'
import Login from '../pages/Login'

test('Login Test Case', async ({page})=>{
    const login = new Login(page)
    await login.goto()
    await login.login("na@yopmail.com", "123456")

    await expect(page).toHaveURL("https://stage.loadsecuresystems.com/?filterBy=active")

    await login.saveSession()
    
    
})