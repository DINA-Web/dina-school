const create = require('./create')
const del = require('./del')
const getAll = require('./getAll')
const getById = require('./getById')
const updateCompleteEntry = require('./updateCompleteEntry')
const updatePartialEntry = require('./updatePartialEntry')

module.exports = {
  create,
  del,
  getAll,
  getById,
  updatePartialEntry,
  updateCompleteEntry,
}
