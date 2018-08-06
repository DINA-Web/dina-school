const express = require('express');
const app = express();
const morgan = require('morgan');


const {readFileSync} = require("fs");
const {writeFile} = require("fs");


const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

app.use(express.static('public'));

const PORT = process.env.PORT || 4001;
if (!process.env.IS_TEST_ENV) {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(expressValidator());

let todos=[];
let nextTodoId = 5;


/*
obs: första argument, variablen 'id' ska överenstämma med var i andra REST-sökvägar
hanterar alltså 'put' och 'del' :  
 app.put('/todos/:id'
 app.delete('/todos/:id'
*/
app.param('id', (req, res, next, id) => {
  console.log('intercepting : id',id);

  const idToFind = Number(id);
  const rackIndex = todos.findIndex(todo => todo.id === idToFind);
  if (rackIndex !== -1) {
    req.todo = todos[rackIndex];
    req.todoIndex = rackIndex;
    next();
  } else {
    res.status(404).send('That ToDo is Not Found.');
  }
});

app.get('/todos/',fetchFile, (req, res, next) => {
 res.send(todos);
});

app.get('/todos/:id',fetchFile, (req, res, next) => {
  console.log("req.todo from param ",req.todo);
  res.send(req.todo);
});

/*
 postman - POST, body+raw+JSON -> 
 {
        "too": "rest for 40 hours",
        "done": false,
        "date": "2018-08-11"
}
*/
app.post('/todos/',validate, (req, res, next) => {
  const newTodo = req.body;
  newTodo.id = nextTodoId++;
  todos.push(newTodo);
  writeToFile('todos.json',todos);
  res.send(newTodo);
});

/*
 {"id": 5,"done":false, "todo":"walk 22 miles","date":"2018-07-25"}
*/
app.put('/todos/:id', (req, res, next) => {
  const updatedTodo = req.body;

  if (req.todo.id !== updatedTodo.id) {
    res.status(400).send('Cannot update Todo Id');
  } else {
    todos[req.todoIndex] = updatedTodo;
    writeToFile('todos.json',todos);
    res.send(todos[req.todoIndex]);
  }
});

app.delete('/todos/:id', (req, res, next) => {
  todos.splice(req.todoIndex, 1);
  writeToFile('todos.json',todos);
  res.status(204).send();

});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const getElementById = (id, elementList) => {
  return elementList.find((element) => {
    return element.id === Number(id);
  });
};

function validate(req, res, next) {

  req.checkBody('todo','invalid todo' ).notEmpty();
  req.checkBody('done', 'invalid done').notEmpty();
  req.checkBody('date', 'invalid date').notEmpty();

  var errors = req.validationErrors();
  if (errors) {
    var response = { errors: [] };
    errors.forEach(function(err) {
      response.errors.push(err.msg);
    });

    res.statusCode = 400;
    return res.json(response);
  }
  return next();
}

function fetchFile(req, res, next) {
  const todosFile='todos.json';
  let  file = readFileSync(todosFile, "utf8");
  todos = JSON.parse(file);
  return next();
}

const writeToFile = function(fileToWrite,chunk) {
  let json = JSON.stringify(chunk);
  writeFile(fileToWrite, json, err => {
  if (err) console.log(`Failed to write file: ${err}`);
      else console.log("written to file.");
  });
} 