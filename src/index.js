const readline = require('readline');
const { createInterface } = readline;
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Hello world");

const { add, subtract, divide, multiply } = require("./math.js");

console.log("1 + 2 =", add(1, 2));
console.log("5 - 3 =", subtract(5, 3));
console.log("4 * 6 =", multiply(4, 6));
console.log("10 / 2 =", divide(10, 2));
console.log("---------------------------------------------------------")

const force = require("./physics.js");
console.log("Force = mass * acceleration");
console.log("Force with mass=10kg and acceleration=9.8m/s^2 =", force(10, 9.8));
console.log("---------------------------------------------------------")

// Exercise 1
const {nama, address, telp, major } = require("./Exercise-1.js")
nama("Rais");
address("Daya", "Makassar", "South Sulawesi", "19954")
telp("0865-8464-2745")
major("Software Engineering")
console.log("---------------------------------------------------------")

//Exercise 2
const {Distance} = require ("./Exercise-2.js")
console.log("The distance the car will travel in 6 hours is", Distance(6), "miles")
console.log("The distance the car will travel in 10 hours is", Distance(10), "miles")
console.log("The distance the car will travel in 15 hours is", Distance(15), "miles")
console.log("---------------------------------------------------------")

//Exercise 3
// const { Convert } = require ("./Exercise-3.js")
// rl.question('Input Farenhait = ', (c) => {
// console.log(`${c} F =`, Convert(c), "C")
// console.log("---------------------------------------------------------")
// rl.close()
//  });


// Exercise 4
// const {Money} = require ("./Exercise-4.js")

// rl.question('Enter initial amount = ', (p) => {
//   //follow-up question
//   rl.question('Enter annual interest rate = ', (r) => {
//   //follow-up question
//   rl.question('Monthly or Yearly = ', (n) => {
//   //follow-up question
//   rl.question('Enter time (yearly) = ', (t) => {
//     // execution
//     console.log(" Your Money ",Money(p, r, n, t))
//     });
//   });
// });
// })

//Exercise 5
// const { Days } = require ("./Exercise-5.js")
// rl.question('Input Number 1 0f 7 = ', (index) => {
// Days(index)
// console.log("---------------------------------------------------------")
// })

// Exercise 6
// const { Roulette } = require ("./Exercise-6.js")
// for(let i = 0; i <= 36; i++ ) {
//   Roulette(i)
// }

// Exercise 7
const { Charges } = require ("./Exercise-7.js")
console.log("Total charges ",Charges(5), "$")

// Exercise 8
const { Restourant } = require("./Exercise-8.js")
rl.question('Is Anyone in your party a vegetarian? (yes/no) = ', (vegetarian) => {
  rl.question('Is Anyone in your party a vegen? (yes/no) = ', (vegen) => {
    rl.question('Is Anyone in your party a vegen? (yes/no) = ', (gluten) => {
console.log("Here are your restorant choices:")
console.log(Restourant(vegetarian, vegen, gluten))
console.log("---------------------------------------------------------") 
rl.close()
  })
  })
})









