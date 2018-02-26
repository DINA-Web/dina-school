const debug = require('debug')

const JsonDb = require('../../JsonDb')

const log = debug('DINA-SCHOOL:server:routeHandlers:todos:getById')

module.exports = (req, res) => {
  const { id } = req.params
  log('Start get', id)

  return JsonDb.getById(id)
    .then(todo => {
      log('Done getById', todo)
      res.send(todo)
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
