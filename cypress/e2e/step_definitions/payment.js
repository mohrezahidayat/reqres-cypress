import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import paymentPage from "../pages/payment_page"

Given("User visit website Reqres", () => {
    paymentPage.visitWebsiteReqres()
})

Given("User redirected to chechout page", () => {
    paymentPage.visitWebsiteReqres()
})

When("User click SUPPORT REQRES 1", () => {
    paymentPage.clickSupportReqres1()
})

When("User click SUPPORT REQRES 2", () => {
    paymentPage.clickSupportReqres2()
})

When("User select Monthly support 1", () => {
    paymentPage.clickMonthlySupport1()
})

When("User select Monthly support 2", () => {
    paymentPage.clickMonthlySupport2()
})

When("User click Subscribe", () => {
    paymentPage.btnSubscribe()
})

When("User enter a email {}", (email) => {
    paymentPage.fillEmailComplete(email)
})

When("User enter a card number {}", (cardNumber) => {
    paymentPage.fillCardNumber(cardNumber)
})

When("User enter a card expired {}", (cardExpiry) => {
    paymentPage.fillCardExpired(cardExpiry)
})

When("User enter a card cvc {}", (cardCvc) => {
    paymentPage.fillCardCVC(cardCvc)
})

When("User enter a card name {}", (cardName) => {
    paymentPage.fillCardName(cardName)
})

When("User scroll to the bottom page", () => {
    paymentPage.scrollToBottomPage()
})

When("User click upgrade button", () => {
    paymentPage.btnUpgrade()
})

When("User enter a email subs {}", (emailSubs) => {
    paymentPage.fillEmailSubs(emailSubs)
})

When("User click Subscribe email", () => {
    paymentPage.btnSubscribeEmail()
})

Then("Displays error message required fields", () => {
    paymentPage.errorMessageRequiredEmail()
    paymentPage.errorMessageRequiredCardNumber()
    paymentPage.errorMessageRequiredBillingName()
})

Then("User got error", (errorMessage) => {
    if(paymentPage.errorMailIncomplete(errorMessage)){
        expect(paymentPage.errorMailIncomplete(errorMessage)).to.be.true()
    } else if(paymentPage.errorCardInfo(errorMessage)){
        expect(paymentPage.errorCardInfo(errorMessage)).to.be.true()
    }

Then("Displays message {}", (message) => {
    paymentPage.messageSubsError(message)
})
})
