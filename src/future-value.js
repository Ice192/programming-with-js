function futureValue (present_value, interest, month) {
    interest /= 100
    const F = present_value * (1 + interest) ** month
    return F
}

module.exports = {
    futureValue
}