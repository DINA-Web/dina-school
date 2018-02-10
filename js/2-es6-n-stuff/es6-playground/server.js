const express = require('express')
const app = express()

const routeHandler = (req, res) => {
  console.log('Got request to:', req.url)
  return res.send('pong')
}

app.get('/ping', routeHandler)

const onConnect = () => {
  console.log('Im listening to port: ', 3000)
}

app.listen(3000, onConnect)