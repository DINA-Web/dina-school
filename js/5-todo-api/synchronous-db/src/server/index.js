const express = require('express')
const bodyParser = require('body-parser')
const debug = require('debug')

const { handlePing } = require('../routeHandlers/ping')

const log = debug('DINA-SCHOOL:server')

const fakeDb = {}
let mockTodoId = 1
let requestId = 1

const app = express()
log('Setting up express app')
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.locals.id = requestId
  requestId += 1

  log(
    `${res.locals.id}: Received request ${req.method} - ${req.url} from ${
      req.ip
    }`
  )
  next()
})

app.get('/ping', handlePing)

app.post('/todos', (req, res) => {
  log('Creating todo', req.body)
  const newTodo = {
    ...req.body,
    done: false,
    id: mockTodoId,
  }

  fakeDb[mockTodoId] = newTodo
  mockTodoId += 1

  log('POST result', newTodo)
  res.send(newTodo)
})

app.get('/todos', (req, res) => {
  log('Getting all todos', fakeDb)
  res.send(fakeDb)
})

app.get('/todos/:id', (req, res) => {
  const { id } = req.params
  log('Attempt to fetch todo with id', id)

  if (!fakeDb[id]) {
    const errorMessage = `Request id ${
      res.locals.id
    } failed: Todo with id ${id} does not exist.`

    log(errorMessage)
    return res.status(404).send(errorMessage)
  }

  log('Returning todo', fakeDb[id])
  return res.send(fakeDb[id])
})

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params
  log('Attempt to delete todo with id', id)

  if (!fakeDb[id]) {
    return res
      .status(404)
      .send(
        `Request id ${res.locals.id} failed: Todo with id ${id} does not exist.`
      )
  }

  const deletedTodo = fakeDb[id]
  delete fakeDb[id]
  log('fakeDb', fakeDb)
  log('Returning todo', deletedTodo)
  return res.send(deletedTodo)
})

app.patch('/todos/:id', (req, res) => {
  const { id } = req.params
  log('Updating todo', id)

  const updatedTodo = {
    ...fakeDb[id],
    ...req.body,
  }

  fakeDb[id] = updatedTodo

  log('PATCH result', updatedTodo)
  res.send(updatedTodo)
})

app.put('/todos/:id', (req, res) => {
  const { id } = req.params
  log('Updating todo', id)

  const updatedTodo = {
    ...req.body,
    id,
  }

  fakeDb[id] = updatedTodo

  log('PUT result', updatedTodo)
  res.send(updatedTodo)
})

const port = 3000
const onConnect = () => {
  console.log('Listening to port:', port) // eslint-disable-line no-console
}

app.listen(port, onConnect)
