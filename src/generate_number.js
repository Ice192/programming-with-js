function genNumber (){
    const random_number = []
    for (let i = 0 ; i < 100; i++){
        const number = Math.round(Math.random() * 100) 
        random_number.push(number)
    }
    console.log(random_number)
    return random_number
}

const angka_sama = []
function cekNumber (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] === arr[j]) {
                console.log(`Angka ${arr[i]} ada yang sama`)
                angka_sama.push(arr[i])
            }
        }
    }

}


cekNumber(genNumber())

console.log(angka_sama)

