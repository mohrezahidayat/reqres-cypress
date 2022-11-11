# Automated API & UI Testing
Thise automation using Cypress and Cucumber
# Preparation Set Up
1. Copy and paste this command on your terminal
    > git clone https://github.com/mohrezahidayat/reqres-cypress.git
2. Install editor such: VSCode/Sublime
3. Install Node Js
4. Install Cypress
# How To Run Test
- Open folder automation
- Open terminal
- Run API automation:
    > npm run test <test_path>
- Run UI automation (headless):
    > npm run cypress:execution
- Run UI automation (GUI):
    > npx cypress open

# Structures Folder
## API Automation
* Main testcases put in `Cypress/e2e/APIs`
* All json data put in `Cypress/fixtures/responses`
* All response put in `Cypress/models/response`
* All url endpoints and method put in `Cypress/service/users.js`
* For custom command put in `Cypress/support/commands.js`
## UI Automation
* Main testcases put in `Cypress/e2e/features`
* All elements put in `Cypress/e2e/pages`
* All step definition put in `Cypress/e2e/step_definitions`
