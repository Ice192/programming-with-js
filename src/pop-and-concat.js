function pop (myArr) {
    myArr.splice(0,1)
    return myArr
}

const arr = [1,2,3,4,5]
const arr2 = [1,2,3,4,5]

console.log(pop(arr))

function concat(myArr1, myArr2) {
    const result = []
    for (const x of myArr1){
        result.push(x)
    }
    for (const x of myArr2){
        result.push(x)
    }
    return result
}

console.log(concat(arr,arr2))