const readline = require("readline-sync");

function firstLoop (number) {
    let product = number * 10;
    while (product < 100) {
        console.log("Product ", product);
        product++;
    }
}

function secondLoop (isAgree) {
while(isAgree == "yes") {
  let num1 = readline.question("Masukkan Angka pertama: ");
  let num2 = readline.question("Masukkan Angka kedua: ");
  const sum = num1 + num2;
  console.log(`${num1} + ${num2} = ${sum}`);

  isAgree = readline.question("Apakah mau lanjut? (yes) ")
} 
    console.log("Thank You");
}

function thirdLoop () {
    for (let num = 0; num <= 1000;){
        console.log(num);
        num += 10;
    }
}

function fourthLoop () {
    let result = []
    for (let i = 1; i <= 10; i++){
        let num = readline.question("Masukkan Angka: ")
        result.push(num)
    }
    console.log(result)
}

module.exports = {
    firstLoop,
    secondLoop,
    thirdLoop,
    fourthLoop
}