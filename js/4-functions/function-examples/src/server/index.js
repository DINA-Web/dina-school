const fs = require('fs')
const path = require('path')
const debug = require('debug')

let log = debug('DINA-SCHOOL:function and arrow function')

// regular function syntax
function add(a, b) {
  return a + b
}
log('1 + 1 =', add(1, 1))

// arrow function
const multiply = (a, b) => {
  return a * b
}
log('2 * 2 =', multiply(2, 2))

// implicit return, no curly braces needed if returning directly in arrow function
const square = a => a * a
log('3^2 =', square(3))

log = debug('DINA-SCHOOL:this keyword and function scope')
// this refers to the global object
this.value = true
log('this.value:', this.value)

// functions declared with the function keyword have their own this
// first we declare the function, note that the code inside is not executed now
function tryThisInFunction() {
  log('1. this.value in regular function:', this.value)
  this.value = 'I am in tryThisInFunction'
  log('2. this.value in regular function:', this.value)
}

// now we call the function
tryThisInFunction()
log('this.value after tryThisInFunction:', this.value)

// let's declare an arrow function and verify that this refers to the same this
// as outside the function
const hasOuterScopeThis = () => {
  log('1. this.value in arrow function:', this.value) // should be true
  this.value = false
  log('2. this.value in arrow function:', this.value) // should be false
}

log('this.value before hasOuterScopeThis:', this.value) // should be true
hasOuterScopeThis()
log('this.value after hasOuterScopeThis:', this.value) // should be false

log = debug('DINA-SCHOOL:async functions callbacks')

const randomizer = multiplier => {
  const value = Math.random() * multiplier
  log('randomizer value', value)
}
const randomizerWithCallback = (multiplier, callback) => {
  setTimeout(() => {
    const value = Math.random() * multiplier
    callback(value)
  }, 100)
}
log('calling randomizer without callback')
randomizer(10)
log('calling randomizerWithCallback')
randomizerWithCallback(10, res => {
  const tempLog = debug('DINA-SCHOOL:async functions callbacks')
  tempLog('randomizerWithCallback res', res)
})
log('after calling randomizerWithCallback')

// readFileSync is a blocking method, the code execution will stay here until
// the file has been read
log('Start readFileSync')
const data = fs.readFileSync(path.resolve(__dirname, 'input.txt'))
log('readFileSync result', data.toString())

// readFile is asynchronous meaning code execution will continue in this file
// and when that "event loop" is done and the file has been read, the callback
// function will be called
log('Start readFile (async)')
fs.readFile(path.resolve(__dirname, 'input.txt'), (err, doc) => {
  if (err) return log(err)
  // this log will come after the log that comes after the fs.readFile() call
  // need to assign this text back, because by the time we get here, log has
  // been reassigned to another value
  const tempLog = debug('DINA-SCHOOL:async functions callbacks')
  tempLog('async readFile result', doc.toString())
})
log('Continuing here before async readFile callback called')

log = debug('DINA-SCHOOL:async functions promises')

// Promises are a newer way to accomplish what callbacks do, but with some
// benefits, e.g. more readable code and chaining
// Here we have a function that returns a promise that will either resolve after
// 1 second or reject after 2 seconds, depending on the input argument
const makePromise = succeed => {
  return new Promise((resolve, reject) => {
    return succeed
      ? setTimeout(() => resolve('success'), 1000)
      : setTimeout(() => reject(new Error('Some error message')), 2000)
  })
}

// The successPromise variable stores the promise. When it is resolved it will
// invoke the first .then() and when that returns it will invoke the next .then()
const successPromise = makePromise(true)
  .then(res => {
    log('success promise resolved to', res)
    return `***${res}***`
  })
  .then(patchedRes => {
    log('patchedRes in chained then', patchedRes)
    return patchedRes
  })

// the event loop continues here and the promise is pending at this point
log('success promise value is pending', successPromise)
setTimeout(() => {
  log('success promise value is still pending', successPromise)
}, 500)
setTimeout(() => {
  log('success promise been fulfilled', successPromise)
}, 1500)

const errorPromise = makePromise(false).catch(err => {
  log('error promise rejected', err.message)
})

log('error promise value is pending', errorPromise)
setTimeout(() => {
  log('error promise has been fulfilled', errorPromise)
}, 2500)
