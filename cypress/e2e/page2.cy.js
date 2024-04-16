/// <reference types="cypress" />

describe("Page 2", () => {
  beforeEach(() => {
    cy.loginComSucesso();
    cy.acessarPage2();
  });

  it("Informar campo Radio Button", () => {
    cy.radioHorizontal();
    cy.radioVertical();
    cy.radioInLine();
  });
  it("Informar campo input", () => {
    cy.informarCampoInput();
  });

  it("Selecionar o campo Select", () => {
    cy.selecionarSelect();
  });

  it("Selecionar o campo TreeSelect", () => {
    cy.selecionarTreeSelect();
  });

  it("Selecionar o campo Cascader", () => {
    cy.selecionarCascaderSelect();
  });

  it("Selecionar o Campo DatePicker", () => {
    cy.selecionarDatePicker();
  });

  it("Selecionar o campo Slider with Input Number no modo Horizontal", () => {
    cy.selecionarSlider();
  });

  it("Selecionar o campo switch", () => {
    cy.selecionarSwitch();
  });

  it("Informar texto", () => {
    cy.informarTexto();
  });
});
