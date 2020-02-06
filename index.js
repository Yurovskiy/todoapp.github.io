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


const TODOS = [
    {
        isDone: true,
        title: "Wake up!",
        id: 1
    }
];

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