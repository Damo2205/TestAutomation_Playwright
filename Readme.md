# TestAutomation_Playwright - please follow below steps to setup & execute project

    1. Install NodeJS
    2. Install VS code
    3. Add Playwright Extension
    4. Install Playwright
        a. Select Help --> Show all commands (or) Shift+Ctrl+P
        b. Enter Install Playwright command
        c. Select Browsers & JavaScript option and click on OK
    5. Add environment package
        a. Open Terminal/CMD window
        b. Navigate to TestAutomation Project
        c. Run npm install dotenv - - save command
    6. Add CSV Package
        a. Open Terminal/CMD window
        b. Navigate to TestAutomation Project
        c. Run npm install csv-parser
    7. Clone project from git repository
        https://github.com/Damo2205/TestAutomation_Playwright.git
        a. checkout develop branch
        b. update or add new code in develop branch
        c. commit & push code changes to develop branch after successful execution.
        d. merge develop branch to main branch
    8. Steps to create a new test case
        a. Create new test cases under 'tests' directory.
        b. Store selectors/locators, js methods under 'Pages' directory.
        c. Utilize the resuable methods from 'Utilities' directory.
    9. Steps to Execute Test Cases
        a. Select Run button in front of the test starting point, or select Testing Icon from left menu and select the test case to be executed.
        b. Right Click on Tests and select Run Test.
        c. Run using the command 'npx playwright test tests/example.spec.js' in Terminal.

    


    

