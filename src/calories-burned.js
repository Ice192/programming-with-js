function calories (x) {
    const calories = 4.2
    let result
    for (let i = 10; i <= 30;) {
        result = x - i * calories
        console.log(`After ${i} minutes, your remaining calories is ${result}`)
        i += 5

        if(result <= 0) {
            console.log(`Is Done`)
            break
        } else { 
            continue
        }
    }
}

module.exports = {
    calories
}