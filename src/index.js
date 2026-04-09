// const readline = require('readline');
// const { createInterface } = readline;
// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
const readline = require("readline-sync");

console.log("Hello world");

const { add, subtract, divide, multiply, greaterThan, oddEven } = require("./math.js");

console.log("1 + 2 =", add(1, 2));
console.log("5 - 3 =", subtract(5, 3));
console.log("4 * 6 =", multiply(4, 6));
console.log("10 / 2 =", divide(10, 2));
console.log("---------------------------------------------------------")

const {kineticEnergy,force} = require("./physics.js");
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

// Exercise 3
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

// Algorithm-workbench. Nomor 1
const {firstLoop, secondLoop, thirdLoop, fourthLoop, fifthLoop, sixth, seventhLoop, validationPrompt, secondValidation} = require ("./Algorithm-workbench.js");

while (true){
    let angka = readline.question("Masukkan Nomor: ");
    const product = firstLoop(angka)
    if (product <= 100) {
    console.log("Total product ",firstLoop(angka));
    } else {
        break
    }
}

console.log("---------------------------------------------------------");

// Algorithm-workbench. Nomor 2
const isAgree = readline.question("Ayo Mulai (yes)");
secondLoop(isAgree);
console.log("---------------------------------------------------------");

// Algorithm-workbench. Nomor 3
thirdLoop()
console.log("---------------------------------------------------------");

// Algorithm-workbench. Nomor 4
fourthLoop()
console.log("---------------------------------------------------------");

// Algorithm-workbench. Nomor 5
console.log(`Total adalah `, fifthLoop());
console.log("---------------------------------------------------------");

// Algorithm-workbench. Nomor 6
sixth(10)
console.log("---------------------------------------------------------");

// Algorithm-workbench. Nomor 7
seventhLoop()
console.log("---------------------------------------------------------");

// Algorithm-workbench. Nomor 8
validationPrompt()
console.log("---------------------------------------------------------");

// Algorithm-workbench. Nomor 9
secondValidation()
console.log("---------------------------------------------------------");

// Bug Collector
const { bugCollector } = require("./bug-collector.js");
  bugCollector()
  console.log("---------------------------------------------------------");

// Calories-Burned
const {calories} = require ("./calories-burned");
// const calory = readline.question(`How much your calory today: `)

console.log(calories())
console.log("---------------------------------------------------------");

// Budget-Analysis
const { Budget } = require("./budget-analysis.js");
const month = readline.question("Input your budget : ")

console.log("Total ", Budget(month))
console.log("---------------------------------------------------------");

// Distance Traveled
const {distanceTravel} = require("./distance-travele.js");
const speed = readline.question("What is the speed of vehicle in mph? ");
const time = readline.question("How many hours has it traveled? ");

console.log("Total distance is ", distanceTravel(speed, time), " miles");
console.log("---------------------------------------------------------");

// Average Rainfall
const {averageRainfall} = require("./average-rainfall.js")

const num_year = readline.question("Number of year: ")
const average_rainfall = averageRainfall(num_year)
console.log(`Total month: ${average_rainfall.total_month} - Total inches: ${average_rainfall.total_inche}`)
console.log(`So the average is ${average_rainfall.total_avg}`)
console.log("---------------------------------------------------------");

// Convert Temprature
const total_convert = 20

for (let i = 0; i <= total_convert; i++){
    console.log(`${i} F =`, Convert(i), "C");
}
console.log("---------------------------------------------------------");

//Pennies for Pay
const {Pennies} = require("./pennies.js")

const days = readline.question("Input number of days: ")
const total_pay = Pennies(days)
console.log(`Total pay in the end of period is ${total_pay} $`)
console.log("---------------------------------------------------------");

// Sum of Numbers
const col_num = []
let result = 0
while(true){
    const input_num = readline.question("Input Number: ")
    
    //check
    if (input_num > 0 && input_num != NaN) {
        col_num.push(Number(input_num))
    } else if (input_num < 0 && input_num != NaN){
        console.log("Negative Number (Stop)")
        break;
    } else {
        console.log("Undefined")
        break;
    }
}
col_num.forEach(x => {
        result += x
    })

    console.log(`Total Numbers is ${result}`)
    console.log("---------------------------------------------------------")

// Ocean Levels
const {oceanLevel} = require("./ocean-levels.js")
 oceanLevel(25)

console.log("---------------------------------------------------------")

// Tuition Increase
const {Tuition} = require ("./tuition-increase.js")

