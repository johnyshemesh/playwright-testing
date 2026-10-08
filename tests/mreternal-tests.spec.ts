import { test, expect } from '@playwright/test'
import { NavigationPage } from '../pages/navigation-page';
import { HomepageLocators } from '../pages/homepage-locators';
import { ProductPage } from '../pages/products-page';




test.describe('home page header UI', () => {
    let navigateTo: NavigationPage
    let homepageLocators: HomepageLocators

    test.beforeEach(async ({ page }) => {
        navigateTo = new NavigationPage(page)
        homepageLocators = new HomepageLocators(page)
        await navigateTo.HomePage()

    })

    test('header navigation buttons are visible', async ({ page }) => {
        await expect(homepageLocators.JewelryMenuButton).toBeVisible();
        await expect(homepageLocators.JewelryMenuButton).toHaveText('תכשיטים');
        await expect(homepageLocators.CustomMenuButton).toBeVisible();
        await expect(homepageLocators.CustomMenuButton).toHaveText('התאמה אישית');
        await expect(homepageLocators.EngagementMenuButton).toBeVisible();
        await expect(homepageLocators.EngagementMenuButton).toHaveText('טבעות אירוסין');
        await expect(homepageLocators.WeddingMenuButton).toBeVisible();
        await expect(homepageLocators.WeddingMenuButton).toHaveText('טבעות נישואין');
        await expect(homepageLocators.AboutMenuButton).toBeVisible();
        await expect(homepageLocators.AboutMenuButton).toHaveText('אודות');
        await expect(homepageLocators.LanguageSelector).toBeVisible();
        await expect(homepageLocators.LanguageSelector).toContainText('עברית');
        await expect(homepageLocators.CustomerAccount).toBeVisible();
        await expect(homepageLocators.SearchSign).toBeVisible();
        await expect(homepageLocators.Cart).toBeVisible();
        await expect(homepageLocators.FacebookSignHeader).toBeVisible();
        await expect(homepageLocators.InstagramSignHeader).toBeVisible();
        await expect(homepageLocators.WebSiteLogo).toBeVisible();

    })

    test('Homepage headings are visible and text are availible', async ({ page }) => {
        await expect(page.getByText('צורפות אישית באונליין ✨ תכשיט בהתאמה אישית עד דלת הבית ✨ הטבת השקה 🎁 משלוח חינם')).toBeVisible();
        await expect(page.getByRole('heading', { name: 'קטגוריות עיקריות' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'טבעות נישואין' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'טבעות אירוסין' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'קצת עלינו' })).toBeVisible();
        await expect(page.locator('.text-column-content-template--20377050742967__gus_custom_verticalvideo_7BmCEM'))
            .toContainText('שלנו היא להפוך את החזון שלכם לתכשיט יוקרתי, בתהליך ליווי אישי ודיגיטלי מלא. מכל מקום שבו אתם נמצאים, ושילוח אליכם לכל נקודה ')
        await expect(page.locator('.text-column-content-template--20377050742967__gus_custom_verticalvideo_7BmCEM'))
            .toContainText(' צורפים אומנים, עובדה המבטיחה שכל תכשיט יהיה לא רק עוצר נשימה, אלא גם פרקטי, עמיד ונוח באופן מושלם. בזכות ההקפדה הבלתי מתפשרת ')
        await expect(page.getByRole('heading', { name: 'חווית עיצוב אישית: יוקרה ומקצועיות מהנוחות של הבית' })).toBeVisible();
        await expect(page.locator('#shopify-section-template--20377050742967__rich_text_BdYeFR'))
            .toContainText('המומחיות שלנו בעיצוב מרחוק נולדה מתוך חיבור בין יבשות. כשהקמנו את הסניף הראשון שלנו בצפון ארגנטינה למדנו לגשר על מרחקים');
        await expect(page.locator('#shopify-section-template--20377050742967__rich_text_BdYeFR'))
            .toContainText('כיום, אנו מביאים את המיומנות הזו אליכם לישראל. בעזרת טכנולוגיית תלת-מימד מתקדמת, ליווי צמוד של מעצב אישי, ותהליך שקוף ובטוח');
        await expect(page.getByRole('heading', { name: 'הסניפים שלנו בעולם' })).toBeVisible();
    })

    test('carusel works right', async ({ page }) => {

        await page.getByRole('button', { name: '2' }).click();
        await expect(page.getByRole('link', { name: 'לְקַשֵׁר' }).nth(4)).toBeVisible();
        await page.getByRole('button', { name: '3' }).click();
        await expect(page.getByRole('link', { name: 'לְקַשֵׁר' }).nth(5)).toBeVisible();
        await page.getByRole('button', { name: '4' }).click();
        await expect(page.locator('.unity-slide.no-content.selected > .slide-element-inner')).toBeVisible();
        await page.getByRole('button', { name: '1' }).click();
        await expect(page.getByRole('link', { name: 'לְקַשֵׁר' }).nth(3)).toBeVisible();
    })

    test('main categories are visible', async ({ page }) => {

        await expect(page.locator('div:nth-child(4) > .image-wrapper > .full-width > .image-media > .column-image > .no-js-hidden')).toBeVisible();
        await expect(page.getByText('גלריית הקונספטים')).toBeVisible();
        await expect(page.locator('div:nth-child(3) > .image-wrapper > .full-width > .image-media > .column-image > .no-js-hidden')).toBeVisible();
        await expect(page.getByText('קולקציה התאמה אישית')).toBeVisible();
        await expect(page.locator('div:nth-child(2) > .image-wrapper > .full-width > .image-media > .column-image > .no-js-hidden')).toBeVisible();
        await expect(page.getByText('קולקציה טבעות אירוסין')).toBeVisible();
        await expect(page.locator('.column-image > .no-js-hidden').first()).toBeVisible();
        await expect(page.getByText('קולקציה טבעות נישואין')).toBeVisible();
    })

    test('wedding rings greed are visible and correct', async ({ page }) => {
        await expect(page.getByRole('link', { name: 'Virginia' }).first()).toBeVisible();
        await expect(page.getByRole('link', { name: 'Alianza Paz' }).first()).toBeVisible();
        await expect(page.getByRole('link', { name: 'Alianza Libertad' }).first()).toBeVisible();
        await expect(page.locator('div:nth-child(18) > .product-card > .product-card-content > .product-swatches > .swatch.swatch-image.selected')).toBeVisible();
        await expect(page.locator('div:nth-child(20) > .product-card > .product-card-content > .product-swatches > .swatch.swatch-image.selected')).toBeVisible();
        await expect(page.getByRole('link', { name: 'רוז גולד' }).nth(2)).toBeVisible();
        await expect(page.getByRole('link', { name: 'רוז גולד' }).nth(4)).toBeVisible();
        await expect(page.locator('div:nth-child(8) > .product-card > .product-card-content > .product-swatches > a:nth-child(3)')).toBeVisible();
        await expect(page.locator('div:nth-child(10) > .product-card > .product-card-content > .product-swatches > a:nth-child(3)')).toBeVisible();
        await expect(page.getByText('₪ 2,060.00 ILS', { exact: true }).nth(3)).toBeVisible();
        await expect(page.getByText('₪ 2,060.00 ILS', { exact: true }).nth(5)).toBeVisible();

    })



})
test.describe('page navigations', () => {
    let navigateTo: NavigationPage
    let homepageLocators: HomepageLocators

    test.beforeEach(async ({ page }) => {
        navigateTo = new NavigationPage(page)
        homepageLocators = new HomepageLocators(page)
        await navigateTo.HomePage()

    })

    test('navigate to rings page', async ({ page }) => {
        await navigateTo.RingsPage()
        await expect(page.getByRole('heading', { name: 'קולקציות הטבעות שלנו' })).toBeVisible();

    })

    test('navigate to earings page', async ({ page }) => {
        await navigateTo.EaringsPage()
        await expect(page.getByRole('heading', { name: 'Colección Aros' })).toBeVisible();

    })

    test('navigate to necklases page', async ({ page }) => {
        await navigateTo.NecklacesPage()
        await expect(page.getByRole('heading', { name: 'Colección Collares' })).toBeVisible();

    })

    test('navigate to bracelets page', async ({ page }) => {
        await navigateTo.BraceletsPage()
        await expect(page.getByRole('heading', { name: 'Coleccion Pulseras' })).toBeVisible();

    })
    test('navigate to male jewelry page', async ({ page }) => {
        await navigateTo.MaleJewelryPage()
        await expect(page.getByRole('heading', { name: 'תכשיטים לגבר' })).toBeVisible();

    })

    test('navigate to specials page', async ({ page }) => {
        await navigateTo.SpecialsPage()
        await expect(page.getByRole('heading', { name: 'Colecciones en SALE' })).toBeVisible();
    })
    test('navigate to custom jewelry page', async ({ page }) => {
        await navigateTo.CustomJewelryPage()
        await expect(page.getByRole('heading', { name: 'תכשיטים בהתאמה אישית' })).toBeVisible();
    })

    test('navigate to engagement rings page', async ({ page }) => {
        await navigateTo.EngagementRingsPage()
        await expect(page.getByRole('heading', { name: 'טבעות אירוסין' })).toBeVisible();
    })

    test('navigate to wedding rings page', async ({ page }) => {
        await navigateTo.WeddingRingsPage()
        await expect(page.getByRole('heading', { name: 'טבעות נישואין ' })).toBeVisible();
    })



})

