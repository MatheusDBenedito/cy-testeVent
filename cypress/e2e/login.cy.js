/// <reference types="cypress" />

describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/#/sign_in?last_page=/");
  });

  it("Realizar login com username em branco", () => {
    cy.get("#normal_login_username").type("123").clear();
    cy.get(".ant-form-explain").should("contain", "Please input your username.");
    cy.get("#normal_login_username").type("123");
    cy.get("#normal_login_password").type("pl123").clear();
    cy.get(".ant-form-explain").should("contain", "Please input your Password.");
  });

  it("Tentativa de login com credenciais inválidas", () => {
    cy.get("#normal_login_username").type("testuser");
    cy.get("#normal_login_password").type("123pl");
    cy.get("div:nth-child(5) > div > div > span > button").click();
    cy.get(".error-message").should("contain", "There was a problem logging in: Login/Password is incorrect");
  });

  it("Login com credenciais válidas", () => {
    cy.loginComSucesso();
  });
});
