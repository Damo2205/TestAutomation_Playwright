// Include Playwright Module
const { expect } = require('@playwright/test');
const dotenv = require('dotenv');
const { handleCookiesPopup, waitForTimeout, isVisible, waitForSelectorAndCheckVisibility, clickElementIfVisible, waitForSelectorAndClick } = require('../Utilities/reusableMethods');

// Load the .env file from the Config folder
dotenv.config({ path: './Config/.env' });

// Create the FrenchHomepage class
class FrenchHomepage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Define locators and URLs
    this.extendedURL = 'fr-fr/?inav=NavLogo'; // Extended URL for the French Homepage
    this.cartesPremium = 'text=Cartes Premium'; // Cartes Premium locator link
    this.acceptCookiesButton = 'button:has-text("Tout Accepter")'; // "Accept Cookies" button locator
  }

  //Navigate to  Homepage
  async navigate() {
    await this.page.goto(process.env.BASE_URL + this.extendedURL);
    await handleCookiesPopup(this.page, this.acceptCookiesButton);
  }

  // Click on Cartes Premium link and verify text visibility
  async clickCartesPremium() {
    await waitForSelectorAndClick(this.page,this.cartesPremium);
    await waitForSelectorAndCheckVisibility(this.page,this.cartesPremium); 
  }
}

module.exports = FrenchHomepage;