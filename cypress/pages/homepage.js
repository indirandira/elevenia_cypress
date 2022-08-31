const locator = require("../support/locator/homePageLocator");

class homepage {
  async searchProduct(product) {
    cy.get(locator.datatestid.search_product).type(product);
  }

  async clickBtnSearch() {
    cy.get(locator.datatestid.btnSearch).click({ multiple: true });
  }
}
module.exports = new homepage();
