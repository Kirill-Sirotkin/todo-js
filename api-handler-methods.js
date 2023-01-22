const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk2OGU2ZDBiLWFlYWEtNGQ5My1hMmY4LWMzNTViOGJjZTI3MSIsIm5iZiI6MTY3NDMyOTMyNCwiZXhwIjoxNjc0NDE1NzI0LCJpYXQiOjE2NzQzMjkzMjR9.bjKMY4KbgqMG8GtK-ue--W2d1TL0cDrUY-TfG3cgiMA';

export const getToDosWithApi = async (todoItems) => {
    const httpString = `http://localhost:5019/api/v1/todos`;

    const responseResult = await fetch(httpString, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    });
    
    todoItems.splice(0, todoItems.length);
    todoItems.push(...convertBackendModel(await responseResult.json()));
}

export const postToDoWithApi = async (name, description) => {
    const httpString = `http://localhost:5019/api/v1/todos`;

    const responseResult = await fetch(httpString, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            _name: name,
            _description: description,
            _status: 0
        }) 
    });

    return await responseResult.json();
}

export const putToDoWithApi = async (id, newName, newDescription, status) => {
    const httpString = `http://localhost:5019/api/v1/todos/${id}`;

    await fetch(httpString, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            _name: newName,
            _description: newDescription,
            _status: status
        }) 
    });
}

export const deleteToDoWithApi = async (id) => {
    const httpString = `http://localhost:5019/api/v1/todos/${id}`;

    await fetch(httpString, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    });
}

const convertBackendModel = (array) => {
    const newModelArray = array.map(element => {
        const newElement = {
            id: element.id, 
            name: element._name,
            description: element._description,
            status: element._status
        }
        return newElement;
    });
    return newModelArray;
}