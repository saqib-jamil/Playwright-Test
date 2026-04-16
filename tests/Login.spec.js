import {test,expect} from '@playwright/test'
import Login from '../pages/Login'
import { testData } from '../Utils/loginData'

test('Login Test Case', async ({page})=>{
    const login = new Login(page)
    await login.goto()
    await login.login(testData.email, testData.password)

    await expect(page).toHaveURL(testData.dashboardUrl)

    await login.saveSession()
    
    
})