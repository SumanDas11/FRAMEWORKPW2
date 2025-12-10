<!-- This is an overview file for the project FRAMEWORKPW2 
Author: SKD
Date: 02/11/2025
project/
│
├── fixtures/
│   └── amazonFixture.ts
├── pages/
│   ├── HomePage.ts
│   ├── SearchResultsPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── testData/
│   └── TestData.xlsx
│
├── tests/
│   |── ui_tests/
│   |   └── amazon.spec.ts
│   └── api_tests/
│
├── .env
├── playwright.config.ts
└── Readme.md
#fixtures
#pages
#playwright-report
#testData
#tests
##api_tests
##ui_tests
amazon.spec.ts
///////////////////////////////////////////////////////////////////////////////////////////////
You can make your POM even more powerful:
Add base classes (e.g., BasePage with common methods like waitForLoad()).
Use fixtures to share page objects across tests.
Implement components (e.g., Header, Sidebar, etc.) for modularity.
Combine with test data and config files for better flexibility.
///////////////////////////////////////////////////////////////////////////////////////////////
To do:
Test data interaction with json file, excel, db(SQL query)
How Page Object model works
-->