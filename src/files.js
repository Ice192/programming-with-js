const fs = require('fs')

fs.readFile('./files/replya.txt', (err, result) => {
    if (err){
        console.log(Error)
    } else {
        console.log(result.toString())
    }
})

function randomNumber (limit) {
    const hasil = []
    for (let i = 0; i < limit; i++){
        const number = Math.floor(Math.random()*500) + 1
        hasil.push(number)
    }
    return hasil
}

const hasil_random = randomNumber(10).toString()

fs.writeFileSync('./files/newfile.txt', hasil_random)
const hasil = fs.readFileSync('./files/newfile.txt', 'utf8')

function separateComma (hasil) {
    let number = ''
    let collect = []
    for(const x of hasil){
        if (x === ','){
            collect.push(number)
            number = ''
        }
        if (!isNaN(x)) {
            number += Number(x)
        }
    }

    return collect
}

function sumNumber (arr) {
    let result = 0
    for(const x of arr){
        result += Number(x)
    }
    return result
}

const finalHasil = separateComma(hasil)
const sum = sumNumber(finalHasil)
console.log(finalHasil)
console.log(sum)