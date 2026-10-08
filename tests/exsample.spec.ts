import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/');
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('first test', async ({ page }) => {
    //find by Tag
    page.locator('imput')

    //gind by ID
    page.locator('#inputEmail1')

    //find by class value
    page.locator('.shape-rectangle')

    //find by any atribute
    page.locator('[placeholder="Email"]')

    //find by class value 2
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //find by several selectors
    page.locator('imput[placeholder="Email"].shape-rectangle')

    //find by partial text match
    page.locator(':text("Using")')

    //find by exact text match
    page.locator(':text-is("Using the Grid")')
})

test('User-visible locators', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign in' }).first().click()
    await page.getByRole('textbox', { name: 'Email' }).first().fill('chupapiha@gmail.com')

    await page.getByLabel('Email').first().fill('chupapiha@gmail.com')

    await page.getByPlaceholder('Jane Doe').fill('Johny Shim')

    await page.getByText('Submit').first().click()

    await page.getByTestId('inputEmail1').fill('chupapiha@gmail.com')

    await page.getByTitle('IoT Dashboard').click()

})

test('locating child elements', async ({ page }) => {
    await page.locator('nb-card').locator('nb-radio-group').locator(':text-is("Option 1")').click()
    await page.locator('nb-card nb-radio-group :text-is("Option 2")')

    await page.locator('nb-card').getByRole('button', {name: 'Sign in'}).first().click()
    await page.locator('nb-card').nth(3).getByRole('button').click()//not recomend
})

 test('locating perent elements', async ({ page }) => {
    await page.locator('nb-card', {hasText: 'Using the Grid'}).getByRole('button').click()
    await page.locator('nb-card', {has: page.locator('#inputEmail1') }).getByRole('button').click()

    await page.locator('nb-card').filter({hasText: 'Using the Grid'}).getByRole('button').click()
    
    await page.locator('nb-card')
    .filter({has: page.locator('nb-checkbox')})
    .filter({hasText: 'sign in'})
    .getByLabel('Email')
    .fill('test@test.com')
    
    await page.getByText('Using the Grid').locator('..').getByRole('button').click()
    
})

test('Reusing locatorts', async ({page})=>{
    const basicFormSelection = page.locator('nb-card',{hasText: 'Basic form'})
    const emailInputField = basicFormSelection.getByLabel('Email')

    await emailInputField.fill('test@test.com')
    await basicFormSelection.getByLabel('Password').fill('Playwright')
    await basicFormSelection.locator('nb-checkbox').click()
    await basicFormSelection.getByRole('button').click()
    await expect(emailInputField).toHaveValue('test@test.com')
})

test('Assertions', async ({page})=>{
const basicFormSectionButton = page.locator('nb-card', {hasText: 'Basic form'}).getByRole('button')

 //genaric assertions
const value = 5
expect (value).toEqual(5)

const submitButtonText = await basicFormSectionButton.textContent()
expect(submitButtonText).toEqual('submit')

//locator assertions
await expect(basicFormSectionButton).toHaveText('submit')

//Soft assertion
await expect.soft(basicFormSectionButton).toHaveText('submit')

})