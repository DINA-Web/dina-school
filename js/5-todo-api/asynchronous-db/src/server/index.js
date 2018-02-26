const express = require('express')
const bodyParser = require('body-parser')
const debug = require('debug')

const logRequest = require('../middlewares/logRequest')
const { handlePing } = require('../routeHandlers/ping')
const todoHandlers = require('../routeHandlers/todos')

const log = debug('DINA-SCHOOL:server')

const app = express()
log('Setting up express app')
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(bodyParser.json())
app.use(logRequest)

app.get('/ping', handlePing)

app.get('/todos', todoHandlers.getAll)
app.post('/todos', todoHandlers.create)

app.get('/todos/:id', todoHandlers.getById)
app.patch('/todos/:id', todoHandlers.updatePartialEntry)
app.put('/todos/:id', todoHandlers.updateCompleteEntry)
app.delete('/todos/:id', todoHandlers.del)

const port = 3000
const onConnect = () => {
  if (process.env.DEBUG) {
    log('Listening to port:', port)
  } else {
    console.log('Listening to port:', port) // eslint-disable-line no-console
  }
}

app.listen(port, onConnect)
