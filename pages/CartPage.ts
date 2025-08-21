import { Page, Locator } from '@playwright/test';

export class CartPage {
    private goToCartLink: Locator;
    private proceedToBuyBtn: Locator;

    constructor(private page: Page) {
        this.goToCartLink = page.getByRole('link', { name: 'Go to Cart' });
        this.proceedToBuyBtn = page.getByRole('button', { name: 'Proceed to Buy Buy Amazon' });
    }

    async goToCart() {
        await this.goToCartLink.click();
    }

    async proceedToBuy() {
        await this.proceedToBuyBtn.click();
    }
}