test.describe('search ', () => {
    let navigateTo: NavigationPage
    let homepageLocators: HomepageLocators
    let productPage: ProductPage

    test.beforeEach(async ({ page }) => {
        navigateTo = new NavigationPage(page)
        homepageLocators = new HomepageLocators(page)
        productPage = new ProductPage(page)
        await navigateTo.HomePage()
        
    })
    test('search availeble item in hebrew', async ({ page }) => {
        await (homepageLocators.SearchSign).click();
        await homepageLocators.SearchField.pressSequentially('יהלום', { delay: 100 });
        await productPage.submitSearchButton()
        await expect(page.getByRole('heading', { name: 'תוצאות חיפוש' })).toBeVisible();
        await expect(page.locator('#template--20377051103415__main-search')).toHaveValue('יהלום')

    })

    test('search availeble item in inglish', async ({ page }) => {
        await (homepageLocators.SearchSign).click();
        await homepageLocators.SearchField.fill('delicado');
        await productPage.submitSearchButton()
        await expect(page.getByRole('heading', { name: 'תוצאות חיפוש' })).toBeVisible();
        await expect(page.locator('#template--20377051103415__main-search')).toHaveValue('delicado')

    })

    test('change search filter', async ({ page }) => {
        await (homepageLocators.SearchSign).click();
        await homepageLocators.SearchField.fill('delicado');
        await productPage.submitSearchButton()
        await page.getByLabel('הזמנת חנות').selectOption('price-ascending');
        await expect(page).toHaveURL(/.*sort_by=price-ascending/)
        await page.getByLabel('הזמנת חנות').selectOption('price-descending');
        await expect(page).toHaveURL(/.*sort_by=price-descending/);
        await page.getByLabel('הזמנת חנות').selectOption('relevance');
        await expect(page).toHaveURL(/.*sort_by=relevance/);
        
    
    })

})


