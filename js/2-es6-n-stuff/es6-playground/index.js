// before es6 all variables where declared with the keyword var like
var a = 1

console.log('I am a variable declared with var keyword: ', a)

// In es6 instead we use const and let
const b = 2

let c = 3
c = 4
console.log('I am a variable declared with const keyword: ', b)
console.log('I am a variable declared with let keyword: ', c)

/*
const is the most common way to declare variables and will throw an error 
if you try to override the same variable ex:

const b = 3
b = 3 // This will throw an error

However this is fine
let b = 4
b = 4 // This will not throw an error

*/


/*
Below follow a quick overview of the different types

*/

const number = 2 // number
const string = 'Im a string' // string

const trueBooelan = true
const falseBooelan = true

const nullValue = null
const notDefined = undefined
function firstFunction() {
  console.log('I am a function declared using the function keyword')
}

const secondFunction = () => {
  console.log('Im a function declared using the wierd fat arrow syntax')
  console.log('this keyword works a bit different for me but lets not care about that now')
}


const arr = [1, 2, 3, 4] // Array with numbers
const obj = { // Sample object
  key: 22,
  otherKey: 33,
}

/*
Below follow a quick overview of some of the different operators
see https://www.w3schools.com/js/js_operators.asp
for more details
*/

// Arithmetic
const additionResult = 1 + 2
console.log('additionResult', additionResult)

const suptraction = 2 - 1
console.log('suptraction', suptraction)

const multiplication = 2*2
console.log('multiplication', multiplication)

// Comparison
// equal to

1 == 1 // true
1 == '1' // true - dont care about types
0 == false // true - everything that is falsy
console.log(1 == 2) // Not this though

// strict equal to
// In most cases this is preffered

1 === 1 // true
1 === '1' // false
0 === false // false

// not equal
// works like == but check for not equal

1 != '1' // false - Sinse these are equal with ==


// strict not equal
// works the same was as === but check for not equal

1 !== '1' // true
