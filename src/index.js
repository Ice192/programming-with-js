// const readline = require('readline');
// const { createInterface } = readline;
// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
const readline = require("readline-sync");

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
console.log("---------------------------------------------------------");

// Exercise 1
const {nama, address, telp, major } = require("./Exercise-1.js");
nama("Rais");
address("Daya", "Makassar", "South Sulawesi", "19954");
telp("0865-8464-2745");
major("Software Engineering");
console.log("---------------------------------------------------------");

//Exercise 2
const {Distance} = require ("./Exercise-2.js");
console.log("The distance the car will travel in 6 hours is", Distance(6), "miles");
console.log("The distance the car will travel in 10 hours is", Distance(10), "miles");
console.log("The distance the car will travel in 15 hours is", Distance(15), "miles");
console.log("---------------------------------------------------------");

//Exercise 3
const { Convert } = require ("./Exercise-3.js");
const convert = readline.question("Input Farenhait = ");
console.log(`${convert} F =`, Convert(convert), "C");
console.log("---------------------------------------------------------");

// Exercise 4
const {Money} = require ("./Exercise-4.js");

const principal = readline.question("Enter Initial Amount = ");
const rate = readline.question("Enter annual interest rate = ");
const numInterest = readline.question("Monthly or Yearly = ");
const year = readline.question("Enter time (yearly) = ");

console.log(" Your Money ",Money(principal, rate, numInterest, year));
console.log("---------------------------------------------------------");

//Exercise 5
const { Days } = require ("./Exercise-5.js")
const index = readline.question("Input Number 1 0f 7 = ")
Days(index)
console.log("---------------------------------------------------------")


// Exercise 6
const { Roulette } = require ("./Exercise-6.js")
for(let i = 0; i <= 36; i++ ) {
  Roulette(i)
}
console.log("---------------------------------------------------------") 

// Exercise 7
const { Charges } = require ("./Exercise-7.js")
console.log("Total charges ",Charges(5), "$")
console.log("---------------------------------------------------------") 

// Exercise 8
const { Restourant } = require("./Exercise-8.js")

const vegetarian = readline.question("Is Anyone in your party a vegetarian? (yes/no) = ")
const vegan = readline.question("Is Anyone in your party a vegan? (yes/no) = ")
const gluten = readline.question("Is Anyone in your party a gluten-free? (yes/no) = ")

console.log("Here are your restorant choices:")
console.log(Restourant(vegetarian, vegan, gluten))
console.log("---------------------------------------------------------") 







