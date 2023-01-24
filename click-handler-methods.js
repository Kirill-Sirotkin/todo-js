import { StatusHelper } from "./status-helper.js";
import { postToDoWithApi, putToDoWithApi, deleteToDoWithApi, postSignupWithApi, postSigninWithApi } from "./api-handler-methods.js";

export const clickLogoutButton = () => {
    localStorage.setItem("username", "username");
    localStorage.setItem("token", "")

    window.location.href = "/auth.html";
}

export const clickCloseButton = async (event) => {
    if (!confirm("Are you sure you want to delete item?")) return;

    const id = event.target.closest("[data-id]").dataset.id;

    await deleteToDoWithApi(id);
}

export const clickEditButton = async (event, todoItems) => {
    const id = event.target.closest("[data-id]").dataset.id;
    const itemIndex = todoItems.findIndex(todoItemElement => todoItemElement.id === id);

    const name = prompt("Enter new name", todoItems[itemIndex].name);
    const description = prompt("Enter new description", todoItems[itemIndex].description);

    const status = todoItems[itemIndex].status;

    if (!name) return;

    await putToDoWithApi(id, name, description, status);
}

export const clickStatusButton = async (event, todoItems) => {
    const id = event.target.closest("[data-id]").dataset.id;
    const itemIndex = todoItems.findIndex(todoItemElement => todoItemElement.id === id);

    const name = todoItems[itemIndex].name;
    const description = todoItems[itemIndex].description;
    const status = new StatusHelper(todoItems[itemIndex].status);

    await putToDoWithApi(id, name, description, status.nextStatus());
}

export const clickAddItem = async () => {
    const name = prompt("Enter todo name", "ToDo name");
    const description = prompt("Enter todo description");

    if (!name) return;

    await postToDoWithApi(name, description);
}

export const clickSignupButton = async (signupForm, signinForm, signupButton, signinButton) => {
    signupForm.classList.toggle("hidden");
    signinForm.classList.add("hidden");

    signupButton.classList.toggle("auth-button-deselect");
    signupButton.classList.toggle("auth-button-select");
    signinButton.classList.remove("auth-button-select");
    signinButton.classList.add("auth-button-deselect");
}

export const clickSigninButton = async (signinForm, signupForm, signinButton, signupButton) => {
    signinForm.classList.toggle("hidden");
    signupForm.classList.add("hidden");

    signinButton.classList.toggle("auth-button-deselect");
    signinButton.classList.toggle("auth-button-select");
    signupButton.classList.remove("auth-button-select");
    signupButton.classList.add("auth-button-deselect");
}

export const clickSignupSubmitButton = async (event) => {
    const data = new FormData(event.target);
    const jsonObject = Object.fromEntries(data.entries());
    const jsonData = JSON.stringify(jsonObject);
    await postSignupWithApi(jsonData);

    localStorage.setItem("username", jsonObject._email);
    window.location.href = "/";
}

export const clickSigninSubmitButton = async (event) => {
    const data = new FormData(event.target);
    const jsonObject = Object.fromEntries(data.entries());
    const jsonData = JSON.stringify(jsonObject);
    await postSigninWithApi(jsonData);
    
    localStorage.setItem("username", jsonObject._email);
    window.location.href = "/";
}