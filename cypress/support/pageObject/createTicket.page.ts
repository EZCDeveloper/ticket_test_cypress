class CreateTicketPage {

    txtTitle = "#title";
    txtDescription = "#description";
    selCategory = '[name="category"]';
    chePriority = '#priority-4';
    progBar = "#progress";
    selStatus = '[name="status"]';
    btnSubmit = 'input[type="submit"]'

    fillTitle(title: string) {
        cy.get(this.txtTitle).type(title);
        return this;
    }

    fillDescription(description: string) {
        cy.get(this.txtDescription).type(description);
        return this;
    }

    selectCategory(category: string) {
        cy.get(this.selCategory).select(category);
        return this;
    }

    checkPriority() {
        cy.get(this.chePriority).check({ force: true });
        return this;
    }

    setProgress(progress: number) {
        cy.get(this.progBar).invoke('val', progress);
        return this;
    }

    selectStatus(status: string) {
        cy.get(this.selStatus).select(status);
        return this;
    }

    submitTicket() {
        cy.get(this.btnSubmit)
            .contains("Create Ticket")
            .should("be.visible")
            .click();
        return this;
    }

    verifyErrorMissingFieldMessage() {
        cy.get('#title:invalid')
            .invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.')
        return this;
    }

}
export const onCreateTicketPage = new CreateTicketPage()
