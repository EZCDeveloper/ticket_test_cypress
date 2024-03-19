/// <reference types="cypress" />

import { myViewports } from '../../support/pageObject/viewports.page';

describe('Viewports', () => {
    //TODO: separe the object from the viewports.page.ts
    myViewports.verifyViewports();
});
