const debug = require('debug')

const JsonDb = require('../../JsonDb')

const log = debug('DINA-SCHOOL:server:routeHandlers:todos:del')

module.exports = (req, res) => {
  const { id } = req.params
  log('Start remove', id)

  return JsonDb.del(id)
    .then(todo => {
      log('Done del', todo)
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
