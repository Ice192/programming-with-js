function totalTiket(tiket, jumlah) {
    return tiket * jumlah
}

function totalCost (a, b, c) {
    let result = 0
    result = totalTiket(20, a) + totalTiket(15, b) + totalTiket(10, c)
    return result
}

// console.log(totalCost(4, 6, 9))
module.exports = {
    totalCost
}