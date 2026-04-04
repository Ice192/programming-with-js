function Pennies(day){
    let penny = 1
    let total_penny = 1
    let amount = 0

    for(let i = 1; i <= day; i++){
        console.log(`${i} days ${penny} pennies`)
        penny *= 2
        total_penny += penny
    }
    amount = total_penny / 100
    
    return amount
}

module.exports = {
    Pennies
}