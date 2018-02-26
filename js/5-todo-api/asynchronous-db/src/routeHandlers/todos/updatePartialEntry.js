const debug = require('debug')

const JsonDb = require('../../JsonDb')

const log = debug('DINA-SCHOOL:server:routeHandlers:todos:updatePartialEntry')

module.exports = (req, res) => {
  const { id } = req.params
  log('Start partial update', id)

  const input = {
    ...req.body,
    id,
  }

  return JsonDb.getById(id)
    .then(todo => {
      log('Fetched todo', todo)
      const patchedTodo = {
        ...todo,
        ...input,
      }
      log('Patched todo', patchedTodo)
      return JsonDb.set(id, patchedTodo).then(updatedTodo => {
        log('Done update', updatedTodo)
        res.send(updatedTodo)
      })
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
