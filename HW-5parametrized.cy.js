
describe('Multiple tests', () => {
    const testparameter = (testData, expectedResult) =>

    function () {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[title="Forms"]').click();
      cy.get('[title="Form Layouts"]').click();
      cy.get('#inputEmail3').type(`${testData}`);
      cy.get('#inputPassword3').type(`${expectedResult}`);
      cy.get('#inputEmail3').should("contain.value", `${testData}`)
      cy.get('#inputPassword3').should("contain.value", `${expectedResult}`)
    };

  it('search for CYPRESS', testparameter('gmail', 'password'));

})


