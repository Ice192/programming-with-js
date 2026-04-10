const readline = require("readline-sync");

function Guessing (tebak, random_number){
    if (tebak === random_number) {
            console.log (`Congratulations! You Guess Number ${random_number}`)
            isAgree = false
        } else if (tebak > random_number) {
            console.log (`Too High, try again`)
        } else if (tebak < random_number) {
            console.log (`Too Low, try again`)
        }
}

function numberGame () {
    let isAgree = true
    const random_number = Math.floor(Math.random() * 100) + 1
    let count = 0
    while(isAgree){

        const guess = readline.question("Coba tebak angka berapa ")
        const tebak = Number(guess)

        Guessing(tebak, random_number)
        count++
    }
    console.log(`You guessed ${count} times`)
    console.log("Game Finish")

}

module.exports = {
    numberGame
}