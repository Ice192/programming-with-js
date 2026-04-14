const fs = require('fs')


fs.readFile('./files/starterq.txt','utf8', (err, data) => {
    if(err) throw err
    console.log(data)
})

console.log('Hello')
 
// fs.writeFile ('./files/reply.txt', 'Nice to meet you too', (err) => {
//     if(err) throw err
//     console.log("Write Complete")
// })

// fs.appendFile('./files/replya.txt', '\nNice to meet you', (err) => {
//     if(err) throw err
//     console.log("Update Complete")
// }) // append untuk update file dan bisa membuat file baru


// function randomNumber(number) {
//     const hasil = []
//     for (let i = 0; i < number; i++){
//         const number = Math.floor(Math.random()*500) + 1
//         hasil.push(number)
//     }
//     return hasil
// }

// const hasil = randomNumber(20)

// fs.writeFile('./files/reply.txt', hasil.join(), (err) => {
//     if(err) throw err
//     console.log("Write Complete")
// })