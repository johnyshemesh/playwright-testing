import { Locator } from '@playwright/test'

export class HomepageLocators {

    readonly JewelryMenuButton: Locator
    readonly CustomMenuButton: Locator
    readonly EngagementMenuButton: Locator
    readonly WeddingMenuButton: Locator
    readonly AboutMenuButton: Locator
    readonly LanguageSelector: Locator
    readonly CustomerAccount: Locator
    readonly SearchSign: Locator
    readonly Cart: Locator
    readonly InstagramSignHeader: Locator
    readonly FacebookSignHeader: Locator
    readonly WebSiteLogo: Locator
    readonly SearchField: Locator
    readonly WomanWeddingRings: Locator
    readonly LineRings: Locator
    

    constructor(page: Locator) {

        this.JewelryMenuButton = page.getByRole('navigation').getByText('תכשיטים', { exact: true })
        this.CustomMenuButton = page.getByRole('link', { name: 'התאמה אישית' })
        this.EngagementMenuButton = page.getByRole('link', { name: 'טבעות אירוסין' })
        this.WeddingMenuButton = page.getByRole('link', { name: 'טבעות נישואין' })
        this.AboutMenuButton = page.getByRole('navigation').getByText('אודות')
        this.LanguageSelector = page.locator('#shopify-section-sections--20377051168951__header')
            .getByRole('button', { name: 'שָׂפָה עברית' })
        this.CustomerAccount = page.getByRole('link', { name: 'לְקַשֵׁר' }).nth(1)
        this.SearchSign = page.getByRole('link', { name: 'לְחַפֵּשׂ' })
        this.Cart = page.getByRole('link', { name: 'לְקַשֵׁר' }).nth(2)
        this.InstagramSignHeader = page.locator('#shopify-section-sections--20377051168951__announcement-bar')
        .getByRole('link', { name: 'Instagram' })
        this.FacebookSignHeader = page.locator('#shopify-section-sections--20377051168951__announcement-bar')
        .getByRole('link', { name: 'פייסבוק' })
        this.WebSiteLogo = page.getByRole('heading', { name: 'לְקַשֵׁר' }).getByLabel('לְקַשֵׁר')
        this.SearchField = page.locator('#sections--20377051168951__quick-search-search')
        this.WomanWeddingRings = page.getByText('טבעות נישואין לאישה')
        this.LineRings = page.getByText('טבעות שורה - אטרניטי')
        

      
    }
}

