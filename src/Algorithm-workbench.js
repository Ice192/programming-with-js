const readline = require("readline-sync");

function firstLoop (number) {
    let product = number * 10;
    return product
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
    let num = 0
    // while(num <= 1000){
    //     console.log(num)
    //     num += 10
    // }

    for (num; num <= 1000; num += 10){
        console.log(num);
    }
}

function fourthLoop () {
    for (let i = 1; i <= 10; i++){
        let num = readline.question(`Masukkan Angka ke ${i}/10: `)
    }
}

function fifthLoop () {
    let i;
    let result = [];
    // let loop = 1;
    let j = 30;
    for (i = 1; i <= 30;) {
            const hasil = i/j;
            result.push(hasil);
            console.log(`${i}/${j}`);
            i++;
            j--;
        
        // loop++
    }
    // console.log(loop)
    let index = 0
    let total = 0
    while(index < result.length) {
        total += result[index]
        index++
    }
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
    const number = parseInt(valid)

    if (!isNaN(number)) {
        console.log(`this ${valid} is valid input`)
    } else {
        console.log(`Invalid Input`)
    }
} // Belum mendapatkan jawaban bagaimana kalau user menekan string (yang harusnya invalid tapi malah valid)

function secondValidation () {
    let valid = readline.question("Masukkan Angka ") 
    const number = parseInt(valid)
    if (number >= 1 && number <= 100) {
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