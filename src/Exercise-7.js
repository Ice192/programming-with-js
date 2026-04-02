function Charges (charge) {
    if (charge <= 2) {
        return charge * 1.50
    } else if (charge <= 6) {
        return charge * 3
    } else if (charge <= 10) {
        return charge * 4
    } else if (charge > 10) {
        return charge * 4.75
    } else {
        console.log("Invalid Input")
    }
}

console.log (Charges("A"))

module.exports = {
    Charges
}