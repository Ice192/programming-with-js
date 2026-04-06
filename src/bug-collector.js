const readline = require("readline-sync");

function bugCollector () {
    let result = []

    for (let days = 1; days <= 5; days++) {
        const bug = readline.question(`Number of Bugs ${days} day: `)
        let toNum = Number(bug)
        result.push(toNum)
    }

    let total = 0
    let index = 0
    while(index < result.length){
        total += result[index]
        index++
    }
    // result.forEach(x => {
    //     total += x;
    // })
    console.log(`Total bugs in 5 days is ${total}`)
}


module.exports = {
    bugCollector
}