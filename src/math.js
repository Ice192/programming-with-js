function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

function greaterThan (a, b) {
  if (a > b) {
    return a
  } else if (a < b) {
    return b
  } else {
    console.log("Equal or Invalid")
  }
}

function oddEven () {
  let odd = 0
  let evn = 0
  for (let i = 0; i < 100; i++){
    const num = Math.floor(Math.random() * 100) + 1
    if (num % 2 === 0) {
      console.log(`${num} bilangan genap`)
      evn++
    } else {
      console.log(`${num} bilangan ganjil`)
      odd++
    }

  }
  return {odd, evn}
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  greaterThan,
  oddEven
};
