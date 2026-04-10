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
        if (hasil < 10000){
            result.push(hasil)
        }
    }

    return result
}

console.log(perfectNumber(bilanganPrima))