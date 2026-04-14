function safeDivide(num1, num2) {
    return num1 / num2
}

function transformToNumber(anyString){
    const noKoma = anyString.replace(/,/g, '')
    return Number(noKoma)
}

function transformToString(anyNumber){
    return anyNumber.toLocaleString('en-US')
}

function getValueFromArray(arr, index){
    return arr[index]
}

console.log(safeDivide(2, 0))

console.log(transformToNumber("30,450.2"))

console.log(transformToString(30450.2))
const arr = [1, 2, 3]

console.log(getValueFromArray(arr, 0))


