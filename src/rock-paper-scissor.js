const readline = require("readline-sync")

function generate () {
    const gen = Math.floor(Math.random() * 3 + 1)
    let computer

    if (gen === 1) {
        computer = "Rock"
    } else if (gen === 2) {
        computer = "Paper"
    } else {
        computer = "Scissor"
    }
    return computer
}

function game (generate) {
    let start = true
    while(start) {
        const computerSide = generate()
        const player = readline.question("'Rock' 'Paper' 'Scissor' : ")
        // if (player === "Rock" || player === "Paper" || player === "Scissor") {
        //     continue
        // } else {
        //     console.log("Invalid Input. Restart Game")
        // }
        console.log(`You | ${player}  VS  ${computerSide} | Computer`)
        
        if (player === computerSide) {
            continue
        }
        
        if(player === "Rock"){
            if(computerSide === "Scissor") {
                console.log("Player Win")
                start = false
            } else {
                return "Computer Win"
            }
        }
        
        if (player === "Paper") {
            if (computerSide === "Rock") {
                console.log("Player Win")
                start = false
            } else {
                return "Computer Win"
            }
        }
        
        if (player === "Scissor") {
            if (computerSide === "Paper") {
                console.log("Player Win")
                start = false
            } else {
                console.log("Computer Win")
                start = false
            }
        }
       
        
}
}


console.log(game(generate))