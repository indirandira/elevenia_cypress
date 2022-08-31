Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A user opens a elevenia website
    Scenario: Success Login
        When User click button Login
        And User input email "indira.dira@gmail.com"
        And User input password "abc12345"
        And User click button login