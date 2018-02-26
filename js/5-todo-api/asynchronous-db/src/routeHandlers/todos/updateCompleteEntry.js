const debug = require('debug')

const JsonDb = require('../../JsonDb')

const log = debug('DINA-SCHOOL:server:routeHandlers:todos:updateCompleteEntry')

module.exports = (req, res) => {
  const { id } = req.params
  log('Start update', id)

  const input = {
    ...req.body,
    id,
  }

  return JsonDb.set(id, input)
    .then(updatedTodo => {
      log('Done update', updatedTodo)
      res.send(updatedTodo)
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
