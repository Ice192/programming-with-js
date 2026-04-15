function safeDivide(num1, num2) {
    // try {
    //     if (num2 === 0){
    //         throw new Error('Cannot Divide by Zero')
    //     }
    // } catch(e){
    //     console.log(e)
    // }
    return num1 / num2
}

function transformToNumber(anyString){
    let number = ""
    for (let x of anyString){
       if(x === ','){
         continue
       }
        if(x !== NaN){
           number += x
        }
    }
    return Number(number)
}

function transformToString(anyNumber){
    const formatString = anyNumber.toLocaleString('id-ID')
    return formatString
}

function getValueFromArray(arr, index){
    return arr[index]
}

console.log(safeDivide(2, 0))

console.log(transformToNumber("30,450.2"))

console.log(transformToString(30450.2))
const arr = [1, 2, 3]

console.log(getValueFromArray(arr, 0))

