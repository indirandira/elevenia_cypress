Feature: Homepage

    Feature Homepage page will work depending on the user needed.

    Background:
        Given A user opens a elevenia website
    Scenario: Success search product
        When User search product "komputer"
        And User click button search