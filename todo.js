'use strict';

/* TODOS ARRAY */
const TODOS = [
    {
        isDone: true,
        id: 0,
        title: "Wake up!",
    }
];

/* INIT TO WORK OBJ */
let todos = TODOS;


/* GET OBJ FROM STORAGE */
let concatTodos = localStorage.getItem('todos') ?
    JSON.parse(localStorage.getItem('todos')) : todos;

/* SET TO STORAGE */
localStorage.setItem('todos', JSON.stringify(concatTodos));


let addTodo   = document.getElementById('addTodo'), // Btn
    newTodo   = document.getElementById('newTodo'), // Input
    todosList = document.getElementById('todosList'); // List


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


/* MAKE NEW TODOS */
let makeNewTodo = todoItem => {
    let todo = document.createElement('div');

    todo.innerText = todoItem.title;
    todo.className = 'newTodo';

    let checkbox = todo.appendChild(document.createElement('input'));
    checkbox.type = 'checkbox';

    let remove = todo.appendChild(document.createElement('button'));
    remove.innerText = 'clear';

    todosList.appendChild(todo);
};


/* ADD NEW TODOS */
addTodo.addEventListener('click', function () {

    let newTodoName = newTodo.value;
    let maxId = getMaxId(concatTodos);

    let todo = {
        isDone: false,
        id: maxId,
        title: newTodoName,
    };
    concatTodos.push(todo);

    localStorage.setItem('todos', JSON.stringify(concatTodos));
    makeNewTodo(todo);
    newTodo.value = '';
});


concatTodos.forEach(todoItem => {
    makeNewTodo(todoItem);
});

