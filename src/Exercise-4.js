

function Money (P, r, n, t) {
    let A
    let compound

    if (n === "Monthly") {
        return compound = 12
    } else if (n === "Yearly") {
        return compound = 4
    }

    const x = 1 + r/n
    // const maxPow = 

    return A = Math.pow(P * x, n * t)
    
}

console.log(Money(100, 2, "Monthly", 2))

module.exports = {
    Money
}