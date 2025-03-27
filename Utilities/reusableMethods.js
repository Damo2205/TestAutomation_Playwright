/**
 * Wait for an element to be visible on the page.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 * @param {string} selector - The selector of the element to wait for.
 */
export async function waitForElement(page, selector) {
    try {
        await page.waitForSelector(selector);
    } catch (error) {
        throw new Error(`Failed to wait for element with selector: ${selector}. Error: ${error.message}`);
    }
}

/**
 * Click on an element.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 * @param {string} selector - The selector of the element to click.
 */
export async function clickElement(page, selector) {
    try {
        await page.click(selector);
    } catch (error) {
        throw new Error(`Failed to click on element with selector: ${selector}. Error: ${error.message}`);
    }
}

/**
 * Navigate to a specific URL.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 * @param {string} url - The URL to navigate to.
 */
export async function navigateTo(page, url) {
    try {
        await page.goto(url);
    } catch (error) {
        throw new Error(`Failed to navigate to URL: ${url}. Error: ${error.message}`);
    }
}

/**
 * Check if an element is visible on the page.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 * @param {string} selector - The selector of the element to check.
 * @returns {Promise<boolean>} - True if the element is visible, false otherwise.
 */
export async function isVisible(page, selector) {
    try {
        return await page.isVisible(selector);
    } catch (error) {
        throw new Error(`Failed to check visibility of element with selector: ${selector}. Error: ${error.message}`);
    }
}

/**
 * Click on an element if it is visible.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 * @param {string} selector - The selector of the element to click.
 */
export async function clickElementIfVisible(page, selector) {
    try {
        if (await page.isVisible(selector)) {
            await page.click(selector);
        }
    } catch (error) {
        throw new Error(`Failed to click on visible element with selector: ${selector}. Error: ${error.message}`);
    }
}

/**
 * Type text into an input field.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 * @param {string} selector - The selector of the input field.
 * @param {string} text - The text to type.
 */
export async function typeText(page, selector, text) {
    try {
        await page.fill(selector, text);
    } catch (error) {
        throw new Error(`Failed to type text into element with selector: ${selector}. Error: ${error.message}`);
    }
}

/**
 * Handle a cookies popup by clicking the accept button if visible.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 * @param {string} selector - The selector of the accept cookies button.
 */
export async function handleCookiesPopup(page, selector) {
    try {
        if (await page.isVisible(selector)) {
            await page.click(selector);
        }
    } catch (error) {
        throw new Error(`Failed to handle cookies popup with selector: ${selector}. Error: ${error.message}`);
    }
}

/**
 * Get the text content of an element.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 * @param {string} selector - The selector of the element.
 * @returns {Promise<string>} - The text content of the element.
 */
export async function getText(page, selector) {
    return await page.textContent(selector);
}

/**
 * Get the value of an attribute of an element.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 * @param {string} selector - The selector of the element.
 * @param {string} attribute - The attribute to retrieve.
 * @returns {Promise<string>} - The value of the attribute.
 */
export async function getAttribute(page, selector, attribute) {
    return await page.getAttribute(selector, attribute);
}

/**
 * Wait for a specified timeout.
 * @param {number} time - The time to wait in milliseconds.
 */
export async function waitForTimeout(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

/**
 * Wait for an element to be visible and then click it.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 * @param {string} selector - The selector of the element to click.
 */
export async function waitForSelectorAndClick(page, selector) {
    try {
        await page.waitForSelector(selector);
        await page.click(selector);
    } catch (error) {
        throw new Error(`Failed to wait for and click element with selector: ${selector}. Error: ${error.message}`);
    }
}

/**
 * Wait for an element to be visible and type text into it.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 * @param {string} selector - The selector of the element.
 * @param {string} text - The text to type.
 */
export async function waitForSelectorAndTypeText(page, selector, text) {
    await page.waitForSelector(selector);
    await page.fill(selector, text);
}

/**
 * Wait for an element to be visible and return its text content.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 * @param {string} selector - The selector of the element.
 * @returns {Promise<string>} - The text content of the element.
 */
export async function waitForSelectorAndReturnText(page, selector) {
    try {
        await page.waitForSelector(selector);
        return await page.textContent(selector);
    } catch (error) {
        throw new Error(`Failed to wait for and get text of element with selector: ${selector}. Error: ${error.message}`);
    }
}

/**
 * Wait for an element to be visible and return its attribute value.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 * @param {string} selector - The selector of the element.
 * @param {string} attribute - The attribute to retrieve.
 * @returns {Promise<string>} - The value of the attribute.
 */
export async function waitForSelectorAndReturnAttribute(page, selector, attribute) {
    try {
        await page.waitForSelector(selector);
        return await page.getAttribute(selector, attribute);
    } catch (error) {
        throw new Error(`Failed to wait for and get attribute of element with selector: ${selector}. Error: ${error.message}`);
    }
}

/**
 * Wait for an element to be visible and check its visibility.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 * @param {string} selector - The selector of the element.
 * @returns {Promise<boolean>} - True if the element is visible, false otherwise.
 */
export async function waitForSelectorAndCheckVisibility(page, selector) {
    await page.waitForSelector(selector);
    return await page.isVisible(selector);
}

/**
 * Wait for an element to be visible and click it if it is visible.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 * @param {string} selector - The selector of the element to click.
 */
export async function waitForSelectorAndClickIfVisible(page, selector) {
    await page.waitForSelector(selector);
    if (await page.isVisible(selector)) {
        await page.click(selector);
    }
}

/**
 * Wait for an element to be visible and type text into it if it is visible.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 * @param {string} selector - The selector of the element.
 * @param {string} text - The text to type.
 */
export async function waitForSelectorAndTypeTextIfVisible(page, selector, text) {
    await page.waitForSelector(selector);
    if (await page.isVisible(selector)) {
        await page.fill(selector, text);
    }
}

/**
 * Wait for an element to be visible and return its text content if it is visible.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 * @param {string} selector - The selector of the element.
 * @returns {Promise<string>} - The text content of the element.
 */
export async function waitForSelectorAndReturnTextIfVisible(page, selector) {
    await page.waitForSelector(selector);
    if (await page.isVisible(selector)) {
        return await page.textContent(selector);
    }
}

/**
 * Wait for an element to be visible and return its attribute value if it is visible.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 * @param {string} selector - The selector of the element.
 * @param {string} attribute - The attribute to retrieve.
 * @returns {Promise<string>} - The value of the attribute.
 */
export async function waitForSelectorAndReturnAttributeIfVisible(page, selector, attribute) {
    await page.waitForSelector(selector);
    if (await page.isVisible(selector)) {
        return await page.getAttribute(selector, attribute);
    }
}

/**
 * Wait for an element to be visible and check its visibility if it is visible.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 * @param {string} selector - The selector of the element.
 * @returns {Promise<boolean>} - True if the element is visible, false otherwise.
 */
export async function waitForSelectorAndCheckVisibilityIfVisible(page, selector) {
    await page.waitForSelector(selector);
    return await page.isVisible(selector);
}






