/// <reference types="cypress" />
describe("Page 3", () => {
  beforeEach(() => {
    cy.loginComSucesso();
    cy.acessarPage3();
  });

  it("Acessar Page 2", () => {
    cy.get(".ant-breadcrumb").contains("Page 2").click();
    cy.get(".Page2_Title__1TITv").should("contain", "Form Items");
  });

  it("Acessar Page 1", () => {
    cy.get(".ant-breadcrumb").contains("Page 1").click();
    cy.get(".Page1_Title__1KFu1").should("contain", "Table");
  });

  it("Acessar Home", () => {
    cy.get(".ant-breadcrumb").contains("HOME").click();
    cy.get(".welcome").should("contain", "Hi, Test User");
  });
});
