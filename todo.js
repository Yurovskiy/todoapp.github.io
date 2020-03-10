'use strict';

/* TODOS ARRAY */
const TODOS = [
    {
        isDone: true,
        id: 0,
        title: "Wake up!",
    }
];

/* INIT TO WORK OBJ & GET OBJ FROM STORAGE */
let todos = TODOS,
    concatTodos = localStorage.getItem('todos') ?
        JSON.parse(localStorage.getItem('todos')) : todos;

let addTodo = document.getElementById('addTodo'), // Btn
    newTodoTitle = document.getElementById('newTodo'), // Input
    todosList = document.getElementById('todosList'); // List


/* SET TO STORAGE */
setStorage(concatTodos, true);

renderListTodos(concatTodos);

function renderListTodos(arr) {
    todosList.innerHTML = '';
    arr.forEach(todoItem => {
        createNewTodo(todoItem);
    });
}

/* CLEAR ALL */
document.getElementById('clear').addEventListener('click', function () {
    concatTodos = [];
    localStorage.clear();
    renderListTodos(concatTodos);
});

/* GET MAX ID FOR TODOS */
function getMaxId(arr) {
    let maxId = 0;
    for (let todo of arr) {
        if (todo.id >= maxId) {
            maxId = todo.id + 1;
        }
    }
    return maxId;
}

/* CHECK DONE */
function isDone(el) {
    let checkbox = el.target;
    concatTodos.forEach(todoItem => {
        if (checkbox.dataset.id === JSON.stringify(todoItem.id)) {
            todoItem.isDone = !todoItem.isDone;
            if (!todoItem.isDone) {
                removeItem(todoItem);
                console.log(todoItem);
            }
        }
    });
    setStorage(concatTodos, true);
}

/* SET TO || RESET STORAGE */
function setStorage(arr, reset) {
    if (reset) {
        localStorage.removeItem('todos');
    }
    localStorage.setItem('todos', JSON.stringify(arr.filter(el => el.isDone)));
}

/* CREATE NEW TODOS */
function createNewTodo(todoItem) {
    let todo = document.createElement('div');
    todo.innerText = todoItem.title;
    todo.isDone = todoItem.isDone;
    todo.dataset.id = todoItem.id;
    todo.className = 'newTodo';

    let checkbox = todo.appendChild(document.createElement('input'));
    checkbox.checked = todoItem.isDone;
    checkbox.dataset.id = todoItem.id;
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.addEventListener('change', isDone);

    let remove = todo.appendChild(document.createElement('button'));
    remove.innerText = 'remove';
    remove.dataset.id = todoItem.id;
    remove.addEventListener('click', removeItem);

    todosList.appendChild(todo);
}


/* REMOVE ITEM */
function removeItem(el) {
    concatTodos = concatTodos.filter((todoItem) => {
        if (el.target.dataset.id !== JSON.stringify(todoItem.id)) {
            return todoItem
        }
    });
    renderListTodos(concatTodos);
    setStorage(concatTodos, true);
}


/* ADD NEW TODOS */
addTodo.addEventListener('click', function () {

    let newTodoName = newTodoTitle.value;
    let maxId = getMaxId(concatTodos);

    if (newTodoTitle.value === '') {
        return false;
    }

    let todo = {
        isDone: false,
        id: maxId,
        title: newTodoName,
    };
    concatTodos.push(todo);
    createNewTodo(todo);
    newTodoTitle.value = '';
});
