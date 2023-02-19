$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateNewAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Register new User",
  "description": "",
  "id": "register-new-user",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Enter New Account Information",
  "description": "",
  "id": "register-new-user;enter-new-account-information",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Im on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Create New Account Button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I verify text message",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Sd.loginWebPage()"
});
formatter.result({
  "duration": 264514800,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\golde\\Downloads\\chromedriver_win32\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat DriverWrapper.DriverWrapper.initDriver(DriverWrapper.java:15)\r\n\tat StepDefinition.Login_Sd.loginWebPage(Login_Sd.java:16)\r\n\tat ✽.Given Im on Login Page(CreateNewAccount.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateNewAccount.i_click_on_Create_New_Account_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewAccount.i_verify_text_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Sd.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "",
  "description": "",
  "id": "login-feature;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Im on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \u003cusername\u003e in email tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \u003cpassword\u003e in password tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Submit button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Then I verify invalid credential message"
    }
  ],
  "line": 11,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-feature;;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "login-feature;;;1"
    },
    {
      "cells": [
        "mytestingworldlife@gmail.com",
        "asel2020"
      ],
      "line": 15,
      "id": "login-feature;;;2"
    },
    {
      "cells": [
        "goldenmoon77733@gmail.com",
        "alina2020"
      ],
      "line": 16,
      "id": "login-feature;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-feature;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Im on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter mytestingworldlife@gmail.com in email tab",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter asel2020 in password tab",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Submit button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Then I verify invalid credential message"
    }
  ],
  "line": 11,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Sd.loginWebPage()"
});
formatter.result({
  "duration": 3392000,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\golde\\Downloads\\chromedriver_win32\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat DriverWrapper.DriverWrapper.initDriver(DriverWrapper.java:15)\r\n\tat StepDefinition.Login_Sd.loginWebPage(Login_Sd.java:16)\r\n\tat ✽.Given Im on Login Page(Login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "mytestingworldlife@gmail.com",
      "offset": 8
    }
  ],
  "location": "Login_Sd.enterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "asel2020",
      "offset": 8
    }
  ],
  "location": "Login_Sd.enterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Sd.clickLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Sd.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login-feature;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Im on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter goldenmoon77733@gmail.com in email tab",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter alina2020 in password tab",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Submit button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Then I verify invalid credential message"
    }
  ],
  "line": 11,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Sd.loginWebPage()"
});
formatter.result({
  "duration": 3448800,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\golde\\Downloads\\chromedriver_win32\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat DriverWrapper.DriverWrapper.initDriver(DriverWrapper.java:15)\r\n\tat StepDefinition.Login_Sd.loginWebPage(Login_Sd.java:16)\r\n\tat ✽.Given Im on Login Page(Login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "goldenmoon77733@gmail.com",
      "offset": 8
    }
  ],
  "location": "Login_Sd.enterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "alina2020",
      "offset": 8
    }
  ],
  "location": "Login_Sd.enterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Sd.clickLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Sd.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 20,
  "name": "Verify user can Login with existing credentials",
  "description": "",
  "id": "login-feature;verify-user-can-login-with-existing-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "Im on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I enter mytestingworldlife@gmail.com in email tab",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter Asel19 in password tab",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on Submit button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#Then I verify invalid credential message"
    }
  ],
  "line": 26,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Sd.loginWebPage()"
});
formatter.result({
  "duration": 2836800,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\golde\\Downloads\\chromedriver_win32\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat DriverWrapper.DriverWrapper.initDriver(DriverWrapper.java:15)\r\n\tat StepDefinition.Login_Sd.loginWebPage(Login_Sd.java:16)\r\n\tat ✽.Given Im on Login Page(Login.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "mytestingworldlife@gmail.com",
      "offset": 8
    }
  ],
  "location": "Login_Sd.enterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Asel19",
      "offset": 8
    }
  ],
  "location": "Login_Sd.enterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Sd.clickLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Sd.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
});