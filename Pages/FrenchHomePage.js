// Include Playwright Module
const { expect } = require('@playwright/test');
const dotenv = require('dotenv');

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
    this.extendedURL = 'fr-fr/?inav=NavLogo'; // Extended URL
    this.cartesPremium = 'text=Cartes Premium'; // Selector for the link
    this.acceptCookiesButton = 'button:has-text("Accepter les cookies")'; // Selector for the "Accept Cookies" button
  }

  //Navigate to  Homepage
  async navigate() {
    await this.page.goto(process.env.BASE_URL + this.extendedURL);
  }

//Handle the cookies popup
async handleCookiesPopup() {
  if (await this.page.isVisible(this.acceptCookiesButton)) {
    await this.page.click(this.acceptCookiesButton);
  }
}

  // Click on Cartes Premium link 
  async clickCartesPremium() {
    await this.page.click(this.cartesPremium);
    await this.page.isVisible(this.cartesPremium);
  }
}

module.exports = FrenchHomepage;