

function Money (Principal, rate, n, t) {
    rate = rate/100

    if (n == "Monthly") {
        n = 12
    } else if (n == "Yearly") {
        n = 4
    }

    let x = 1 + rate/n
    y = n * t
    // const maxPow = 

    let Amount = Principal * (x ** y)

    return Amount
    
}

console.log(Money(1000000, 2, "Monthly", 2))

module.exports = {
    Money
}