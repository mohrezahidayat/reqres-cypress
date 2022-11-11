import 'cypress-plugin-api'
const endpoint = {
    path: '/api',
    urlPath: function (){
        return this.path
    }
}

function listUsers(qs){
    return cy.api({
        method: 'GET',
        url: Cypress.env('baseUrl')+endpoint.urlPath()+'/users/',
        qs: qs,
        failOnStatusCode: false
    })
}

export {listUsers}