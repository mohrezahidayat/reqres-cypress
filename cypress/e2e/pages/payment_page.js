class paymentPage{

    visitWebsiteReqres() {
        cy.visit('https://reqres.in/')
    }

    clickSupportReqres1() {
        cy.get('body > div.container > div > div > h2:nth-child(1)').scrollIntoView()
        cy.get('body > div.container > div > div > div.t-center > button').click()
    }

    clickSupportReqres2() {
        cy.get('#supportForm > button').click()
        cy.url().should('include','checkout.stripe.com/c/pay/')
        cy.get('#ProductSummary-totalAmount > div > div.mr2.flex-item.width-fixed').should('contain.text', '$5.00')
    }

    clickMonthlySupport1() {
        cy.get('#supportOneTime').click()
    }

    clickMonthlySupport2() {
        cy.get('#supportRecurring').click()
    }

    fillEmail(email) {
        cy.get('#email').type(email)
    }

    fillCardNumber(cardNumber) {
        cy.get('#cardNumber').type(cardNumber)
    }

    fillCardExpired(cardExpiry) {
        cy.get('#cardExpiry').type(cardExpiry)
    }

    fillCardCVC(cardCvc) {
        cy.get('#cardCvc').type(cardCvc)
    }

    fillCardName(cardName) {
        cy.get('#billingName').type(cardName)
    }

    selectRegionCountry() {
        cy.get('#billingCountry').click()
        cy.get('//*[@text=\'Indonesia\']').click()
    }

    btnSubscribe() {
        cy.get('#root > div > div > div.App-Payment > div > div.PaymentFormFixedHeightContainer.flex-container.direction-column > form > div.PaymentForm-confirmPaymentContainer.mt4.flex-item.width-grow > div > div:nth-child(2) > button').click()
    }

    errorMessageRequiredEmail() {
        cy.get('#required-email-fieldset').should('contain.text', 'Required')
    }

    errorMessageRequiredCardNumber() {
        cy.get('#required-cardNumber-fieldset').should('contain.text', 'Required')
    }

    errorMessageRequiredBillingName() {
        cy.get('#required-billingName-fieldset').should('contain.text', 'Required')
    }

    errorMailIncomplete(errorMessage) {
        cy.get('#email-fieldset > div.FormFieldGroup-container > div.FieldError-container').should('contain.text', errorMessage)
    }

    errorCardInfo(errorMessage) {
        cy.get('#cardNumber-fieldset-inner > div:nth-child(4)').should('contain.text', errorMessage)
    }

    scrollToBottomPage() {
        cy.get('body > div.container > div > div > h2:nth-child(27)').scrollIntoView()
    }

    fillEmailSubs(emailSubs) {
        cy.get('#mce-EMAIL').type(emailSubs)
    }

    btnUpgrade() {
        cy.get('#trigger-pro').click()
    }

    btnSubscribeEmail() {
        cy.get('#mc-embedded-subscribe').invoke("removeAttr", "target").click()
    }

    messageSubsSuccess(message){
        cy.get('#templateBody > h2').type(message)
    }

    messageSubsError(message) {
        cy.get('#templateBody > h2').type(message)
    }

}

module.exports = new paymentPage();