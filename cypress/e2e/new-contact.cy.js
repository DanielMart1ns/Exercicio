/// <reference types="cypress" />

describe("Tests to contacts list", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Should add a new contact in end of the list", () => {
    cy.get('input[type="text"]').type("Daniel Martins");
    cy.get('input[type="email"]').type("email.teste@this.com");
    cy.get('input[type="tel"]').type("11 98765432");
    cy.get(".adicionar").click();

    //Verifying if the contact was added in the list by the telephone number
    cy.get(".sc-iAEyYk > :last-child > .sc-dmqHEX > .sc-eDDNvR").should(
      "contain",
      "11 98765432"
    );
  });

  //contact data change tests
  it("Changing contact name", () => {
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

  //Removing a contact
  it("Removing a contact", () => {
    cy.get(".sc-iAEyYk > :last-child > .sc-gueYoa > .delete").click();
    cy.get(".sc-iAEyYk > :last-child").next().should("not.exist");
  });
});
