/// <reference types="cypress" />

describe("New contact", () => {
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
});
