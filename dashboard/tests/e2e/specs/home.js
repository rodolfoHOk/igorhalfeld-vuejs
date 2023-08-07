const APP_URL = process.env.APP_URL || 'http://localhost:8080/';

describe('Home', () => {
  it('should render create account modal when click on cta create account button', () => {
    cy.visit(APP_URL);

    cy.get('#cta-create-account-button').click();

    cy.get('#modal-create-account');
  });

  it('should render create account modal when click on header create account button', () => {
    cy.visit(APP_URL);

    cy.get('#header-create-account-button').click();

    cy.get('#modal-create-account');
  });

  it('should render login modal when click on header login button', () => {
    cy.visit(APP_URL);

    cy.get('#header-login-button').click();

    cy.get('#modal-login');
  });

  it('should login when type email and password and click modal login button', () => {
    cy.visit(APP_URL);

    cy.get('#header-login-button').click();
    cy.get('#modal-login');

    cy.get('#login-email-field').type('igor@igor.me');
    cy.get('#login-password-field').type('1234');
    cy.get('#login-submit-button').click();
    cy.wait(4000);

    cy.url().should('include', '/feedbacks');
  });

  it('should show an error when try login with invalid email', () => {
    cy.visit(APP_URL);

    cy.get('#header-login-button').click();
    cy.get('#modal-login');

    cy.get('#login-email-field').type('igor@');
    cy.get('#login-password-field').type('1234');
    cy.get('#login-submit-button').click();

    cy.get('#login-email-error');
  });

  it('should logout correctly', () => {
    cy.visit(APP_URL);

    cy.get('#header-login-button').click();
    cy.get('#modal-login');

    cy.get('#login-email-field').type('igor@igor.me');
    cy.get('#login-password-field').type('1234');
    cy.get('#login-submit-button').click();
    cy.wait(4000);
    cy.url().should('include', '/feedbacks');

    cy.get('#logout-button').click();
    cy.url().should('include', '/');
  });
});
