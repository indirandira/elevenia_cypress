import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");

Given(`A user opens a elevenia website`, () => {
  loginPage.visit("", { timeout: 12000 });
});
When(`User click button Login`, () => {
  loginPage.clickLogin();
});

And(`User input email {string}`, () => {
  loginPage.inputEmail();
});
And(`User input password {string}`, () => {
  loginPage.inputPassword();
});
And(`User click button login`, () => {
  loginPage.clickBtnLogin();
});
