describe('Home Page', () => {
  it('renders the Home page correctly', () => {
    cy.visit('http://localhost:3000');
    cy.get('header').should('exist');
    cy.get('#carousel').should('exist');
    cy.get('#cards').should('exist');
  });

});
