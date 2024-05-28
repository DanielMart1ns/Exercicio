/// <reference types="cypress" />

describe("Should remove a contact", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Adding a contact", () => {
    cy.get('input[type="text"]').type("Contact to be Removed");
    cy.get('input[type="email"]').type("remove@this.com");
    cy.get('input[type="tel"]').type("11 11111111");
    cy.get(".adicionar").click();
  });

  it("Removing a contact", () => {
    cy.get(".sc-iAEyYk > :last-child > .sc-gueYoa > .delete").click();
    cy.get(".sc-iAEyYk > :last-child").next().should("not.exist");
  });
});
