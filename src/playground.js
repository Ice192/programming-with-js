// class Person {
//     constructor(name) {
//         this.name = name
//     }
//     sayhello (name) {
//         const say = console.log(`Hello ${name}, my name is ${this.name}`)
//         return say
//         }
// }
// const eko = new Person("Eko")

// console.log(eko)
// eko.sayhello("Budi")


// // Getter Setter
// class Configuration {
//     static name = "Belajar Javascript"
//     static version = 1.0
//     static author = "Rais"
// }

// const config = new Configuration()
// console.log(config)
// Configuration.author = "Ina"
// console.log(Configuration.name)
// console.log(Configuration.version)
// console.log(Configuration.author)

const symbols = ['♠️', '❤️', '♦️', '♣️']
const numbers = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const myDeck = []
 for(const symbol of symbols){
  for(const number of numbers){
    myDeck.push(createCard(number, symbol))
 }
}

function createCard (name, color) {
    return {suit: color,
        number: name, 
        isRed: function(){
        let isRed = false
        if(this.suit === "❤️" || this.suit === "♦️" || this.suit === "Joker"){
            isRed = true
        }
        return isRed
    },
    isOdd: function(){
        let isOdd
        // if(this.number === "Joker"){
        //     return isOdd
        // }

        if(this.number % 2 === 0 || this.number === "Q"){
            isOdd = false
        } else{
            isOdd = true
        }    
        
        return isOdd
    }
}
}

myDeck.push(createCard("Joker", "Red"))
myDeck.push(createCard("Joker", "Black"))

console.log(myDeck)

for(const item of myDeck){

    // if(item.number === "Joker"){
    //    console.log(item.isOdd()) 
    // }

    if (item.isOdd()){
        if(item.isRed()){
            console.log(`Kartu ${item.number} ${item.suit}`)
        }
    }
}


        


// const numbers = [ 'As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

// const myDeck = new Deck(numbers, "♥️")
// myDeck.print()




