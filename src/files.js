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
        if (!isNaN(x)) {
            number += x
        }
         else if (x === ','){
            collect.push(number)
        }
    }

    return Number(collect)
}

const finalHasil = separateComma(hasil)
console.log(finalHasil)