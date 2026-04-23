class Card {
    constructor(number, suit){
        this.suit = suit
        this.number = number
    }

    isOdd() {
        {
        let isOdd
        if(this.number === "Joker"){
            return isOdd
        }
        if(this.number % 2 === 0 || this.number === "Q"){
            isOdd = false}
            else
            {isOdd = true}      
        return isOdd
    } 
    }
    isRed(){
        let isRed = false
        if(this.suit === "❤️" || this.suit === "♦️" || this.suit === "Joker"){
            isRed = true
        }
        return isRed
    }
}

const symbols = ['♠️', '❤️', '♦️', '♣️']
const numbers = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const myDeck = []

for(const number of numbers){
    for(const symbol of symbols){
        const card = new Card (number,symbol)
        myDeck.push(card)
    }
}

console.log(myDeck)

// for(const item of myDeck){
//     if (item.isOdd()){
//         if(item.isRed()){
//             console.log(`Kartu ${item.number} ${item.suit}`)
//         }
//     }
// }

function shuffle (arr) {
    for (let i = 0; i < myDeck.length; i++) {
                const j = Math.floor(Math.random() * myDeck.length);
            if (i === j){
                continue
            }
        const temp = myDeck[i]
        myDeck[i] = myDeck[j]
        myDeck[j] = temp
        }
}
shuffle(myDeck)

console.log(myDeck)




