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
        console.log(`You ${player}  VS  ${computerSide} Computer`)

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

            if (player === "Paper") {
                if (computerSide === "Rock") {
                console.log("Player Win")
                start = false
            } else {
                return "Computer Win"
                
            }


            if (player === "Scissor") {
                if (computerSide === "Paper") {
                console.log("Player Win")
                start = false
            } else {
                return "Computer Win"
            }


            }
        }
    }
}
 
}


console.log(game(generate))