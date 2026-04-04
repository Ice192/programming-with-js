const readline = require("readline-sync");

function Budget (month) {
    let amount = []
    for (let i = 1; i <= month; i++) {
        let total = readline.question(`Input your Expenses ${i} month: `)
        amount.push(Number(total))
    }

    let Total = 0
    amount.forEach(x => {
            Total += x
    })

    return Total
}

module.exports = {
    Budget
}