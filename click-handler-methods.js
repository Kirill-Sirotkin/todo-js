import { StatusHelper } from "./status-helper.js";
import { getToDosWithApi, postToDoWithApi, putToDoWithApi, deleteToDoWithApi } from "./api-handler-methods.js";

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

    const status = new StatusHelper(todoItems[itemIndex].status);
    todoItems[itemIndex].status = status.nextStatus();
}

export const clickAddItem = async () => {
    const name = prompt("Enter todo name", "ToDo name");
    const description = prompt("Enter todo description");

    if (!name) return;

    await postToDoWithApi(name, description);
}