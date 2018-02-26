const express = require('express')
const debug = require('debug')

const { handlePing } = require('../routeHandlers/ping')

const log = debug('DINA-SCHOOL:server')

const app = express()
log('Setting up express app')

app.get('/ping', handlePing)

const port = 3000
const onConnect = () => {
  console.log('Listening to port:', port) // eslint-disable-line no-console
}

app.listen(port, onConnect)
