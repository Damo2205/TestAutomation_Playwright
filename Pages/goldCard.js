// Include Playwright Module
const { expect } = require('@playwright/test');
const dotenv = require('dotenv');
const { handleCookiesPopup, waitForTimeout, isVisible, waitForSelectorAndCheckVisibility, clickElementIfVisible, waitForSelectorAndClick, navigateTo, waitForSelectorAndCheckVisibilityIfVisible } = require('../Utilities/reusableMethods');


// Load the .env file from the Config folder
dotenv.config({ path: './Config/.env' });

// Create the goldCard class
class AmexGoldCardPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Define locators and URLs
    this.extendedURL = 'fr/carte-de-paiement/types-cartes/cartes-proprietaires/?intlink=fr-fr-hp-product1-all-pry_cartes-01032021__;!!OrxsNty6D4my!74nUn3ttmrA8_kBLt2UsehSd8N5BZOybA7UkU-eYshAlSctRq_1E5CUxVZ9uywSqnfig2fbqLM1Bnf7rID1ygUmoz5A$'; // Extended URL
    this.acceptCookiesButton = 'button:has-text("Tout Accepter")'; // Selector for the "Accept Cookies" button
    this.requestYourCard = 'a:has-text("Demandez votre Carte")'; // Selector for the button
    this.requiredDocuments = 'text=Documents requis'; // Selector for the link
    this.amexGoldCardLearnMore = `xpath=//a[contains(@href, 'fr-proprietary-gold') and @alt='En savoir plus']`; // Selector for the Amex Gold Card Learn More button
    this.amexGoldCardText = 'id=LesCartesAmericanExpress'; //Selector for the American Express Cards text
    this.amexGoldCardImage = 'xpath=//img[contains(@alt, "Carte Gold American")]';
  }

  //Navigate to  American Express Gold Card page
  async navigate() {
    await navigateTo(this.page, process.env.BASE_URL + this.extendedURL);
    await waitForTimeout(4000);
    await handleCookiesPopup(this.page, this.acceptCookiesButton);
  }

  // Click on Learn More button for Amex Gold Card
  async clickAmexGoldCardLearnMore() {
    await waitForSelectorAndCheckVisibility(this.page,this.amexGoldCardText);
    await waitForSelectorAndClick(this.page,this.amexGoldCardLearnMore);
    await waitForTimeout(2000);
    await handleCookiesPopup(this.page, this.acceptCookiesButton);
    await waitForSelectorAndCheckVisibility(this.page,this.amexGoldCardImage);
    await waitForSelectorAndCheckVisibility(this.page,this.requestYourCard);
  } 

  // Click on Request Your Card button
  async clickRequestYourCard() {
    await waitForSelectorAndClick(this.page,this.requestYourCard);
  }

  // verify Required Documents link is visible
  async verifyRequiredDocumentsLink() {
    await waitForSelectorAndCheckVisibility(this.page,this.requiredDocuments);
    await waitForTimeout(5000);
  }


}

module.exports = AmexGoldCardPage;