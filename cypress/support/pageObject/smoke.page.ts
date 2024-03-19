class SmokePage {

    aTag = "a"

    verifyAllPagesResponse() {
        cy.get(this.aTag).each(($el) => {
            cy.request($el.prop('href')).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    }
}

export const triggerSmoke = new SmokePage()
