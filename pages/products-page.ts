import { Page } from '@playwright/test'

export class ProductPage{
    private readonly page: page;
    private readonly firstProduct 
    private readonly secondProduct 
    private readonly thirdProduct 
    private readonly addToCart 
    private readonly plusButton 
    private readonly searchButton
constructor(page: Page){
    this.page = page
    this.firstProduct = page.locator('[class="product-image lazy-image lazy-loaded"]').first()
    this.secondProduct = page.locator('[class="product-image lazy-image lazy-loaded"]').nth(1)
    this.thirdProduct =  page.locator('[class="product-image lazy-image lazy-loaded"]').nth(2)
    this.addToCart = page.locator('[class="button add-to-cart-button primary-button text-uppercase has-price"]')
    this.plusButton = page.getByRole('button', { name: 'I18n Error: Missing interpolation value &quot;producto&quot; for &quot;הגדלת כמות עבור {{ producto }}&quot;', exact: true })
    this.searchButton = page.getByRole('button', { name: 'הצג את כל המוצרים' })

}
async selectFirstProduct() {
    await this.firstProduct.click()
}
async selectSecondProduct() {
    await this.secondProduct.click()
}
async selectThirdProduct() {
    await this.thirdProduct.click()
}
async addProductToCart() {
    await this.addToCart.click()
}
async plusAddToCart() {
    await this.plusButton.click()
}

async submitSearchButton() {
    await this.searchButton.click()
}
}