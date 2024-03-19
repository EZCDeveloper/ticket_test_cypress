export class NavigationPage {

    navCategory = '[data-testid="nav-ticket"]'

    homePage() {
        cy.visit('/')
        cy.url().should('eq', 'http://localhost:3000/')
        return this;
    }

    createTicketPage() {
        cy.visit('/')
        cy.get(this.navCategory)
            .should('be.visible')
            .click()
        return this;
    }
}

export const navigateTo = new NavigationPage()
