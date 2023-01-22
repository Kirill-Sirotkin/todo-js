import { clickSignupButton, clickSigninButton, clickSignupSubmitButton, clickSigninSubmitButton } from "./click-handler-methods.js";

const signupButton = document.getElementById("signup-button");
const signinButton = document.getElementById("signin-button");

const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");

signupForm.addEventListener("submit", async (event) => { event.preventDefault(); await clickSignupSubmitButton(event) });
signinForm.addEventListener("submit", async (event) => { event.preventDefault(); await clickSigninSubmitButton(event) });

signupButton.addEventListener("mousedown", async () => await clickSignupButton(signupForm, signinForm));
signinButton.addEventListener("mousedown", async () => await clickSigninButton(signinForm, signupForm));