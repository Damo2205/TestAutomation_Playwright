const { test, expect } = require('@playwright/test');
const AmexGoldCardPage = require('../Pages/goldCard');
const { waitForTimeout } = require('../Utilities/reusableMethods');

test.describe('Amex Gold Card Page Tests', () => {
  test('should navigate to Amex Gold Card Page and Select Learn More', async ({ page }) => {
  // Create an instance of the Amex Gold Card class
  const amexGoldCardPage = new AmexGoldCardPage(page);

  // Navigate to the Amex Gold Card Page
  await amexGoldCardPage.navigate();

  // Click on "Learn More" button for Amex Gold Card
  await amexGoldCardPage.clickAmexGoldCardLearnMore();

  // Verify the navigation
  const url = await page.url();
  expect(url).toContain('gold-card-americanexpress'); // Adjust the expectation based on the actual URL
});

test('should navigate to Amex Gold Card Page and Click on Request Your Card', async ({ page }) => {
  // Create an instance of the Amex Gold Card class
  const amexGoldCardPage = new AmexGoldCardPage(page);

  // Navigate to the Amex Gold Card Page
  await amexGoldCardPage.navigate();

  // Click on "Learn More" button for Amex Gold Card
  await amexGoldCardPage.clickAmexGoldCardLearnMore();

  // Click on "Request Your Card" button
  await amexGoldCardPage.clickRequestYourCard();

  // Verify Documetn Required link is visible
  await amexGoldCardPage.verifyRequiredDocumentsLink();

  // Verify the navigation
  const url = await page.url();
  expect(url).toContain('fr-amex-cardshop-details-apply-GoldCardAmericanExpress-siderail'); // Adjust the expectation based on the actual URL
});

});