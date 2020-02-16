'use strict';

const DATA = [
    {
        name: 'Petro',
        email: "airborne@gmail.com"
    }, {
        name: 'Ivan',
        email: "trololo@gmail.com"
    }, {
        name: 'Igor',
        email: "klubnicka@gmail.com"
    }, {
        name: 'Anton',
        email: "anton1113@yahooey.com"
    }, {
        name: 'Pavlo',
        email: "poilkj@i.com"
    }, {
        name: 'Volo',
        email: "iiuummn@ru.com"
    },{
        name: 'Ira',
        email: "piuy@gmail.com"
    }, {
        name: 'Eduard',
        email: "nghtyy@gmail.com"
    }
];

renderList(DATA); // RENDER LIST

function renderList(arr) {
    document.getElementById('result').innerHTML = ''; // INIT PLACE FOR DATA DISPLAY
    if  (arr.length) {
        for (let i = 0; i < arr.length; i++) {
            document.getElementById('result').innerHTML += "<li class='list'>" +
                "<h2>" + arr[i].name + "</h2>" + "<p>" + arr[i].email + "</p>" + "</li>";
        } // BEGIN CYCLE FOR MASSIVE AND DISPLAY DATA CONTENT
    } else {
        document.getElementById('result').innerHTML += "<li class='list'>No result</li>";
    }   // RETURN 'NO RESULT' IF NOT FIND DATA
}

function refreshList() {
    renderList(DATA); // INIT "REFRESH LIST" FUNCTION
}

function onChangeSelect() {
    document.getElementById('search').value = ''; // CLEAR INPUT VALUE
    refreshList(); // REFRESH TO NATIVE LIST DATA
}

function search() {
    let searchQuery = document.getElementById('search').value.toLowerCase(); // INIT SEARCH QUERY VALUE
    let searchType = document.getElementsByTagName('select')[0].value; // INIT SEARCH TYPE VALUE
    if (searchQuery.length) {
        let searchObject = {
            [searchType]: searchQuery  // INIT SEARCH OBJECT
        }
        let searchResult = []; // INIT SEARCH RESULT
        for (let i = 0; i < DATA.length; i++) {
            for (let key of Object.keys(DATA[i])) {
                if (DATA[i][key].toLowerCase().includes(searchObject[key])) {
                    searchResult.push(DATA[i]);
                }
            } // CYCLE FOR SEARCH RESULT
        }
        renderList(searchResult); //DISPLAY SEARCH RESULT
    } else {
        refreshList(); // REFRESH TO NATIVE LIST DATA
    }
};






const TODOS = [
    {
        isDone: true,
        title: "Wake up!",
        id: 1
    }
];

let todos = TODOS;

function getMaxId(arr) {
    let maxId = 0;
    for (let todo of arr) {
        if (todo.id >= maxId){
            maxId = todo.id + 1;
        }
    }
    return maxId;
};

// document.getElementById('addTodoBtn').addEventListener('click', addTodo);
function addTodo() {
    let newTodoName = document.getElementById('addTodo').value;
    let maxId = getMaxId(todos);

    let todosTitle = document.createElement('h2');
        todosTitle.setAttribute('id', 'todoTitle');
    let todosCheckBox = document.createElement("INPUT");
        todosCheckBox.setAttribute('type', 'checkbox');
    let removeTodos = document.createElement('INPUT');
        removeTodos.setAttribute('type', 'button');

    document.getElementById('todos').appendChild(todosTitle);
        todosTitle.innerHTML = newTodoName;
    document.getElementById('todos').appendChild(todosCheckBox);
    document.getElementById('todos').appendChild(removeTodos);

    document.getElementById("todos").innerHTML;
    // document.getElementById("todos").appendChild(para);


    // let elmnt = document.getElementById("todos");
    // let cln = elmnt.cloneNode(true);
    // document.getElementById('section2').appendChild(cln);
    // document.getElementById('todoTitle').innerHTML = newTodoName;


    // document.getElementById('todos').innerHTML +=
    //     "<ul>" + "<li class='list'>" + "<h2>" + newTodoName + "</h2>" +
    //     "<input id='change' type='checkbox' onchange='isDoneChange()'>" +
    //     "<input type='button' class='remove' value='remove' onclick='removeTodo(id)'>" +
    //     "</li>" + "</ul>";

    todos.push({
        isDone: false,
        id: maxId,
        title: newTodoName
    });

    console.log(todos);
//    RENDER LIST
}

// function isDoneChange() {
//     let checkBox = document.getElementById("change");
//     let text = document.getElementById("todoTitle");
//         if (checkBox.checked == true){
//             text.style.textDecoration = "line-through";
//         } else {
//             text.style.textDecoration = "none";
//         }
// }

function removeTodo(id) {
    let articleDiv = document.getElementById("section2");
    let removableNode = document.getElementById("todos");
    articleDiv.removeChild(removableNode);
    return todos;
}



// TODO Methods for:
//                  - rendering DATA and TODOS into lists of items
//                  - typing inputs (at least 2 characters)
//                  - filtering DATA by input query
//                  - change select options -> changing queryType
//                  - rerendering filtered DATA into list

//                  - adding todo to the TODOS
//                  - simple validation for todo.title
//                  - removing item fro the list
//                  - rerendering TODOS
//                  - changing status of todo
// TODO (optional): - save copy of TODOS to LocalStorage
//                  - take TODOS from localStorage if it will be there :-)
