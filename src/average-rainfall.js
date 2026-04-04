const readline = require("readline-sync");

function averageRainfall (year) {
    let total_avg
    let total_inche = 0
    let total_month = 0
    for (let i = 1; i <= year ; i++){
        for (let j = 1; j <= 12; j++){
            const rainfall = readline.question(`${i} years - ${j} month = `)
            total_inche = total_inche + Number(rainfall)
            total_month = total_month + 1
        }
    }
    total_avg = total_inche / total_month
    // console.log("total month ", total_month)
    // console.log("total inches ", total_inche)
    // console.log("average ", total_avg)
    return {total_avg, total_month, total_inche}
}

module.exports = {
    averageRainfall
}