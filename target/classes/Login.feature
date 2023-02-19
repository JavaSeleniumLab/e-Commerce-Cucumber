Feature:Login Feature

  Background:

  Scenario Outline:
    Given Im on Login Page
    When I enter <username> in email tab
    And I enter <password> in password tab
    And I click on Submit button
    #Then I verify invalid credential message
    And Close the browser

    Examples:
      | username                     | password  |
      | mytestingworldlife@gmail.com | asel2020  |
      | goldenmoon77733@gmail.com    | alina2020 |



  Scenario: Verify user can Login with existing credentials
    Given Im on Login Page
    When I enter mytestingworldlife@gmail.com in email tab
    And I enter Asel19 in password tab
    And I click on Submit button
    #Then I verify invalid credential message
    And Close the browser







