const clickCloseButton = (event) => {
    if (!confirm("Are you sure you want to delete item?")) return;

    const id = event.target.closest("[data-id]").dataset.id;
    const itemIndex = todoItems.findIndex(todoItemElement => todoItemElement.id === id);

    todoItems.splice(itemIndex, 1);

    drawCards();
}

const clickEditButton = (event) => {
    const id = event.target.closest("[data-id]").dataset.id;
    const itemIndex = todoItems.findIndex(todoItemElement => todoItemElement.id === id);

    const name = prompt("Enter new name");
    const description = prompt("Enter new description");

    todoItems[itemIndex].name = name;
    todoItems[itemIndex].description = description;

    drawCards();
}

const drawCards = () => {
    todoList.innerHTML = "";

    todoItems.forEach(todoItemElement => {
        const todoItemNode = todoItem.content.firstElementChild.cloneNode(true);
        const itemName = todoItemNode.querySelector("[data-name]");
        const itemDescription = todoItemNode.querySelector("[data-description]");
    
        todoItemNode.dataset.id = todoItemElement.id;
        itemName.innerHTML = todoItemElement.name;
        itemDescription.innerHTML = todoItemElement.description;
    
        const closeIcon = todoItemNode.querySelector("[data-close-icon]");
        const editIcon = todoItemNode.querySelector("[data-edit-icon]");
    
        closeIcon.addEventListener("mousedown", clickCloseButton);
        editIcon.addEventListener("mousedown", clickEditButton);
    
        todoList.prepend(todoItemNode);
    });

    const addItemNode = addItem.content.firstElementChild.cloneNode(true);

    addItemNode.addEventListener("mousedown", clickAddItem);
    todoList.appendChild(addItemNode);
}

const clickAddItem = () => {
    const name = prompt("Enter todo name");
    const description = prompt("Enter todo description");

    const todoItemDTO = {
        id: Date.now().toString(),
        name,
        description
    }

    todoItems.push(todoItemDTO);

    drawCards();
}

const todoItems = [];

const todoList = document.getElementById("todo-list");
const todoItem = document.getElementById("todo-item");
const addItem = document.getElementById("add-item");

drawCards();