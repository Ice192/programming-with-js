const symbols = ['♠️', '❤️', '♦️', '♣️']
const numbers = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
class Card {
    constructor(number, suit){
        this.suit 
        this.number 
        this.show = true
        this.isRed()
        this.isValid(number,suit)
    }

    isValid (number,suit) {
    try{
        if(numbers.includes(number) && symbols.includes(suit)){
            this.suit = suit
            this.number = number
        } else {
            throw new Error("Anda memasukkan angka atau suit yang salah")
        }
    }catch(err){
        console.log(err)
    }
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
            return `${this.suit}${this.number}`
        } else {
            return "??"
        }
    }
}

class Deck {
    constructor(){
        this.cards = []
        this.seed()
    }

    seed(){
        for(const number of numbers){
            for(const symbol of symbols){
                const card = new Card(number,symbol)
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
}

    draw(amount) {
        return this.cards.splice(0,amount)
    }

    level(){
    for(const card of this.cards){
        if (card.number === 'A'){
            card.number = 11
        } else if(card.number === 'J' || card.number === 'Q' || card.number === 'K'){
            card.number = 10
        } else {
           card.number = Number(card.number)
        }
    }
    return this.cards
}
}

class Player {

}

const cards = new Deck()
const card = new Card('14','❤️')
console.log(card)
console.log(cards)

// UI function
function setCardUI (cards) {
    const myElement = document.createElement('div')
    myElement.classList.add("card")
    myElement.innerHTML = cards

    return myElement
}
function setButtonDrawUI (){
    const myElement = document.createElement('button')
    myElement.setAttribute('id','draw')
    myElement.innerHTML = 'Draw'

    myElement.addEventListener('click', () => {
    const player = document.querySelector('#player')
    const playerCard = cards.draw(1)
    for(const x of playerCard){
        const result = x.isShow()
        player.append(setCardUI(result))
    }
})

    return myElement
}


const start = document.querySelector('#start')

start.addEventListener('click', () => {
    const deck = document.querySelector('#deck')
    deck.innerHTML = ''
    cards.shuffle()

    const player = document.querySelector('#player')
    const enemy = document.querySelector('#enemy')

    player.innerHTML = ''
    enemy.innerHTML = ''

    const playerCard = cards.draw(2)
    const enemyCard = cards.draw(2)
    player.append(setButtonDrawUI())
    
    for(const x of playerCard){
        const result = x.isShow()
        player.append(setCardUI(result))
    }

    for(const x of enemyCard){
        x.show = false
        const result = x.isShow()
        enemy.append(setCardUI(result))
    } 
    
    const element = document.createElement('div')
    element.classList.add("card")
    element.innerHTML = cards.cards.length
    deck.append(element)
})





