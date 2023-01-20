const clickAddItem = () => {
    const name = prompt("Enter todo name");
    const description = prompt("Enter todo description");

    const todoItemNode = todoItem.content.firstElementChild.cloneNode(true);
    const itemName = todoItemNode.querySelector("[data-name]");
    const itemDescription = todoItemNode.querySelector("[data-description]");

    itemName.innerHTML = name;
    itemDescription.innerHTML = description;

    todoList.prepend(todoItemNode);
}

const todoList = document.getElementById("todo-list");
const todoItem = document.getElementById("todo-item");
const addItem = document.getElementById("add-item");

const addItemNode = addItem.content.firstElementChild.cloneNode(true);

addItemNode.addEventListener("mousedown", clickAddItem);
todoList.appendChild(addItemNode);