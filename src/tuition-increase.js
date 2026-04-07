function Tuition(year) {
    const semester = 8000
    let result = 0
    const increase = 3/100

    for(let i = 1; i <= year; i++) {
        let tuition = semester * i
        result = tuition * increase
        
        console.log(`in ${i} years, increase amount is ${result} $ so tuition is ${tuition + result} $`)
    }
}

module.exports = {
    Tuition
}