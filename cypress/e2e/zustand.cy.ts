describe('PlayerState Store Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/redux');
    });
  
    it('loads course data successfully', () => {
      cy.intercept('GET', 'api/courses', { fixture: 'courseData.json' }).as('getCourses');
  
      cy.window().its('useStore').invoke('getState').its('course').should('be.null');
  
      cy.window().its('useStore').invoke('getState').its('isLoading').should('be.false');
  
      cy.window().its('useStore').invoke('getState').its('load').invoke('apply').should('be.a', 'Promise');
  
      cy.wait('@getCourses');
  
      cy.window().its('useStore').invoke('getState').its('course').should('not.be.null');
    });

  });
  