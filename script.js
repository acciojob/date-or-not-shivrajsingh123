const date = new Date().toISOString(); // Convert Date to a valid string format
cy.visit(baseUrl, {
    onBeforeLoad(win) {
        cy.stub(win, "prompt").onFirstCall().returns(date); // Return a valid date string
    }
});

cy.on("window:alert", (str) => {
    expect(str).to.equal("true"); // alert() returns a string, so compare with "true"
});
