const number = [1, 2, 3, 4, 5, 6, 7, 8, 3]

function indexArr (myArr) {
    
    for (const x in myArr) {
        console.log(x)
    }
    
} // untuk mengecek index dalam array

const tes = "Hello World"
function sumArr (myArr) {
    let total = ""
    for (const x of myArr) {
        total += x
    }
    return total
} // untuk melihat value dalam array 

console.log(sumArr(tes))
