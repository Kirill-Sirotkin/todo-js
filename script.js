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

    const name = prompt("Enter new name", todoItems[itemIndex].name);
    const description = prompt("Enter new description", todoItems[itemIndex].description);

    if (!name) return;

    todoItems[itemIndex].name = name;
    todoItems[itemIndex].description = description;

    drawCards();
}

const clickStatusButton = (event) => {
    const id = event.target.closest("[data-id]").dataset.id;
    const itemIndex = todoItems.findIndex(todoItemElement => todoItemElement.id === id);

    const status = new StatusHelper(todoItems[itemIndex].status);
    todoItems[itemIndex].status = status.iterateStatus();
    
    drawCards();
}

const drawCards = () => {
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
    
        const closeIcon = todoItemNode.querySelector("[data-close-icon]");
        const editIcon = todoItemNode.querySelector("[data-edit-icon]");
    
        closeIcon.addEventListener("mousedown", clickCloseButton);
        editIcon.addEventListener("mousedown", clickEditButton);
        statusButton.addEventListener("mousedown", clickStatusButton);
    
        todoList.prepend(todoItemNode);
    });

    const addItemNode = addItem.content.firstElementChild.cloneNode(true);

    addItemNode.addEventListener("mousedown", clickAddItem);
    todoList.appendChild(addItemNode);
}

const clickAddItem = () => {
    const name = prompt("Enter todo name", "ToDo name");
    const description = prompt("Enter todo description");

    if (!name) return;

    const todoItemDTO = {
        id: Date.now().toString(),
        name,
        description,
        status: 0
    }

    todoItems.push(todoItemDTO);

    drawCards();
}

const todoItems = [];

const todoList = document.getElementById("todo-list");
const todoItem = document.getElementById("todo-item");
const addItem = document.getElementById("add-item");

drawCards();

class StatusHelper {
    #statusMap = new Map([
        [0, {text: "Not started", cssClass: "status-not-started"}],
        [1, {text: "In progress", cssClass: "status-in-progress"}],
        [2, {text: "Completed", cssClass: "status-completed"}]]);
    #status;
    
    constructor (status) {
        this.#status = status;
    }

    iterateStatus () {
        const mapLength = this.#statusMap.size;

        const newStatus = this.#status + 1;

        if (newStatus >= mapLength) {
            this.#status = 0;
            return this.#status;
        }
        
        this.#status = newStatus;
        return this.#status;
    }

    getCssClass () {
        return this.#statusMap.get(this.#status).cssClass;
    }

    getStatusText () {
        return this.#statusMap.get(this.#status).text;
    }
}