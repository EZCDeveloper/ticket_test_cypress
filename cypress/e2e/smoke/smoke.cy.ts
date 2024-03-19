/// <reference types="cypress" />

import 'cypress-plugin-steps';
import { navigateTo } from "../../support/pageObject/common.page";
import { triggerSmoke } from '../../support/pageObject/smoke.page';

describe('Page Responses', () => {

    it('TC01. Verfy all the pages response with 200 and have href attribute', () => {

        cy.step("STEP 1: Visit home page")
        navigateTo.homePage()

        cy.step("STEP 2: Verify that all the pages responds with 200")
        triggerSmoke.verifyAllPagesResponse()
    });
})
