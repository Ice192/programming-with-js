class Card {
    constructor () {
        this.symbol = ['♠️', '❤️', '♦️', '♣️']
        this.angka = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        this.cards = []
    }

    setCard () {
    for (const x of this.angka){
        for (const y of this.symbol){
            this.cards.push(y+'  '+x)
        }
    }
    }

    static getAngka (card){
        const angka = card.split("  ")
        return angka[1]
    }

    static getSymbol (card) {
        const symbol = card.split("  ")
        return symbol[0]
    }

    static getColor (card) {
    let color = "black"
    let symbol = this.getSymbol(card)
    if (symbol === "❤️" || symbol === "♦️"){
        color = "red"
    }

    return color
 }
}

class Player {
    constructor(name, total, cards) {
        this.user = name
        this.totalCard = total
        this.pick_card = []
        this._cards = cards
    }

    pickCard (){
    for (let i = 0; i < this.totalCard; i++){
        const pick = Math.floor(Math.random() * this._cards.length)

        const take = this._cards.splice(pick,1)
        this.pick_card.push(take[0])
    }

    return this.pick_card
}

}

const card = new Card()
card.setCard()

function theShuffle(arr) {
    for (let i = 0; i < 1000; i++){
        const a = Math.floor(Math.random() * arr.length)
        const b = Math.floor(Math.random() * arr.length)

        if (a === b){
            continue
        }

        const temp = arr[a]
        arr[a] = arr[b]
        arr[b] = temp
    }
    return arr
}

const afterShuffle = theShuffle(card.cards)

const you = new Player ('player', 2, afterShuffle).pickCard()
const enemy = new Player ('enemy', 2, afterShuffle).pickCard()
const dealer = new Player ('dealer', 5, afterShuffle).pickCard()

console.log("You", you)
console.log("Enemy", enemy)
console.log("Dealer", dealer)

console.log(afterShuffle)

function userAngka (user) {
    const result = []
    let angka = 0
for (const item of user){
    angka = Card.getAngka(item)
    result.push(angka)
}
    return result
}

function cekPair (card, bandar){
    const result = []
    const temp = card.concat(bandar)
    let count_pair = 0
   
    for (const card of temp){
        const aCard = Card.getAngka(card)
        result.push(aCard)    
    }
    const pair_used = []
    for (let i = 0; i < result.length - 1; i++){
        if(pair_used.includes(result[i])){
            continue
        }
        for (let j = i + 1; j < result.length; j++){
        if(pair_used.includes(result[j])){
            continue
        }
            if (result[i] === result[j]){
                console.log(`${result[i]} = ${result[j]}`)
                count_pair += 1
                pair_used.push(result[i])
            }
        }
    }

    (count_pair > 2) ? count_pair = 2 : count_pair

    return count_pair
}

 const final_you = cekPair(you, dealer)
 if (final_you === 0) {
    console.log("You don't have a pair")
 } else {
    console.log(`You have ${final_you} pair`)
 }
 const final_enemy = cekPair(enemy, dealer)
  if (final_enemy === 0) {
    console.log("Enemy don't have a pair")
 } else {
    console.log(`Enemy have ${final_enemy} pair`)
 }


function whoWin (player, enemy){
    if (player === enemy){
        return "Draw"
    } else if (player > enemy) {
        return "You Win"
    } else {
        return "Enemy Win"
    }
}

console.log(whoWin(final_you,final_enemy))
