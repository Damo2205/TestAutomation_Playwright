const { test, expect } = require('@playwright/test');
const AmexGoldCardPage = require('../Pages/goldCard');
const { waitForTimeout } = require('../Utilities/reusableMethods');
const { readCSV } = require('../Utilities/csvReader');

test.describe('Amex Gold Card Page Tests', () => {

  let csvData;

  // Load CSV data before running the tests
  test.beforeAll(async () => {
    const csvFilePath = './Data/creditCardApplicantDetails.csv'; // Path to the CSV file
    csvData = await readCSV(csvFilePath); // Read all rows from the CSV file
    console.log('Loaded CSV Data:', csvData); // Debugging: Log the loaded data
  });


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

  test('should navigate to Request your Amex Gold Card Page and start filling applicant details', async ({ page }) => {
    if (!csvData || csvData.length === 0) {
      throw new Error('CSV data is empty or not loaded correctly.');
    }

    for (const row of csvData) {
 
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

    // Fill in the applicant details dynamically
    await amexGoldCardPage.fillApplicantDetails(row); // Pass the current row data to fill the details

    // Click on "Save and Continue" button
    await amexGoldCardPage.clickSaveAndContinueButton();

    // Verify the navigation
    const url = await page.url();
    expect(url).toContain('fr-amex-cardshop-details-apply-GoldCardAmericanExpress'); // Adjust the expectation based on the actual URL
    }
  });
});

