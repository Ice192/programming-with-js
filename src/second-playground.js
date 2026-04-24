class Card {
    constructor(number, suit){
        this.suit = suit
        this.number = number
        this.show = true
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

    isShow(){
        if(this.show){
            return `${this.suit}  of ${this.number}`
        } else {
            return "####"
        }
    }
}

class Deck {
    constructor(){
        this.cards = []
        this.seed()
    }

    seed(){
        const symbols = ['♠️', '❤️', '♦️', '♣️']
        const numbers = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        for(const number of numbers){
            for(const symbol of symbols){
                const card = new Card (number,symbol)
                this.cards.push(card)
                }
        }
    }

    shuffle () {
    for (let i = 0; i < this.cards.length; i++) {
            const j = Math.floor(Math.random() * this.cards.length);
            if (i === j){
                continue
            }
        const temp = this.cards[i]
        this.cards[i] = this.cards[j]
        this.cards[j] = temp
        }
        // return this.myDeck
}

    draw(amount) {
        return this.cards.splice(0,amount)
    }
}

const myCard = new Deck()
console.log(myCard.cards.length)
console.log(myCard.draw(2))
console.log(myCard.cards.length)
