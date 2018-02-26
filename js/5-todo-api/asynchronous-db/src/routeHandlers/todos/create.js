const debug = require('debug')
const JsonDb = require('../../JsonDb')

const log = debug('DINA-SCHOOL:server:routeHandlers:todos:create')

module.exports = (req, res) => {
  log('Start create', req.body)
  const input = {
    ...req.body,
    done: false,
  }

  return JsonDb.set(undefined, input)
    .then(createdTodo => {
      log('Done create', createdTodo)
      res.send(createdTodo)
    })
    .catch(({ status, message }) => {
      log(
        `ERROR: Request id ${
          res.locals.id
        } error with status ${status}: ${message}`
      )
      res.status(status).send(message)
    })
}
