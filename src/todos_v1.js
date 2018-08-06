const express = require('express');
const app = express();
const morgan = require('morgan');

/*
const {readFileSync} = require("fs");
var fs = require('fs');
const {writeFile} = require("fs");
*/

const bodyParser = require('body-parser');

app.use(express.static('public'));

const PORT = process.env.PORT || 4001;
if (!process.env.IS_TEST_ENV) {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());

// let todos=[];


const todos = [
  {
    id: 1,
    todo: 'Run 1 km',
    done: false,
    date: '2018-08-11',
  },
  {
    id: 2,
    todo: 'eat protein',
    done: false,
    date: '2018-08-11',
  },
  {
    id: 3,
    todo: 'rest',
    done: false,
    date: '2018-08-11',
  }
];


let nextTodoId = 4;


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

app.get('/todos/', (req, res, next) => {
 res.send(todos);
});

app.get('/todos/:id', (req, res, next) => {
  console.log("req.todo from param ",req.todo);
  res.send(req.todo);
});

/*
 postman - POST, body+raw+JSON -> 
 {"todo": {"location":"at Frankies"}} eller
 {"todo": {"location":"at Frankies","date":"2018-07-25"} }


*/
app.post('/todos/', (req, res, next) => {
  console.log(req.body);
  const newTodo = req.body;
  newTodo.id = nextTodoId++;
  // writeToFile("graffiti.txt",newTodo);
  todos.push(newTodo);
  res.send(newTodo);
});

/*
{"todo": {"id": 1, "todo":"walk 22 miles","date":"2018-07-25"} }
*/
app.put('/todos/:id', (req, res, next) => {
  const updatedTodo = req.body;
  if (req.todo.id !== updatedTodo.id) {
    res.status(400).send('Cannot update Todo Id');
  } else {
    todos[req.todoIndex] = updatedTodo;
    res.send(todos[req.todoIndex]);
  }
});

app.delete('/todos/:id', (req, res, next) => {
  todos.splice(req.todoIndex, 1);
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

// todos = readFile("todos.json");

/*
const readFile = function(fileToRead) {
  //console.log("The file contains:", readFileSync(fileToRead, "utf8"));

  return readFileSync(fileToRead, "utf8");
} 
*/

/*
const writeToFile = function(fileToWrite,chunk) {
  let json = JSON.stringify(chunk);
  writeFile(fileToWrite, json, err => {
  if (err) console.log(`Failed to write file: ${err}`);
      else console.log("written to file.");
  });
} 
*/