class Card {
    constructor (numbers, symbols) {
        this.numbers = numbers
        this.symbols = symbols
    }

    static combine(symbol, number) {
        return `${symbol} ${number}`
    }

}

class FullCard {
    constructor(){
        this.cards = []
    }

    generate(numbers, symbols){
        for (const number of numbers) {
            for (const symbol of symbols) {
                this.cards.push(Card.combine(number,symbol))
            }
        }
    }
    
    shuffle() {
        for (let i = 0; i < 1000; i++){
        const a = Math.floor(Math.random() * this.cards.length)
        const b = Math.floor(Math.random() * this.cards.length)

        if (a === b){
            continue
        }

        const temp = this.cards[a]
        this.cards[a] = this.cards[b]
        this.cards[b] = temp
        }
    }

    draw(){
        return this.cards.pop() // atau bisa dengan splice(this.cards.length - 1, 1).
    }
}

class Player {
    constructor(name) {
        this.name = name
        this.hand = []
    }

    takeCard (card) {
        this.hand.push(card)
    }
}

class Dealer {
    constructor() {
        this.table = []
    }

    takeCard (card) {
        this.table.push(card)
    }
}

const deck = new FullCard()
const player = new Player('You')
const enemy = new Player('Enemy')
const dealer = new Dealer()

const symbols = ['♠️', '❤️', '♦️', '♣️']
const numbers = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

deck.generate(numbers,symbols)
deck.shuffle()

for (let i = 0; i < 2; i++) {
      player.takeCard(deck.draw())
      enemy.takeCard(deck.draw())
    }

for (let i = 0; i < 5; i++) {
      dealer.takeCard(deck.draw())
    }

function getAngka (cards){
    const result = []
    for(const card of cards){
        card.split(' ')
        result.push(card[0])
    }
    return result
}
const playerCardsNumber = getAngka(player.hand)
const enemyCardsNumber = getAngka(enemy.hand)
const dealerCardsNumber = getAngka(dealer.table)

function cekPair (player, dealer) {
   const temp = player.concat(dealer)
   let count_pair = 0
   
    const pair_used = []
    for (let i = 0; i < temp.length - 1; i++){
        if(pair_used.includes(temp[i])){
            continue
        }
        for (let j = i + 1; j < temp.length; j++){
        if(pair_used.includes(temp[j])){
            continue
        }
            if (temp[i] === temp[j]){
                console.log(`${temp[i]} = ${temp[j]}`)
                count_pair += 1
                pair_used.push(temp[i])
            }
        }
    }

    if(count_pair > 2)
        {count_pair = 2} 

    return count_pair
}

const resultPlayer = cekPair(playerCardsNumber,dealerCardsNumber)
const resultEnemy = cekPair(enemyCardsNumber,dealerCardsNumber)

function whoWin (player, enemy){
    if (player === enemy){
        return "Draw"
    } else if (player > enemy) {
        return "You Win"
    } else {
        return "Enemy Win"
    }
}

console.log(whoWin(resultPlayer, resultEnemy))