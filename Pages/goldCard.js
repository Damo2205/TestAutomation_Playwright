// Include Playwright Module
const { expect } = require('@playwright/test');
const dotenv = require('dotenv');
const { handleCookiesPopup, waitForTimeout, isVisible, waitForSelectorAndCheckVisibility, clickElementIfVisible, waitForSelectorAndClick, navigateTo, waitForSelectorAndCheckVisibilityIfVisible, waitForElement } = require('../Utilities/reusableMethods');
const { getValueFromCSV } = require('../Utilities/csvReader');

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
    this.requestYourCard = '//a[text()="Demandez votre Carte"]'; // Selector for the button
    this.requiredDocuments = '//button[text()="Documents requis"]'; // Selector for the link
    this.amexGoldCardLearnMore = `xpath=//a[contains(@href, 'fr-proprietary-gold') and @alt='En savoir plus']`; // Selector for the Amex Gold Card Learn More button
    this.amexGoldCardText = 'id=LesCartesAmericanExpress'; //Selector for the American Express Cards text
    this.amexGoldCardImage = 'xpath=//img[contains(@alt, "Carte Gold American")]';
    this.applicantFirstName = '[name="firstName"]'; // selector for first name input
    this.applicantLastName = '[name="lastName"]'; // selector for last name input
    this.applicantDOB = '[name="fieldControl-input-dateOfBirth"]'; // selector for date of birth input
    this.applicantEmail = '[name="email"]'; // selector for email input
    this.applicantPhoneNumber = '[name="mobilePhoneNumber"]'; // selector for phone number input
    this.saveAndContinueButton = '//button[text()="Sauvegarder et Continuer"]'; // selector for save and continue button
    this.yourPersonalInformationText = 'text=Vos informations personnelles'; // selector for personal information text
  }

// Set applicant title dynamically by selecting the radio button
async setApplicantTitle(title) {
  const titleSelector = `input[type="radio"][value="${title}"]`; // Selector for the radio button
  const titleLocator = this.page.locator(titleSelector);

  // Ensure the radio button is visible and click it
  if (await titleLocator.isVisible()) {
    await titleLocator.click({ force: true });
  } else {
    throw new Error(`Radio button with title "${title}" is not visible.`);
  }
}
  
  //Navigate to  American Express Gold Card page
  async navigate() {
    await navigateTo(this.page, process.env.BASE_URL + this.extendedURL);
    await handleCookiesPopup(this.page, this.acceptCookiesButton);
  }

  // Click on Learn More button for Amex Gold Card
  async clickAmexGoldCardLearnMore() {
    await waitForSelectorAndCheckVisibility(this.page,this.amexGoldCardText);
    await waitForSelectorAndClick(this.page,this.amexGoldCardLearnMore);
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
  }

  // Fill in the applicant details dynamically in page1
  async fillApplicantDetails(row) {
    await handleCookiesPopup(this.page, this.acceptCookiesButton);
    await this.setApplicantTitle(row.Title);
    // Fill in the other applicant details
    await this.page.locator(this.applicantFirstName).fill(row.FirstName);
    await this.page.locator(this.applicantLastName).fill(row.LastName);
    await this.page.locator(this.applicantDOB).fill(row.DOB);
    await this.page.locator(this.applicantEmail).fill(row.eMailID);
    await this.page.locator(this.applicantPhoneNumber).fill(row.PhoneNumber);
  }

  // Click on Save and Continue button
  async clickSaveAndContinueButton() {
    await handleCookiesPopup(this.page, this.acceptCookiesButton);
    console.log('successfully clicked popup');
    await waitForElement(this.page, this.saveAndContinueButton).click;
    console.log('successfully clicked save and continue button');
    //await waitForSelectorAndClick(this.page,this.saveAndContinueButton);
   // await handleCookiesPopup(this.page, this.acceptCookiesButton);
    await waitForElement(this.page,this.yourPersonalInformationText).isVisible;
    console.log('your personal information text visible');
  }
}

module.exports = AmexGoldCardPage;