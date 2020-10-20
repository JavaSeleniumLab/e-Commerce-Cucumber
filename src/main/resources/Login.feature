Feature:Login Feature

  Scenario: Verify user can Login with existing credentials
    Given Im on Login Page
    When I enter mytestingworldlife@gmail.com in email tab
    And I enter Asel1990 in password tab
    And I click on Submit button
    Then I verify invalid credential message
    And Close the browser







