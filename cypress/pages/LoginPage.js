const locator = require("../support/locator/loginLocator");
class login {
  async visit(path) {
    cy.visit(path);
  }

  async clickLogin() {
    cy.get(locator.datatestid.btnClose).click();
    cy.get(locator.datatestid.login).click();
  }

  async inputEmail(email) {
    cy.get(locator.datatestid.inputEmail).type(email);
  }

  async inputPassword(password) {
    cy.get(locator.datatestid.inputPassword).type(password);
  }

  async clickBtnLogin() {
    cy.get(locator.datatestid.btnLogin).click;
  }
}

module.exports = new login();
