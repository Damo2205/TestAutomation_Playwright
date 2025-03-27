const { test, expect } = require('@playwright/test');
const FrenchHomepage = require('../Pages/frenchHomePage');
const { waitForTimeout } = require('../Utilities/reusableMethods');

test.describe('French Homepage Tests', () => {
  test('should navigate to FR Homepage and click on Cartes American Express', async ({ page }) => {
    // Create an instance of the FrenchHomepage class
    const frenchHomepage = new FrenchHomepage(page);

    // Navigate to the French Homepage
    await frenchHomepage.navigate();

    // Click on "Cartes Premium link"
    await frenchHomepage.clickCartesPremium();

    // Verify the navigation
    const url = await page.url();
    expect(url).toContain('cartes-premium'); // Adjust the expectation based on the actual URL
  });
});