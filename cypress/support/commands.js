Cypress.Commands.add("loginComSucesso", () => {
  cy.visit("http://localhost:3000/#/sign_in?last_page=/");
  cy.get("#normal_login_username").type("testuser");
  cy.get("#normal_login_password").type("pl123");
  cy.get("div > span > button").click();
  cy.get(".welcome").should("contain", "Hi, Test User");
});

Cypress.Commands.add("acessarPage1", () => {
  cy.get('[data-cy="navLink"]').contains("Page 1").click();
  cy.get(".Page1_Title__1KFu1").should("contain", "Table");
});

Cypress.Commands.add("acessarPage2", () => {
  cy.get('[data-cy="navLink"]').contains("Page 2").click();
  cy.get(".Page2_Title__1TITv").should("contain", "Form Items");
});
Cypress.Commands.add("acessarPage3", () => {
  cy.get('[data-cy="navLink"]').contains("Page 3").click();
  cy.get(".ant-breadcrumb").not(".href").should("contain", "Page 3");
});

Cypress.Commands.add("radioHorizontal", () => {
  cy.get(".ant-radio-button-input").first().eq(0).check({ force: true }).should("be.checked", "have.attr", "value", "horizontal");
});

Cypress.Commands.add("verificarPaginacao1to2", () => {
  cy.get("li.ant-pagination-item.ant-pagination-item-1").should("have.class", "ant-pagination-item-active");
  cy.get("li.ant-pagination-item.ant-pagination-item-2").not(".ant-pagination-item-active");
  cy.get("li.ant-pagination-prev").should("have.attr", "aria-disabled", "true");
  cy.get("li.ant-pagination-next").should("have.attr", "aria-disabled", "false").click();
});

Cypress.Commands.add("verificarPaginacao2to1", () => {
  cy.get("li.ant-pagination-next").should("have.attr", "aria-disabled", "false").click();
  cy.get("li.ant-pagination-item.ant-pagination-item-2").should("have.class", "ant-pagination-item-active");
  cy.get("li.ant-pagination-item.ant-pagination-item-1").not(".ant-pagination-item-active");
  cy.get("li.ant-pagination-prev").should("have.attr", "aria-disabled", "false");
  cy.get("li.ant-pagination-next").should("have.attr", "aria-disabled", "true");
  cy.get("li.ant-pagination-prev").click();
});

Cypress.Commands.add("verificarElementoTabela", () => {
  cy.get("tr:contains(John Brown)").find("td:contains(10)");
  cy.get("tr:contains(John Brown)").find("td:contains(33)");
});

Cypress.Commands.add("radioHorizontal", () => {
  cy.get(".ant-radio-button-input").first().eq(0).check({ force: true }).should("be.checked", "have.attr", "value", "horizontal");
});

Cypress.Commands.add("radioVertical", () => {
  cy.get(".ant-radio-button-input").eq(1).check({ force: true }).should("be.checked", "have.attr", "value", "vertical");
});

Cypress.Commands.add("radioInLine", () => {
  cy.get(".ant-radio-button-input").eq(2).check({ force: true }).should("be.checked", "have.attr", "value", "in line");
});

Cypress.Commands.add("informarCampoInput", () => {
  cy.get(".ant-input-affix-wrapper").type("Teste123!@#").should("contain", "Teste123");
});

Cypress.Commands.add("selecionarSelect", () => {
  cy.get(".ant-select-selection__rendered").first().click();
  cy.get("li.ant-select-dropdown-menu-item").contains("Brazil").click();
});

Cypress.Commands.add("selecionarTreeSelect", () => {
  cy.get(".ant-select-selection__rendered").eq(1).click();
  cy.get(".anticon-caret-down").click();
  cy.get(".ant-select-tree-title").contains("Red").click();
  cy.get(".ant-select-selection__rendered").eq(1).should("contain", "Red");
});

Cypress.Commands.add("selecionarCascaderSelect", () => {
  cy.get(".ant-cascader-picker").click();
  cy.get(".ant-cascader-menu-item ").contains("São Paulo").click();
  cy.get(".ant-cascader-menu-item ").contains("Campinas").click();
  cy.get(".ant-cascader-picker").should("contain", "São Paulo / Campinas");
});

Cypress.Commands.add("selecionarDatePicker", () => {
  cy.get(".ant-calendar-picker").click();
  cy.get(".ant-calendar-input").type("1995-10-04");
  cy.get(".ant-calendar-date").contains("4").should("have.attr", "aria-selected", "true");
  cy.get(".ant-calendar-month-select").should("contain", "Oct");
  cy.get(".ant-calendar-year-select").should("contain", "1995");
});

Cypress.Commands.add("selecionarSlider", () => {
  cy.get(".ant-input-number-input").clear().type(10);
  cy.get(".ant-slider-handle").should("have.attr", "aria-valuenow", 10);
});

Cypress.Commands.add("selecionarSwitch", () => {
  cy.get(".ant-form-item-control-wrapper > div > span > button").click().should("have.attr", "aria-checked", "true");
});

Cypress.Commands.add("informarTexto", () => {
  cy.get("div > span > textarea").type(
    "Lorem ipsum dolor sit amet. Ea dolorem blanditiis eum dolores aliquam qui maxime corrupti. Est expedita quod est sapiente debitis est consequatur debitis cum aliquid vero. Quo expedita recusandae ab excepturi totam et consequatur eius aut dolores architecto sed accusamus quas et incidunt minus. Qui reprehenderit quia ea sint ipsam cum optio velit aut dolor amet 33 adipisci perferendis Lorem ipsum dolor sit amet. Ea dolorem blanditiis eum dolores aliquam qui maxime corrupti. Est expedita quod est sapiente debitis est consequatur debitis cum aliquid vero. Quo expedita recusandae ab excepturi totam et consequatur eius aut dolores architecto sed accusamus quas et incidunt minus. Qui reprehenderit quia ea sint ipsam cum optio velit aut dolor amet 33 adipisci perferendis Lorem ipsum dolor sit amet. Ea dolorem blanditiis eum dolores aliquam qui maxime corrupti. Est expedita quod est sapiente debitis est consequatur debitis cum aliquid vero. Quo expedita recusandae ab excepturi totam et consequatur eius aut dolores architecto sed accusamus quas et incidunt minus. Qui reprehenderit quia ea sint ipsam cum optio velit aut dolor amet 33 adipisci perferendisLorem ipsum dolor sit amet. Ea dolorem blanditiis eum dolores aliquam qui maxime corrupti. Est expedita quod est sapiente debitis est consequatur debitis cum aliquid vero. Quo expedita recusandae ab excepturi totam et consequatur eius aut dolores architecto sed accusamus quas et incidunt minus. Qui reprehenderit quia ea sint ipsam cum optio velit aut dolor amet 33 adipisci perferendisLorem ipsum dolor sit amet. Ea dolorem blanditiis eum dolores aliquam qui maxime corrupti. Est expedita quod est sapiente debitis est consequatur debitis cum aliquid vero. Quo expedita recusandae ab excepturi totam et consequatur eius aut dolores architecto sed accusamus quas et incidunt minus. Qui reprehenderit quia ea sint ipsam cum optio velit aut dolor amet 33 adipisci perferendis"
  );
});
