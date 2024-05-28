/// <reference types="cypress" />

describe("changing contact data", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Adding a contact", () => {
    cy.get('input[type="text"]').type("Test Name");
    cy.get('input[type="email"]').type("email.teste@this.com");
    cy.get('input[type="tel"]').type("11 99990000");
    cy.get(".adicionar").click();
  });

  it("Changing a contact name", () => {
    cy.get(".sc-iAEyYk > :last-child > .sc-gueYoa > .edit").click();
    cy.get('input[type="text"]').clear();
    cy.get('input[type="text"]').type("Name Changed");
    cy.get(".alterar").click();
    cy.get(".sc-iAEyYk > :last-child > .sc-dmqHEX > .sc-eDDNvR").should(
      "contain",
      "Name Changed"
    );
  });

  it("Changing contact email", () => {
    cy.get(".sc-iAEyYk > :last-child > .sc-gueYoa > .edit").click();
    cy.get('input[type="email"]').clear();
    cy.get('input[type="email"]').type("changed@email.com");
    cy.get(".alterar").click();
    cy.get(".sc-iAEyYk > :last-child > .sc-dmqHEX > .sc-eDDNvR").should(
      "contain",
      "changed@email.com"
    );
  });

  it("Changing contact telephone number", () => {
    cy.get(".sc-iAEyYk > :last-child > .sc-gueYoa > .edit").click();
    cy.get('input[type="tel"]').clear();
    cy.get('input[type="tel"]').type("00 0000-0000");
    cy.get(".alterar").click();
    cy.get(".sc-iAEyYk > :last-child > .sc-dmqHEX > .sc-eDDNvR").should(
      "contain",
      "00 0000-0000"
    );
  });
});
