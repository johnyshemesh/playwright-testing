import { Page } from '@playwright/test'

export class NavigationPage {

   private readonly page: Page

    constructor(page: Page) {
        this.page = page

    }

    async HomePage(){
        await this.page.goto('https://www.mreternalamor.com/')
    }

    async RingsPage() {
        await this.page.getByRole('navigation').getByLabel('תכשיטים', { exact: true }).click();
        await this.page.getByRole('link', { name: 'טבעות', exact: true }).click();
    }

    async EaringsPage() {

        await this.page.getByRole('navigation').getByText('תכשיטים', { exact: true }).click();
        await this.page.getByRole('link', { name: 'עגילים' }).click();
    }

    async NecklacesPage() {
        await this.page.getByRole('navigation').getByText('תכשיטים', { exact: true }).click();
        await this.page.getByRole('link', { name: 'שרשראות' }).click();

    }

    async BraceletsPage(){
         await this.page.getByRole('navigation').getByText('תכשיטים', { exact: true }).click();
         await this.page.getByRole('link', { name: 'צמידים' }).click();
    }

    async MaleJewelryPage(){
        await this.page.getByRole('navigation').getByText('תכשיטים', { exact: true }).click();
        await this.page.getByRole('link', { name: 'תכשיטים לגבר' }).click();
    }

    async SpecialsPage(){
        await this.page.getByRole('navigation').getByText('תכשיטים', { exact: true }).click();
        await this.page.getByRole('link', { name: 'מבצעים' }).click();
    }

    async CustomJewelryPage(){
        await this.page.getByRole('link', { name: 'התאמה אישית' }).click();
    }

    async EngagementRingsPage(){
        await this.page.getByRole('link', { name: 'טבעות אירוסין' }).click();
    }

    async WeddingRingsPage(){
        await this.page.getByRole('link', { name: 'טבעות נישואין' }).click();
    }
}