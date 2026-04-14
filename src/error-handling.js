function safeDivide(num1, num2) {
    return num1 / num2
}

function transformToNumber(anyString){
    let number = ""
    for (let x of anyString){
       if(x === ','){
         continue
       }
        if(isNaN){
           number += x
        }
    }
    return Number(number)
}

function transformToString(anyNumber){
    const str = String(anyNumber)
   
    for (const x of str){
        if(x === '.'){
           // Cari bagaimana untuk menambahkan , di tiga terakhir angka 
        }
    }

    return str
}

function getValueFromArray(arr, index){
    return arr[index]
}

console.log(safeDivide(2, 0))

console.log(transformToNumber("30,450.2"))

console.log(transformToString(30450.2))
const arr = [1, 2, 3]

console.log(getValueFromArray(arr, 0))


