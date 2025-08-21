import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

// Extend Playwright's base test
type AmazonFixtures = {
    homePage: HomePage;
    searchResultsPage: SearchResultsPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
};

export const test = base.extend<AmazonFixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    searchResultsPage: async ({ page }, use) => {
        await use(new SearchResultsPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
});

export { expect } from '@playwright/test';
