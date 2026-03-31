console.log("Hello world");

const { add, subtract, divide, multiply } = require("./math.js");

console.log("1 + 2 =", add(1, 2));
console.log("5 - 3 =", subtract(5, 3));
console.log("4 * 6 =", multiply(4, 6));
console.log("10 / 2 =", divide(10, 2));

const force = require("./physics.js");
console.log("Force = mass * acceleration");
console.log("Force with mass=10kg and acceleration=9.8m/s^2 =", force(10, 9.8));