test.describe('product selection', () => {
    let navigateTo: NavigationPage
    let homepageLocators: HomepageLocators
    let productPage: ProductPage

    test.beforeEach(async ({ page }) => {
        navigateTo = new NavigationPage(page)
        homepageLocators = new HomepageLocators(page)
        productPage = new ProductPage(page)
        await navigateTo.HomePage()
    })

    test('products details are visible', async ({ page }) => {
        await navigateTo.WeddingRingsPage()
        await homepageLocators.WomanWeddingRings.click();
        await productPage.selectFirstProduct();
        await expect(page.getByRole('button', { name: 'template--' })).toBeVisible();
        await expect(page.locator('button[name="add"]')).toContainText('הוסף לעגלה - מחיר רגיל ');
        await expect(page.locator('label').filter({ hasText: 'רוז גולד' })).toBeVisible();
        await expect(page.locator('label').filter({ hasText: 'זהב לבן' })).toBeVisible();
        await expect(page.locator('label').filter({ hasText: 'זהב צהוב' })).toBeVisible();
        await expect(page.locator('.item.vertical-middle')).toBeVisible();
        await expect(page.locator('#shopify-section-template--20377051070647__main')).toContainText('משלוח חינם -תעודת מקוריות ואחריות לכל החיים בכל קנייה -תעודה גמולוגית בינלאומית (מעל 1 קראט) -התאמת מידה ללא עלות נוספ');
        await expect(page.locator('label').filter({ hasText: '8' }).first()).toBeVisible();
        await expect(page.locator('label').filter({ hasText: '11' })).toBeVisible();
        await expect(page.getByText('16')).toBeVisible();
        await expect(page.getByText('20')).toBeVisible();
        await expect(page.getByText('20')).toBeVisible();
    })

    test('select product size', async ({ page }) => {
        await navigateTo.WeddingRingsPage()
        await homepageLocators.WomanWeddingRings.click();
        await productPage.selectSecondProduct()
        await page.getByText('10', { exact: true }).click();
        await expect(page.getByText('10').first()).toBeVisible();
        await page.getByText('12').click();
        await expect(page.getByText('12').first()).toBeVisible();
        
        
    })

    test('select product matirial', async ({ page }) => {
        await navigateTo.WeddingRingsPage()
        await homepageLocators.WomanWeddingRings.click();
        await productPage.selectThirdProduct();
        await expect(page.locator('.selected-value').first()).toBeVisible();
        await expect(page.locator('#shopify-section-template--20377051070647__main')).toContainText('זהב צהוב');
        await page.locator('label').filter({ hasText: 'רוז גולד' }).click();
        await expect(page.getByText('רוז גולד').nth(3)).toBeVisible();
        await expect(page.locator('#shopify-section-template--20377051070647__main')).toContainText('רוז גולד');
        await page.locator('label').filter({ hasText: 'זהב לבן' }).click();
        await expect(page.locator('#shopify-section-template--20377051070647__main span').filter({ hasText: /^זהב לבן$/ })).toBeVisible();
        await expect(page.locator('#shopify-section-template--20377051070647__main')).toContainText('זהב לבן');
           
    })

      test('add 1 item to cart', async ({ page }) => {
        await navigateTo.WeddingRingsPage()
        await homepageLocators.WomanWeddingRings.click();
        await productPage.selectFirstProduct();
        await productPage.addProductToCart();
        await page.getByRole('button', { name: 'סגור את עגלת הקניות' }).click();
        await expect(homepageLocators.Cart).toContainText('עגלה: 1 עגלה');
           
    })

     test('add 2 items to cart', async ({ page }) => {
        await navigateTo.WeddingRingsPage()
        await page.getByText('טבעות נישואין לאישה').click();
        await productPage.selectSecondProduct();
        await productPage.plusAddToCart();
        await productPage.addProductToCart();
        await page.getByRole('button', { name: 'סגור את עגלת הקניות' }).click();
        await expect(homepageLocators.Cart).toContainText('עגלה: 2 פריטים');
      
           
    })

    test('add item to cart and check if size and material are right', async ({ page }) => {
        await navigateTo.EngagementRingsPage()
        await homepageLocators.LineRings.click()
        await productPage.selectFirstProduct();
        await page.locator('label').filter({ hasText: 'רוז גולד' }).click();
        await page.locator('label').filter({ hasText: '18' }).click();
        await productPage.addProductToCart();
        await page.getByText('הצג עגלה').click();
        await expect(page.locator('#main-cart').getByText('רוז גולד')).toBeVisible();
        await expect(page.locator('tbody')).toContainText('רוז גולד');
        await expect(page.getByText('18', { exact: true })).toBeVisible();
        await expect(page.locator('tbody')).toContainText('18');
        
           
    })


    

    
})