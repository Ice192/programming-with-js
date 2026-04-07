

function Factorial (num) {
    let proses = ""
    let hasil = 1
    for(let n = 1; n <= num; n++) {
        hasil *= n

        proses += n + (n < num ? " x ": "")
    }
    console.log(proses,"=", hasil)
    return hasil
}

console.log(Factorial(5))