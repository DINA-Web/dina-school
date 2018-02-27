const debug = require('debug')

const log = debug('DINA-SCHOOL:server:middlewares:logRequest')

let requestId = 0

module.exports = (req, res, next) => {
  requestId += 1
  res.locals.id = requestId

  log(
    `${res.locals.id}: Received request ${req.method} - ${req.url} from ${
      req.ip
    }`
  )

  next()
}
