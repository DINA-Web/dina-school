const debug = require('debug')

const dbOperations = require('../../mockJsonDb')

const log = debug('DINA-SCHOOL:server:routeHandlers:todos:getAll')

module.exports = (req, res) => {
  log('Start get all')
  return dbOperations
    .getAll()
    .then(todos => {
      log('Done getAll', todos)
      res.send(todos)
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
