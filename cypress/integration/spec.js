/// <reference types="cypress" />
describe("page", { viewportWidth: 1024, viewportHeight: 768 }, () => {
  it("works", () => {
    cy.visit("https://example.cypress.io");
  });
});
