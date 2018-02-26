const debug = require('debug')

const log = debug('DINA-SCHOOL:routeHandlers:ping')

const getPingResponse = () => {
  return 'pong'
}

const handlePing = (req, res) => {
  log('Got request to:', req.url)
  return res.send(getPingResponse())
}

module.exports = {
  handlePing,
  getPingResponse,
}
