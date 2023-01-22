import { StatusHelper } from "./status-helper.js";
import { clickAddItem, clickCloseButton, clickEditButton, clickStatusButton } from "./click-handler-methods.js";
import { getToDosWithApi } from "./api-handler-methods.js";

const drawCards = async () => {

    await getToDosWithApi(todoItems);
    todoList.innerHTML = "";

    todoItems.forEach(todoItemElement => {
        const todoItemNode = todoItem.content.firstElementChild.cloneNode(true);
        const itemName = todoItemNode.querySelector("[data-name]");
        const itemDescription = todoItemNode.querySelector("[data-description]");
        const statusButton = todoItemNode.querySelector("[data-status-button]");
    
        const statusHelper = new StatusHelper(todoItemElement.status);

        todoItemNode.dataset.id = todoItemElement.id;
        itemName.innerHTML = todoItemElement.name;
        itemDescription.innerHTML = todoItemElement.description;
        statusButton.innerHTML = statusHelper.getStatusText();
        statusHelper.toggleClasses(statusButton);
    
        const closeIcon = todoItemNode.querySelector("[data-close-icon]");
        const editIcon = todoItemNode.querySelector("[data-edit-icon]");
    
        closeIcon.addEventListener("mousedown", async (event) => { await clickCloseButton(event); drawCards(); });
        editIcon.addEventListener("mousedown", async (event) => { await clickEditButton(event, todoItems); drawCards(); });
        statusButton.addEventListener("mousedown", async (event) => { await clickStatusButton(event, todoItems); drawCards(); });
    
        todoList.prepend(todoItemNode);
    });

    const addItemNode = addItem.content.firstElementChild.cloneNode(true);

    addItemNode.addEventListener("mousedown", async (event) => { await clickAddItem(); drawCards(); });
    todoList.appendChild(addItemNode);
}

const todoItems = [];

const todoList = document.getElementById("todo-list");
const todoItem = document.getElementById("todo-item");
const addItem = document.getElementById("add-item");

drawCards();