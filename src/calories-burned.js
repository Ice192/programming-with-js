function calories () {
    const calories = 4.2
    let result
    for (let i = 10; i <= 30;) {
        result = i * calories
        console.log(`After ${i} minutes, your remaining calories is ${result} kcal`)
        i += 5
    }
}

calories()
module.exports = {
    calories
}