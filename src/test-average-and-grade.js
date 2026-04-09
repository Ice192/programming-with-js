function averageTest (data) {
    let total = 0
    for(let i = 0; i < data.length; i++) {
        total += data[i]
    }
    console.log(total/data.length)
    return total / data.length
}

function grade (data) {
    let result = ""
    if (data >= 90 && data <= 100) {
        result = "A"
    } else if (data < 90) {
        result = "B"
    } else if (data < 80) {
        result = "C"
    } else if (data < 70) {
        result = "D"
    } else if (data < 60) {
        result = "E"
    } else {
        console.log("Invalid Value")
    }

    return result
}

module.exports = {
    grade,
    averageTest
}
