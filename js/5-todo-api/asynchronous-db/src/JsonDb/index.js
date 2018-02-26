const debug = require('debug')

const log = debug('DINA-SCHOOL:server:JsonDb')

/* eslint-disable prefer-promise-reject-errors, consistent-return */

class JsonDb {
  constructor() {
    this.db = {}
    this.incrementingId = 0

    this.del = this.del.bind(this)
    this.getAll = this.getAll.bind(this)
    this.getById = this.getById.bind(this)
    this.getIncrementingId = this.getIncrementingId.bind(this)
    this.set = this.set.bind(this)
  }

  del(id) {
    return new Promise((resolve, reject) => {
      if (!id) {
        return reject({ message: 'Missing id', status: 400 })
      }

      if (this.db[id] === undefined) {
        return reject({
          message: `Resource with id ${id} not found`,
          status: 404,
        })
      }

      setTimeout(() => {
        const deletedEntry = this.db[id]
        delete this.db[id]

        return resolve(deletedEntry)
      }, 700)
    })
  }

  getAll() {
    return new Promise(resolve => {
      setTimeout(() => {
        return resolve(this.db)
      }, 1000)
    })
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      if (!id) {
        return reject({ message: 'Missing id', status: 400 })
      }

      if (this.db[id] === undefined) {
        return reject({
          message: `Resource with id ${id} not found`,
          status: 404,
        })
      }

      setTimeout(() => {
        return resolve(this.db[id])
      }, 500)
    })
  }

  getIncrementingId() {
    this.incrementingId += 1
    return this.incrementingId
  }

  set(id = this.getIncrementingId(), input) {
    return new Promise((resolve, reject) => {
      if (input === undefined) {
        return reject({ message: 'Missing input', status: 400 })
      }

      const value = {
        ...input,
        id,
      }

      if (this.db[id]) {
        log('Updating entry id', id)
      } else {
        log('Creating entry id', id)
      }

      setTimeout(() => {
        this.db[id] = value
        return resolve(value)
      }, 700)
    })
  }
}

module.exports = new JsonDb()
