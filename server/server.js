const express = require('express');
var app = express();

app.get('/', (req, res) => {
    //res.status(404).res.send('Hello world!');
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    })
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Sam',
        age: 25
    }, {
        name: 'Faby',
        age: 25
    }, {
        name: 'Andrew',
        age: 25
    }, {
        name: 'Michael Jordan',
        age: 60
    }]);
})

//Get route /users
//give users name prop and age prop

app.listen(3000);
module.exports.app = app;
