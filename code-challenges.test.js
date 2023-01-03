// ASSESSMENT 3: Coding Practical Questions with Jest

const { listenerCount } = require("process")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// PSEUDOCODE:

// input: a number larger than two
// ouput: an array with the length that it was given following the Fibonacci sequence

// process:
// create a 

// a) Create a test with expect statements for each of the variables provided.

// RED:
describe("fibSeqNums", () => {
  it("returns array of numbers of the Fibonacci sequence", () =>{
    expect(fibSeqNums(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibSeqNums(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// GREEN:

const fibSeqNums = (num) => {
  let i;
  let fib = [1, 1];
  
  for (i = 2; i <= 10; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib
}

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// PSEUDOCODE:

// input:
// ouput:

// process:

// a) Create a test with expect statements for each of the variables provided.

// RED:

// describe("objectValuesSorted", () => {
//   it("sorts value of objects into an array", () => {
//     expect(objectsValuesSorted(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
//     expect(objectValuesSorted(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
//   })
// })


const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// const objectsValuesSorted = () => {

// }

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// PSEUDOCODE:

// input:
// ouput:

// process:

// a) Create a test with expect statements for each of the variables provided.

// RED:
// describe("totalTransactions", () => {
//   it("creates an array with the accumulating sum", () => {
//     expect(totalTransactions(accountTransactions1)).toEqual([100, 83, 60, 51])
//     expect(totalTransactions(accountTransactions2)).toEqual([250, 161, 261, 165])
//     expect(totalTransactions(accountTransactions3)).toEqual([])
//   })
// })

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

// GREEN:
