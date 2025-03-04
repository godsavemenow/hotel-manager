Feature: As a receptionist
         I want to have a graphical interface that helps me to do the check-in
         So that I can do the check-in for the hotel guest

Scenario: Trying to make the check-in for a guest that has no register
    Given I am at the "check-in" page
    When I put the basic information about the guest
    And I go to the next page
    And I fill the formulary with the guest information
    And I go to the next page
    Then A message shows up "Guest registered"
    And A message shows up "Check-in done"

Scenario: Trying to make the check-in for a registered guest without updating his information
    Given I am at the "check-in" page
    When I put the basic information about the guest
    And I go to the next page
    And I don't change anything
    And I go to the next page
    Then A message shows up "Check-in done"

Scenario: Trying to make the check-in for a registered guest while updating his information
    Given I am at the "check-in" page
    When I put the basic information about the Guest
    And I go to the next page
    And I change the information about the Guest
    And I go to the next page
    Then A message shows up "update done"
    And A message shows up "Check-in done"