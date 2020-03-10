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
let todos       = TODOS,
    concatTodos = localStorage.getItem('todos') ?
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


/* CHECK STATUS */
function checkStat() {
    let checkbox = document.querySelectorAll('.checkbox');

    let newArr = [];

    for (let check of checkbox) {
        if (check.checked === true) {
            concatTodos.filter(function (todo) {
                todo.isDone = true;
                newArr.push(todo.isDone);
                console.log(todo.isDone);
                localStorage.setItem('newArr', JSON.stringify(newArr));
            });
        } else {
            concatTodos.filter(function (todo) {
                todo.isDone = false;
                newArr.push(todo.isDone);
                console.log(todo.isDone);
                localStorage.setItem('newArr', JSON.stringify(newArr));
            });
        }

    }

    newArr += localStorage.setItem('todos', JSON.stringify(concatTodos));



    // concatTodos.filter(function (todo) {
    //     console.log(todo);
    //     for (let check of checkbox) {
    //         todo.isDone = check.checked === true;
    //     }
    //     console.log(todo.isDone);
    // });

    return newArr;
}


/* MAKE NEW TODOS */
let makeNewTodo = todoItem => {
    let todo = document.createElement('div');
        todo.innerText = todoItem.title;
        todo.className = 'newTodo';
        todo.id = todoItem.id;

    let checkbox = todo.appendChild(document.createElement('input'));
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.id = todoItem.id;

    checkbox.addEventListener('change', checkStat);
    // if (localStorage.getItem('checkbox') === 'true') {
    //     checkbox.setAttribute('checked', 'checked');
    // }

    let remove = todo.appendChild(document.createElement('button'));
        remove.innerText = 'clear';
    remove.addEventListener('click', removeItem);

    todosList.appendChild(todo);
};


/* REMOVE ITEM */
function removeItem() {
    // console.log(this.parentElement);
    // let id = this.parentElement.id;
    // concatTodos.splice(id, 1);
    // localStorage.setItem('todos', JSON.stringify(concatTodos));
}


/* ADD NEW TODOS */
addTodo.addEventListener('click', function () {

    let newTodoName = newTodo.value;
    let maxId = getMaxId(concatTodos);

    if (newTodo.value === '') {
        return false;
    } // ease validation

    let todo = {
        isDone: false,
        id: maxId,
        title: newTodoName,
    };
    concatTodos.push(todo);
    makeNewTodo(todo);
    newTodo.value = '';

});


concatTodos.forEach(todoItem => {
    makeNewTodo(todoItem);
});

document.getElementById('clear')
    .addEventListener('click', function () {
       localStorage.clear();
    });