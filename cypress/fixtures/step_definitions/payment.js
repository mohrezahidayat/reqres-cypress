import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor"
import paymentPage from "../../e2e/pages/payment_page"

Given("User visit website Reqres", () => {
    paymentPage.visitWebsiteReqres()
})

When("User click SUPPORT REQRES", () => {
    paymentPage.clickSupportReqres()
})

And("User select Monthly support ($5/month)", () => {
    paymentPage.clickMonthlySupport()
})

And("User click Subscribe", () => {
    paymentPage.btnSubscribe()
})

Then("Displays error message required fields", () => {
    paymentPage.errorMessageRequiredEmail()
    paymentPage.errorMessageRequiredCardNumber()
    paymentPage.errorMessageRequiredBillingName()
})