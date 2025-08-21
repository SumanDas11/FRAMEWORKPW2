import { Page, Locator } from '@playwright/test';

export class SearchResultsPage {
    private addToCartBtn: Locator;

    constructor(private page: Page) {
        this.addToCartBtn = page.locator('#a-autoid-1-announce');
    }

    async addToCart() {
        await this.addToCartBtn.click();
    }
}
