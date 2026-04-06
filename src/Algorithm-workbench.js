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
    let total = 0
    for (let i = 1; i <= 10; i++){
        let num = readline.question(`Masukkan Angka ke ${i}/10: `)
        total += Number(num)
    }

    return total
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
} 

function secondValidation () {
    let valid = readline.question("Masukkan Angka ") 
    const number = parseInt(valid)
    console.log(number)
    if (number >= 1 && number <= 100) {
        console.log(`this ${valid} is valid input`)
    } else {
        console.log("Invalid Input")
    }
}

function bilanganPrima (num) {
    let isPrime = true
    if(num == 1){
        console.log("1 Bukan Bilangan Prima")
    } else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false
                break
            }

        }
        if (isPrime) {
            // console.log(`${num} bilangan prima`)
            return num
        } else {

            return
        }
    }
    else {
        console.log("Input bukan bilangan prima")
    }
    
}

// console.log(fourthLoop())
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

let bil_prima = []
for (let angka = 1;angka <= 100000;angka++) {
    let prime = bilanganPrima(angka)
    //    console.log(prime)
    
    if(prime != undefined) {
        bil_prima.push(angka)
    }
}
let count = bil_prima.length
console.log("Bilangan Prima tertinggi adalah ", bil_prima[count-1])
console.log("Jumlah bilangan prima ", bil_prima.length)

// let luar = 0
// let dalam = 0

// for (i = 1; i <= 30; i++ ) {
//     console.log("loop luar")
//     luar++;
//   for (j = 1; j <= 1000; j++) {
//     console.log("loop dalam")
//     dalam++;
    
//   }
// }

// console.log(luar);
// console.log(dalam)

