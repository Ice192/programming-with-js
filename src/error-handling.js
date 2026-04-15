function safeDivide(num1, num2) {
    try {
        if (num2 === 0){
            throw new Error('Cannot Divide by Zero')
        }
    } catch(e){
        console.log(e)
    }
    return num1 / num2
}

function transformToNumber(anyString){
    let number = ""
    try{
        for (const x of anyString){
        if(x === ',' || x === '.'){
         continue
       }
        if(isNaN(x)){
            throw new Error ("Inputan tidak boleh alphabet")
        }
        else {
           number += x
        }
    }
    }
    catch(err) {
        console.log(err)
    }
    return Number(number)
}

function transformToString(anyNumber){
    const formatString = anyNumber.toString()

    return formatString
}

function getValueFromArray(arr, index){
    if (index >= arr.length) {
        console.log('index tidak terjangkau')
    } else {
        return arr[index]
    }
}

console.log(safeDivide(2, 0))

console.log(transformToNumber("123,456,.,0"))

console.log(transformToString(30450.2))
const arr = [1, 2, 3, 4]

console.log(getValueFromArray(arr, 3))

