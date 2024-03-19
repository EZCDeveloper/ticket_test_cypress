import { Tickets } from "../../datafactory/ticket.data";

class HomePage {

    dataid = '[data-testid="home-ticket"]'
    delButton = '[data-icon="x"]'

    verifyTicketCreatedSuccessfully(title: string) {
        cy.contains("h4", title).should("be.visible");
        return this;
    }

    /*   verifyTicketElements(title: string, description: string, category: string, status: string) {
          cy.contains("h4", title).should("be.visible")
          cy.contains("p", description).should("be.visible")
          cy.contains("h2", category).should("be.visible")
          cy.contains('span', status).should("be.visible")
      } */

    verifyTicketElementsTypes(value: Tickets): void {
        const ticketElements = ['title', 'description', 'category'];

        ticketElements.forEach(element => {
            cy.contains(this.dataid, value[element]).should("be.visible");
        });
    }

    clickOnSelectedTicket(value: Tickets) {
        cy.contains(value.title).first().click({ force: true });
        return this;
    }

    clickOnDeleteButton() {
        cy.get(this.delButton).eq(1).click({ force: true });
    }
}

export const onHomePage = new HomePage()
