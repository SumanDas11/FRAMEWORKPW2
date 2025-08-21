import { Page, Locator } from '@playwright/test';

export class HomePage {
    private searchBox: Locator;
    private goButton: Locator;

    constructor(private page: Page) {
        this.searchBox = page.getByRole('searchbox', { name: 'Search Amazon.in' });
        this.goButton = page.getByRole('button', { name: 'Go', exact: true });
    }

    async goto() {
        await this.page.goto('/');
    }

    async searchProduct(productName: string) {
        await this.searchBox.click();
        await this.searchBox.fill(productName);
        await this.searchBox.press('Enter');
        await this.goButton.click();
    }
}
