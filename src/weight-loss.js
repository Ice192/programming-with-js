function WeightLoss (weight) {
    const loss = 4
    const target = 6

    for (let i = 1; i <= target; i++) {
        weight -= loss
        console.log(`Expected weight after ${i} month is ${weight}`)
    }

    return weight
}

module.exports = {
    WeightLoss
}