Tuition(5)
console.log("---------------------------------------------------------")

// Weight Loss
const {WeightLoss} = require ("./weight-loss.js")
const weight = readline.question("Enter your current weight: ")
let hasil
hasil = WeightLoss(weight)
console.log("The final result after 6 months is ", hasil)
console.log("---------------------------------------------------------")

// Tiket Class
const {totalCost} = require("./tiket-class.js")

const tiket_a = readline.question("Jumlah Tiket class A: ")
const tiket_b = readline.question("Jumlah Tiket class B: ")
const tiket_c = readline.question("Jumlah Tiket class C: ")

const hasil_tiket = totalCost(tiket_a, tiket_b, tiket_c)
console.log(`Total harga tiket adalah $${hasil_tiket}`)
console.log("---------------------------------------------------------")

// Paint Job Estimator
const {paint} = require("./paint-job.js")

const wall_space = readline.question("Masukkan luas dinding yang akan di cat (sqrt) : ")
const biaya_galon = readline.question("Masukkan biaya galon ($): ")

paint(wall_space, biaya_galon)
console.log("---------------------------------------------------------")

// Monthly Sales Tax
const {salesTax} = require("./sales-tax.js")

const total_sales = readline.question("Masukkan Total biaya : ")

console.log(`Total tax yang dibayar = $${salesTax(total_sales)}`)
console.log("---------------------------------------------------------")

// Feet to Inches
const {feetToInches} = require("./feet-to-inches.js")

const feet = readline.question ("Panjang (feet): ")

console.log(`${feet} feet = ${feetToInches(feet)} inches`)
console.log("---------------------------------------------------------")

// Math Quiz
const random_num1 = Math.floor(Math.random() * 100) + 1
const random_num2 = Math.floor(Math.random() * 100) + 1

if (random_num1 > 0 && random_num2 > 0)  {
    const hasil = add(random_num1, random_num2)
    console.log(`${random_num1} + ${random_num2} = ?`)

    const answer = readline.question("Jawabanmu adalah ")
    if (answer == hasil) {
            console.log("Congratulations. Anda Benar")
        } else {
            console.log("Anda Salah")
        }

} else {
    console.log("Invalid Number")
}

console.log("---------------------------------------------------------")

// Maximun of 2 values
const angka1 = readline.question("Masukkan Angka pertama : ")
const angka2 = readline.question("Masukkan Angka kedua : ")

const greater = greaterThan(angka1, angka2)
console.log(`Angka terbesar adalah ${greater}`)
console.log("---------------------------------------------------------")

// Falling Distance
const {falling_distance} = require("./falling-distance.js")

for (let time = 1; time <= 10; time++) {
    console.log(`jarak setelah ${time} detik adalah ${falling_distance(time).toFixed(2)} meter`)
}
console.log("---------------------------------------------------------")

// Kinetic Energy
const mass = readline.question("Masukkan massa objek: ")
const velocity = readline.question("Masukkan kecepatan objek: ")

console.log(`Hasil Energi Kinetiknya adalah ${kineticEnergy(mass, velocity)}`)
console.log("---------------------------------------------------------")

// Average and Grade
const {averageTest, grade} = require("./test-average-and-grade.js")

const test = []
    for(let i = 1; i <= 5; i++) {
        const nilai = readline.question(`Masukkan nilai ${i}: `)
        test.push(Number(nilai))
    }

    const avg = averageTest(test)
    const _grade = grade(avg)
console.log(`Nilai rata-rata anda: ${avg}`)
console.log(`Letter Grade: ${_grade}`)
console.log("---------------------------------------------------------")

// Odd Even Counter
    const odd_even = oddEven()
    console.log(`Jumlah Ganjil: ${odd_even.odd}`)
    console.log(`Jumlah Genap: ${odd_even.evn}`)
console.log("---------------------------------------------------------")

// Future Value
    const {futureValue} = require("./future-value.js")

    const present_value = readline.question("Masukkan saldo sekarang ($) ")
    const interest = readline.question("Masukkan Interest berapa: (%)")
    const month_ = readline.question("Masukkan berapa bulan: ")
    const amount = futureValue(Number(present_value), Number(interest), Number(month_))
    console.log(`Total saldo setelah beberapa bulan adalah ${amount.toFixed(2)}`)
    console.log("---------------------------------------------------------")

// Number Guessing Game
const {numberGame} = require("./random-number-guess.js")

console.log(numberGame())