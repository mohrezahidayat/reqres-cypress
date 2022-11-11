Feature: Payment ReqRes

Scenario: Invalid Payment Monthly One Time
    Given User visit website Reqres
    When User click SUPPORT REQRES 1
    And User select Monthly support 1
    And User click SUPPORT REQRES 2
    And User click Subscribe
    Then Displays error message required fields

Scenario: Invalid Payment Monthly Recurring
    Given User visit website Reqres
    When User click SUPPORT REQRES 1
    And User select Monthly support 2
    And User click SUPPORT REQRES 2
    And User click Subscribe
    Then Displays error message required fields

Scenario Outline: Invalid Payment Filling Fields
    Given User visit website Reqres
    When User click SUPPORT REQRES 1
    And User select Monthly support 2
    And User click SUPPORT REQRES 2
    And User enter a email <email>
    And User enter a card number <cardNumber>
    And User enter a card expired <cardExpired>
    And User enter a card cvc <cardCvc>
    And User enter a card name <cardName>
    And User select region country Indonesia
    And User click Subscribe
    Then User got error <errorMessage>

Examples:
    | email           | cardNumber        | cardExpired | cardCvc | cardName | errorMessage                               |
    | reza            | 4024007138059893  |   10/25     |   123   |   REZA   | Your email is incomplete.                  |
    | reza@gmail.com  | 123               |   10/25     |   123   |   REZA   | Your card number is incomplete.            |
    | reza@gmail.com  | 0004007138059893  |   10/25     |   123   |   REZA   | Your card number is invalid.               |
    | reza@gmail.com  | 4024007138059893  |   10        |   123   |   REZA   | Your card's expiration date is incomplete. |
    | reza@gmail.com  | 4024007138059893  |   10/10     |   123   |   REZA   | Your card's expiration year is in the past.|
    | reza@gmail.com  | 4024007138059893  |   10/25     |   12    |   REZA   | Your card's security code is incomplete.   |
    | reza@gmail.com  | 4024007138059893  |   10/25     |   123   |   REZA   | Your card number is incorrect              |

Scenario Outline: Subscription Email
    Given User visit website Reqres
    When User scroll to the bottom page
    And User enter a email <emailSubs>
    And User click Subscribe
    Then Displays message <message>

Examples:
    | emailSubs      | message                                            |
    | reza           | An email address must contain a single @           |
    | @gmail.com     | The username portion of the email address is empty |
    | reza@gmail.com | Subscription Confirmed                              |