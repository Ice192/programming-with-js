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
  const sum = Number(num1) + Number(num2);
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

function fifthLoop () {
    let i, j;
    let result = [];
    for (i = 1; i <= 30;) {
        for (j = 30; j > 0; j--){
            const hasil = i/j;
            result.push(hasil);
            console.log(`${i}/${j}`);
            i++;
        }
    }
    let total = 0
    result.forEach(x => {
        total += x;
    })

    return total
}

function sixth(x) {
    x += 1
    x *= 2
    x /= 10
    x -= 100
    console.log(`jumlah menggunakan augmented operation adalah ${x}`)
}

function seventhLoop(){
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 15; j++) {
        process.stdout.write(`# `)
    }
    console.log()
}
}

function validationPrompt () {
    let valid = readline.question("Masukkan Angka ")

    if (valid != NaN || valid == -0) {
        console.log(`this ${valid} is valid input`)
    } else {
        console.log(`Invalid Input`)
    }
} // Belum mendapatkan jawaban bagaimana kalau user menekan string (yang harusnya invalid tapi malah valid)

function secondValidation () {
    let valid = readline.question("Masukkan Angka ") 

    if (valid >= 1 && valid <= 10) {
        console.log(`this ${valid} is valid input`)
    } else {
        console.log("Invalid Input")
    }
}

module.exports = {
    firstLoop,
    secondLoop,
    thirdLoop,
    fourthLoop,
    fifthLoop,
    sixth,
    seventhLoop,
    validationPrompt,
    secondValidation
}