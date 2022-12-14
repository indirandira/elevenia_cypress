import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");
const homepage = require("../../pages/homepage");

Given(`As user I opens a elevenia website`, () => {
  loginPage.visit("", { timeout: 12000 });
});

When(`User search product {string}`, (product) => {
  homepage.searchProduct(product);
});
And(`User click button search`, () => {
  homepage.clickBtnSearch();
});
