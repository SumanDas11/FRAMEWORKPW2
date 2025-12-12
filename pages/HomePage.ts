import { Page, Locator } from '@playwright/test';

export class HomePage {
    private searchBox: Locator;
    private goButton: Locator;

    constructor(private page: Page) {
        this.searchBox = page.getByRole('searchbox', { name: 'Search Amazon.in' });
        this.goButton = page.getByRole('button', { name: 'Go', exact: true });
    }

    async navigate2() {
        await this.page.goto('/');
        const continueShoppingButton = this.page.locator("//button[contains(.,'Continue shopping')]").first();
        if (await continueShoppingButton.isVisible()) {
            await continueShoppingButton.click({ timeout: 5000 });
            console.log("Clicked continue shopping");
        }
        else {
            console.log("Continue shipping button is not visible - skip");
        }
    }

    async searchProduct(productName: string) {
        await this.searchBox.click({ timeout: 5000 });
        await this.searchBox.fill(productName);
        await this.searchBox.press('Enter');
        await this.goButton.click();
    }
}
