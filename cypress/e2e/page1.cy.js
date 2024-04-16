/// <reference types="cypress" />

describe("Page 1", () => {
  beforeEach(() => {
    cy.loginComSucesso();
    cy.acessarPage1();
  });

  it("Encontrar nome na tabela", () => {
    cy.verificarElementoTabela();
  });

  it("Encontrar nome após reordenação", () => {
    cy.get("tr > th.ant-table-column-has-actions.ant-table-column-has-sorters").click();
    cy.verificarElementoTabela();
  });

  it("Verificar Paginação da pagina 1 para a 2", () => {
    cy.verificarPaginacao1to2();
  });
  it("Verificar Paginação da pagina 2 para a 1", () => {
    cy.verificarPaginacao2to1();
  });
});
