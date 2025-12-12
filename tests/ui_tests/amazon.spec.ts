import { test } from '../../fixtures/amazonFixtures.js';

test('Amazon product purchase flow', async ({ homePage, searchResultsPage, cartPage, checkoutPage }) => {
    await homePage.navigate2();
    await homePage.searchProduct('ipad');

    await searchResultsPage.addToCart();

    await cartPage.goToCart();
    await cartPage.proceedToBuy();

    await checkoutPage.verifySignInPage();
});
