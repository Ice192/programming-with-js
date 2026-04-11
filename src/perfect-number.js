function Prime (num) {
    let isPrime = true
    if (num < 2) {
        return isPrime = false
    } 
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false
            break
        }
    }
    
    return isPrime
}

function primeCollect (primeFn) {
    const result = []
    for (let item = 0; item < 100; item++) {
        if(primeFn(item)) {
            result.push(item)
        }
    }
    return result
}
const bilanganPrima = primeCollect(Prime)
function perfectNumber (prima) {
    const result = []
    for(let item of prima) {
        const hasil = 2 ** (item-1) * (2**item - 1)
        if (hasil < 10000000){
            result.push(hasil)
        }
    }

    return result
}

// console.log(perfectNumber(bilanganPrima))
const perfect_number = []
const perfect_number_pembagi = []
function bruteForce (number) {
    const pembagi = []
    let totalPembagi = 0

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            pembagi.push(i)
        } else {
            continue
        }
    }
    
    for (let i = 0; i < pembagi.length; i++){
        totalPembagi += pembagi[i]
    }

    if (totalPembagi === number) {
        perfect_number.push(Number(number))
        perfect_number_pembagi.push(pembagi)
        return pembagi
    }
}


for (let i = 2; i <= 1000; i++){
    console.log(bruteForce(i))
}

console.log("Perfect Number sebagai berikut", perfect_number)
console.log(perfect_number_pembagi)