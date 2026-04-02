function Money (Principal, rate, n, t) {
    rate = rate/100

    if (n == "Monthly") {
        n = 12
    } else if (n == "Yearly") {
        n = 4
    }

    const x = 1 + rate/n
    const y = n * t

    let Amount = Principal * (x ** y)

    return Amount
    
}

module.exports = {
    Money
}