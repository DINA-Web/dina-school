const debug = require('debug')

const log = debug('DINA-SCHOOL:server:mockJsonDb')

const jsonData = {}
let incrementingId = 0

/* eslint-disable prefer-promise-reject-errors, consistent-return */
const getIncrementingId = () => {
  incrementingId += 1
  return incrementingId
}

const set = (id = getIncrementingId(), input) => {
  return new Promise((resolve, reject) => {
    if (input === undefined) {
      return reject({ message: 'Missing input', status: 400 })
    }

    const value = {
      ...input,
      id,
    }

    if (jsonData[id]) {
      log('Updating entry id', id)
    } else {
      log('Creating entry id', id)
    }

    setTimeout(() => {
      jsonData[id] = value
      return resolve(value)
    }, 700)
  })
}

const getAll = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(jsonData)
    }, 1000)
  })
}

const getById = id => {
  return new Promise((resolve, reject) => {
    if (!id) {
      return reject({ message: 'Missing id', status: 400 })
    }

    if (jsonData[id] === undefined) {
      return reject({
        message: `Resource with id ${id} not found`,
        status: 404,
      })
    }

    setTimeout(() => {
      return resolve(jsonData[id])
    }, 500)
  })
}

const del = id => {
  return new Promise((resolve, reject) => {
    if (!id) {
      return reject({ message: 'Missing id', status: 400 })
    }

    if (jsonData[id] === undefined) {
      return reject({
        message: `Resource with id ${id} not found`,
        status: 404,
      })
    }

    setTimeout(() => {
      const deletedEntry = jsonData[id]
      delete jsonData[id]

      return resolve(deletedEntry)
    }, 700)
  })
}

module.exports = {
  del,
  getAll,
  getById,
  set,
}
