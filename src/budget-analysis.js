const readline = require("readline-sync");

function Budget (budget) {
    
    for (let i = 1; i <= budget; i++) {
        let total = readline.question(`Input your Expenses ${i}: `)
        budget -= total

        console.log(`Amount: ${budget}`)
    }

    // let Total = 0
    // amount.forEach(x => {
    //         Total += x
    // })

    return budget
}

// Budget(1000000)

module.exports = {
    Budget
}