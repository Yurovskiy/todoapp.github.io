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

renderList(DATA);

function renderList(arr) {
    document.getElementById('result').innerHTML = '';
    if  (arr.length) {
        for (let i = 0; i < arr.length; i++) {
            document.getElementById('result').innerHTML += "<li class='list'>" +
                "<h2>" + arr[i].name + "</h2>" + "<p>" + arr[i].email + "</p>" + "</li>";
        } 
    } else {
        document.getElementById('result').innerHTML += "<li class='list'>No result</li>";
    }
}

function refreshList() {
    renderList(DATA);
}

function onChangeSelect() {
    document.getElementById('search').value = '';
    refreshList();
}

function search() {
    let searchQuery = document.getElementById('search').value.toLowerCase();
    let searchType = document.getElementsByTagName('select')[0].value;
    if (searchQuery.length) {
        let searchObject = {
            [searchType]: searchQuery
        };
        let searchResult = [];
        for (let i = 0; i < DATA.length; i++) {
            for (let key of Object.keys(DATA[i])) {
                if (DATA[i][key].toLowerCase().includes(searchObject[key])) {
                    searchResult.push(DATA[i]);
                }
            }
        }
        renderList(searchResult);
    } else {
        refreshList();
    }
}



/*-----------------------------------------------------------------------------*/


// TODO Methods for:
//                  - rendering DATA and TODOS into lists of items
//                  - typing inputs (at least 2 characters)
//                  - filtering DATA by input query
//                  - change select options -> changing queryType
//                  - re-rendering filtered DATA into list

//                  - adding todo to the TODOS
//                  - simple validation for todo.title
//                  - removing item fro the list
//                  - rerendering TODOS
//                  - changing status of todo
// TODO (optional): - save copy of TODOS to LocalStorage
//                  - take TODOS from localStorage if it will be there :-)
