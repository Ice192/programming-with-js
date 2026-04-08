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

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  greaterThan
};
