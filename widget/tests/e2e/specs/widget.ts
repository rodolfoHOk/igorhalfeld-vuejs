const APP_URL = process.env.APP_URL || 'http://localhost:8080';

describe('Widget', () => {
  it('check if widget button are showed', () => {
    cy.visit(APP_URL);
    cy.wait(2000);
    cy.get('#widget-open-button');
  });
});
