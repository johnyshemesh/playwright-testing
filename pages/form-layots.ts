import { Page } from '@playwright/test'

export class FormLayoutsPage {

private readonly page: Page

    constructor(page: Page) {
        this.page = page

    }

    async loginPage(username: string, password: string ){
const loginPage = this.page.getByRole('form', { name: 'Login' });
        await loginPage.getByRole('textbox', {name:"Username"}).fill(username);
        await loginPage.getByRole('textbox', {name:"Password"}).fill(password);
        await loginPage.getByRole('button', {name:"Login"}).click()

    }

}

