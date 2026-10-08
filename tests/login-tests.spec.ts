import { test, expect } from '@playwright/test'
import { FormLayoutsPage } from '../pages/form-layots'

test.beforeEach (async ({ page }) => {
await page.goto('https://www.saucedemo.com/')
})

test('Login with Valid Credentials ', async ({ page }) => {
        const formLayoutsPage = new FormLayoutsPage(page)
        await formLayoutsPage.loginPage('standard_user','secret_sauce')
        await expect(page.getByText('Swag Labs')).toBeVisible();

    })

test('Login with wrong Username  ', async ({ page }) => {
        const formLayoutsPage = new FormLayoutsPage(page)
        await formLayoutsPage.loginPage('johny','secret_sauce')
        await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
    })

test('Login with wrong Password ', async ({ page }) => {
        const formLayoutsPage = new FormLayoutsPage(page)
        await formLayoutsPage.loginPage('standard_user','1234567')
        await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
        
    })

    test('Login with empty Username ', async ({ page }) => {
        const formLayoutsPage = new FormLayoutsPage(page)
        await formLayoutsPage.loginPage('','secret_sauce')
        await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required');
        
    })