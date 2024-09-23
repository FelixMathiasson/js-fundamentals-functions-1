// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function LowerToUpper(lower, upper) {
  const returnArr = []
  for (let i = lower; i <= upper; i++) {
    returnArr.push(i)
  }
  return returnArr
}

// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
function Exclamation(word, number) {
  word = word.toUpperCase()
  for (let i = 0; i < number; i++) {
    word += '!'
  }
  return word
}

// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after adding the additional time in minutes.
//
// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'
// TODO: write code below
function MinuteAdder(timeStamp, minutes) {
  const parts = timeStamp.split(':') // [hours, minutes]
  let newMinutes = parseInt(parts[1]) + minutes
  const newHours = Math.floor(newMinutes / 60)
  newMinutes = newMinutes % 60
  let updatedHours = (parseInt(parts[0]) + newHours) % 24
  if (newMinutes < 10) {
    newMinutes = '0' + newMinutes.toString()
  }
  if (updatedHours === 0) {
    updatedHours = '0' + updatedHours.toString()
  }
  return updatedHours.toString() + ':' + newMinutes.toString()
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: LowerToUpper, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: Exclamation, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: MinuteAdder // etc
}
