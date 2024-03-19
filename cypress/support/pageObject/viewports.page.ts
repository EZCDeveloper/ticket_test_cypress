import 'cypress-each';
import ViewportPreset = Cypress.ViewportPreset;

// ** https://github.com/bahmutov/cypress-each **
//1- Install each package, 2- update the tsconfig.json file, 3- import the package, 4- use it
const viewports: ViewportPreset[] = [
    'iphone-6',
    'ipad-2',
    'ipad-mini',
    'samsung-s10'
];

class ViewportPage {
    verifyViewports() {
        it.each(viewports)(`Should display the page correctly on %s`, (preset: ViewportPreset) => {
            cy.viewport(preset);
            cy.visit('/');
            cy.get('[data-testid="container-ticket"]').should('be.visible');
        })
    }
}

export const myViewports = new ViewportPage()
