/// <reference types="cypress" />

import 'cypress-plugin-steps';
import { navigateTo } from '../../support/pageObject/common.page';
import { onCreateTicketPage } from '../../support/pageObject/createTicket.page';
import { onHomePage } from '../../support/pageObject/home.page';
import { ticket } from '../../datafactory/ticket.data';
import { onEditTicketPage } from '../../support/pageObject/editTicket.page';


describe('Handling Tickets', () => {
    it('TC01. Should create a ticket successfully', () => {

        cy.step("STEP 1: Visit create Ticket Page")
        navigateTo.createTicketPage()

        cy.step("STEP 2: Fill out the form with valid data, then submit")
        onCreateTicketPage
            .fillTitle(ticket[0].title)
            .fillDescription(ticket[0].description)
            .selectCategory(ticket[0].category)
            .checkPriority()
            .setProgress(ticket[0].progress)
            .selectStatus(ticket[0].status)
            .submitTicket()

        cy.step("STEP 3: Verify that the new ticket is displayed")
        onHomePage.verifyTicketCreatedSuccessfully(ticket[0].title)
    });

    // BUG: title allow me to input all especial caracters, ex. "xxxxxx"
    it('TC02. Should Fail to Create a Ticket', () => {

        cy.step("STEP 1: Visit the page")
        navigateTo.createTicketPage()

        cy.step("STEP 2: Fill out the form with the Title missing, then try to submit the form")
        onCreateTicketPage
            .fillDescription(ticket[0].description)
            .selectCategory(ticket[0].category)
            .checkPriority()
            .setProgress(ticket[0].progress)
            .selectStatus(ticket[0].status)
            .submitTicket()
            .verifyErrorMissingFieldMessage()
    });

    it('TC03. Retrive a ticket', () => {
        cy.step("STEP 1: Visit home page")
        navigateTo.homePage()

        cy.step("STEP 2: Verify that the ticket details are displayed correctly")
        onHomePage.verifyTicketElementsTypes(ticket[0])
    });

    it('TC04. Update a Ticket', () => {
        cy.step("STEP 1: Visit home page")
        navigateTo.homePage()

        cy.step("STEP 2: Click on an 'edit' button for a specific ticket")
        onHomePage.clickOnSelectedTicket(ticket[0])

        cy.step("STEP 3: Update the ticket details in the form, then submit")
        onEditTicketPage
            .fillTitle(ticket[1].title)
            .fillDescription(ticket[1].description)
            .selectCategory(ticket[1].category)
            .checkPriority()
            .setProgress(ticket[1].progress)
            .selectStatus(ticket[1].status)
            .submitTicket()

        cy.step("STEP 4: Verify that the ticket is updated with the new details")
        onHomePage.verifyTicketCreatedSuccessfully(ticket[1].title)
    });

    it('TC05. Fail to Update a Ticket', () => {
        cy.step("STEP 1: Visit home page")
        navigateTo.homePage()

        cy.step("STEP 2: Click on an 'edit' button for a specific ticket")
        onHomePage.clickOnSelectedTicket(ticket[1])

        cy.step("STEP 3: Step 3: Leave empty fields details in the form")
        onEditTicketPage.emptyTitle()
        onEditTicketPage.fillDescription(ticket[1].description)
        onEditTicketPage.submitTicket()

        cy.step("STEP 4: Verify that the error message is displayed")
        onEditTicketPage.verifyErrorMissingFieldMessage()
    });

    it('TC06. Delete Ticket', () => {
        cy.step("STEP 1: Visit home page")
        navigateTo.homePage()

        cy.step("STEP 2: Click on a 'delete' button for a specific ticket")
        onHomePage.clickOnDeleteButton()

        cy.step("STEP 3: Verify that the ticket is no longer displayed")
        cy.contains(ticket[1].title).should('not.exist')
    });
})
