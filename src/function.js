function Add (nomor1, nomor2) {
    return nomor1 + nomor2
}

function Subtract (nomor1, nomor2) {
    return nomor1 - nomor2
}

function Divide (nomor1, nomor2) {
    return nomor1 / nomor2
}

function Multiply (nomor1, nomor2) {
    return nomor1 * nomor2
}

function calculate (nomor1, nomor2, operator) {
    const hasil = operator(nomor1, nomor2)
    return hasil
}


console.log(calculate(10, 5, Add))
console.log(calculate(10, 5, Multiply))


function isEven (number) {
    let isEven = false
    if (number % 2 === 0) {
        isEven = true
    }
    return isEven
}

function isGreaterThan10 (number) {
    let isGreater = false
    if (number > 10) {
        isGreater = true
    }
    return isGreater
}

function myFilter (Arr, testFn) {
    const result = []
    for (let item of Arr) {
        if(testFn(item)) {
            result.push(item)
        }
    }
    return result
}

console.log(myFilter([1,2,3,10,20], isEven))

function createDiscount (discountPercent) {
    return function (price) {
        return price - (price * discountPercent)
    }
}

const discount10 = createDiscount(0.1)
console.log(discount10(100))

function withLogging (fn) {
    return function (...args) {
        console.log("Calling with:", args)
        const result = fn(...args)
        console.log("Result : ", result)
        return result
    }
}

const addWithLogging = withLogging(Add)
addWithLogging(5,5)
const multiplyWithLogging = withLogging(calculate)
multiplyWithLogging(5,5, Multiply)


function tax (data) {
    const tax = data * 0.05
    // console.log(tax)
    return data + tax
}

function discount (data) {
    const discount = data * 0.2
    // console.log(discount)
    return data - discount
}

function formatHarga (data) {
    const formatRupiah = "Rp." + data.toLocaleString('id-ID')  
    return formatRupiah
}

function applyMiddleware(data, middlewares, ...args){
    let result = data
    for (let mw of middlewares) {
        result = mw(result)
    }
    return result
}

const mware = applyMiddleware(1000000, [tax, discount, formatHarga])
console.log(mware)
