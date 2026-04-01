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

const {nama, address, telp, major } = require("./Exercise-1.js")
nama("Rais");
address("Daya", "Makassar", "South Sulawesi", "19954")
telp("0865-8464-2745")
major("Software Engineering")
console.log("---------------------------------------------------------")

const {Distance} = require ("./Exercise-2.js")
console.log("The distance the car will travel in 6 hours is", Distance(6), "miles")
console.log("The distance the car will travel in 10 hours is", Distance(10), "miles")
console.log("The distance the car will travel in 15 hours is", Distance(15), "miles")
console.log("---------------------------------------------------------")

const { Convert } = require ("./Exercise-3.js")
console.log("10 F =", Convert(10), "C")