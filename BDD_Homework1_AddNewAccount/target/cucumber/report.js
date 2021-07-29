$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/TechFios_Login.feature");
formatter.feature({
  "line": 1,
  "name": "TechFios login functionality validation",
  "description": "",
  "id": "techfios-login-functionality-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "user should be able to log in with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-log-in-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters username as \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks the Bank \u0026 Cash button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user clicks New Account button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user should see add new account page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters AccountTitle as \"\u003cAccounttitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enters Description as \"\u003cdescription\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters Initial Balance as \"\u003cBalance\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters Account Number as \"\u003caccountNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters Contact Person as \"\u003ccontactPerson\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters Phone as \"\u003cphone\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters Internet Banking URL as \"\u003cbankUrl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user clicks the Submit button",
  "keyword": "When "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-log-in-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "Accounttitle",
        "description",
        "Balance",
        "accountNumber",
        "contactPerson",
        "phone",
        "bankUrl"
      ],
      "line": 23,
      "id": "techfios-login-functionality-validation;user-should-be-able-to-log-in-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Checking",
        "Personal Account",
        "10000",
        "123456",
        "Pragya Paudel",
        "222 333 4444",
        "techfios.com"
      ],
      "line": 24,
      "id": "techfios-login-functionality-validation;user-should-be-able-to-log-in-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2865684601,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the TechFios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_is_on_the_TechFios_login_page()"
});
formatter.result({
  "duration": 1590973501,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "user should be able to log in with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-log-in-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks the Bank \u0026 Cash button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user clicks New Account button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user should see add new account page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters AccountTitle as \"Checking\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enters Description as \"Personal Account\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters Initial Balance as \"10000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters Account Number as \"123456\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters Contact Person as \"Pragya Paudel\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters Phone as \"222 333 4444\"",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters Internet Banking URL as \"techfios.com\"",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user clicks the Submit button",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.user_enters_username_as(String)"
});
formatter.result({
  "duration": 194784301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.user_enters_password_as(String)"
});
formatter.result({
  "duration": 144572500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 1684865299,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 1931300,
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.getTitle()\" because \"this.driver\" is null\r\n\tat page.LoginPageAndAddNewAccount.getPageTitle(LoginPageAndAddNewAccount.java:60)\r\n\tat steps.StepDefinitions.user_should_land_on_dashboard_page(StepDefinitions.java:46)\r\n\tat ✽.Then user should land on dashboard page(./src/test/java/features/TechFios_Login.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_the_Bank_Cash_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_New_Account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.user_should_see_add_new_account_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checking",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.user_enters_AccountTitle_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Personal Account",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.user_enters_Description_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.user_enters_Initial_Balance_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 31
    }
  ],
  "location": "StepDefinitions.user_enters_Account_Number_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pragya Paudel",
      "offset": 31
    }
  ],
  "location": "StepDefinitions.user_enters_Contact_Person_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "222 333 4444",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.user_enters_Phone_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "techfios.com",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.user_enters_Internet_Banking_URL_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_the_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
});