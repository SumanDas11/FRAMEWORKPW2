import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
    private signInHeading: Locator;

    constructor(private page: Page) {
        this.signInHeading = page.getByRole('heading', { name: 'Sign in or create account' });
    }

    async verifySignInPage() {
        await expect(this.signInHeading).toBeVisible();
    }
}
