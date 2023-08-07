const APP_URL = process.env.APP_URL || 'http://localhost:8080';

describe('Credential', () => {
  it('should generate an api key', () => {
    cy.visit(APP_URL);

    cy.get('#header-login-button').click();
    cy.get('#modal-login');

    cy.get('#login-email-field').type('igor@igor.me');
    cy.get('#login-password-field').type('1234');
    cy.get('#login-submit-button').click();

    cy.wait(4000);
    cy.visit(`${APP_URL}/credentials`);
    cy.wait(2000);

    const oldApiKey = cy.get('#api-key').invoke('text');
    cy.get('#generate-api-key').click();
    cy.wait(2000);
    const newApiKey = cy.get('#api-key').invoke('text');

    expect(oldApiKey).to.not.equal(newApiKey);
  });
});
