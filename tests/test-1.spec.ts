import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('ipad');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.locator('#a-autoid-1-announce').click();
  await page.getByRole('link', { name: 'Go to Cart' }).click();
  await page.getByRole('button', { name: 'Proceed to Buy Buy Amazon' }).click();
  await expect(page.getByRole('heading', { name: 'Sign in or create account' })).toBeVisible();
});