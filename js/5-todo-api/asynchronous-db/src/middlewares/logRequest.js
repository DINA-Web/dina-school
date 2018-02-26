const debug = require('debug')

const log = debug('DINA-SCHOOL:server:middlewares:logRequest')

let requestId = 0

module.exports = (req, res, next) => {
  res.locals.id = requestId
  requestId += 1

  log(
    `${res.locals.id}: Received request ${req.method} - ${req.url} from ${
      req.ip
    }`
  )

  next()
}
