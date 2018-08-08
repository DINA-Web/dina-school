const express = require('express')

const app = express()
const morgan = require('morgan')
const debug = require('debug')

const { readFileSync } = require('fs')
const { writeFile } = require('fs')

const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

app.use(express.static('public'))

const PORT = process.env.PORT || 4001

if (!process.env.IS_TEST_ENV) {
  app.use(morgan('dev'))
}

app.use(bodyParser.json())
app.use(expressValidator())

const log = debug('DINA-SCHOOL:server')
const nextTodoId = 5

function completeInputValidate(req, res, next) {
  req.checkBody('todo', 'invalid todo').notEmpty()
  req.checkBody('done', 'invalid done').isBoolean()
  req.checkBody('date', 'invalid date').notEmpty()

  const errors = req.validationErrors()
  if (errors) {
    const response = { errors: [] }
    errors.forEach(err => {
      response.errors.push(err.msg)
    })

    res.statusCode = 400
    return res.json(response)
  }
  return next()
}

/*
function fetchFile(req, res, next) {
  // decorateStoredTodos, decorateStoredTodosMiddleware
  const file = readFileSync('todos.json', 'utf8')
  res.locals.todos = JSON.parse(file)
  return next()
}
*/
function readTodosFromFile() {
  const file = readFileSync('todos.json', 'utf8')
  return JSON.parse(file)
}

function decorateStoredTodosMiddleware(req, res, next) {
  res.locals.todos = readTodosFromFile()
  return next()
}

function writeToFile(chunk) {
  const json = JSON.stringify(chunk)
  writeFile('todos.json', json, err => {
    if (err) log(`Failed to write file: ${err}`)
    else log('written to file.')
  })
}

/* döp om checking till decorateStoredTodo ....
  Anton :
  istället för:
   req.todo = todos[rackIndex]
   req.todoIndex = rackIndex
   gör
   req.locals.todo = todos[rackIndex]
   req.locals.todoIndex = rackIndex 

   ändra 
  -- "res.locals.todos -> req.locals.todos" rättar till "res.locals och inte req.locals"
  gör såhär på rad 98 -> const { totoInput, todos } = res.locals 
  const { storedTodo, todos } = res.locals - i patch
  */

function checking(req, res, next) {
  const { todos } = res.locals
  const idToFind = Number(req.params.id)
  const rackIndex = todos.findIndex(todo => todo.id === idToFind)
  if (rackIndex !== -1) {
    req.todo = todos[rackIndex]
    req.todoIndex = rackIndex
    next()
  } else {
    res.status(404).send('That todo is Not Found.')
  }
  return next()
}

app.get('/todos/', decorateStoredTodosMiddleware, (req, res) => {
  const { todos } = res.locals
  res.send(todos)
})

app.get('/todos/:id', decorateStoredTodosMiddleware, checking, (req, res) => {
  res.send(req.todo)
})

/*
 postman - POST, body+raw+JSON -> 
 {
        "too": "rest for 40 hours",
        "done": false,
        "date": "2018-08-11"
 }
*/
app.post(
  '/todos/',
  decorateStoredTodosMiddleware,
  completeInputValidate,
  (req, res) => {
    const { todos } = res.locals
    log(todos)
    const newTodo = req.body
    newTodo.id = nextTodoId + 1
    todos.push(newTodo)
    writeToFile(todos)
    res.status(201).send(newTodo)
  }
)

/*
 {"id": 5,"done":false, "todo":"walk 22 miles","date":"2018-07-25"}
 const { storedTodo, todos } = res.locals
*/
app.put('/todos/:id', decorateStoredTodosMiddleware, checking, (req, res) => {
  const { todos } = res.locals
  const updatedTodo = req.body

  if (req.todo.id !== updatedTodo.id) {
    res.status(400).send('Cannot update Todo Id')
  } else {
    todos[req.todoIndex] = updatedTodo
    writeToFile(todos)
    res.status(201).send(todos[req.todoIndex])
  }
})
/*
update only one attribute at a time, for instance '{"done": true}'
*/
app.patch('/todos/:id', decorateStoredTodosMiddleware, checking, (req, res) => {
  const { todos } = res.locals // 8 aug. har denna reda denna, har - se checking ...
  const chosenTodo = todos[req.todoIndex] // 8 aug. se ovan ....

  const { body } = req // 8 aug. ändra

  if (body.todo !== undefined) {
    chosenTodo.todo = body.todo
    todos[req.todoIndex].todo = body.todo
  } else if (body.done !== undefined) {
    chosenTodo.done = body.done
    todos[req.todoIndex].done = body.done
  } else if (body.date !== undefined) {
    chosenTodo.date = body.date
    todos[req.todoIndex].todo = body.date
  }

  // Ändra en och en, som rad 134, 137,140 eller såsom på rad 144 ?
  // todos[req.todoIndex] = chosenTodo
  writeToFile(todos)
  res.status(201).send(chosenTodo) // ska hela returneras ?
})

app.delete(
  '/todos/:id',
  decorateStoredTodosMiddleware,
  checking,
  (req, res) => {
    const { todos } = res.locals
    todos.splice(req.todoIndex, 1)
    writeToFile(todos)
    res.status(204).send()
  }
)

app.listen(PORT, () => {
  log(`Server is listening on port ${PORT}`)
})
