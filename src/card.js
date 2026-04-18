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
    return this.cards
    }

    get Angka (card){
        const angka = card.split("  ")
        return angka[1]
    }

    get Symbol (card) {
        const symbol = card.split("  ")
        return symbol[0]
    }

    get Color (card) {
    let color = "black"
    let symbol = this.getSymbol(card)
    if (symbol === "❤️" || symbol === "♦️"){
        color = "red"
    }

    return color
    }
}

class Player extends Card{
    constructor(name, total) {
        super(cards)

        this.name = name
        this.totalCard = total
        this.myCard = []
    }

    takeCard (){
        for (let i = 0; i < this.totalCard; i++){
        const pick = Math.floor(Math.random() * this.cards.length)

        const take = this.card.splice(pick,1)
        this.myCard.push(take[0])
    }
    return this.myCard
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
console.log(afterShuffle)

const player1 = new Player('Player', 2)

player1.takeCard()
console.log(player1)

// function player (card, total){
//     const result = []
//     for (let i = 0; i < total; i++){
//         const pick = Math.floor(Math.random() * card.length)

//         const take = card.splice(pick,1)
//         result.push(take[0])
//     }

//     return result
// }

// const you = player(final_card, 2)
// const enemy = player(final_card, 2)
// const bandar = player(final_card, 5)
// console.log("you",you)
// console.log("Enemy",enemy)
// console.log(bandar)

// console.log(final_card)

// function cekPair (card, bandar){
//     const result = []
//     const temp = card.concat(bandar)
//     let count_pair = 0
   
//     for (const card of temp){
//         const aCard = getAngka(card)
//         result.push(aCard)    
//     }
//     const pair_used = []
//     for (let i = 0; i < result.length - 1; i++){
//         if(pair_used.includes(result[i])){
//             continue
//         }
//         for (let j = i + 1; j < result.length; j++){
//         if(pair_used.includes(result[j])){
//             continue
//         }
//             if (result[i] === result[j]){
//                 console.log(`${result[i]} = ${result[j]}`)
//                 count_pair += 1
//                 pair_used.push(result[i])
//             }
//         }
//     }

//     (count_pair > 2) ? count_pair = 2 : count_pair

//     return count_pair
// }

//  const final_you = cekPair(you, bandar)
//  if (final_you === 0) {
//     console.log("You don't have a pair")
//  } else {
//     console.log(`You have ${final_you} pair`)
//  }
//  const final_enemy = cekPair(enemy, bandar)
//   if (final_enemy === 0) {
//     console.log("Enemy don't have a pair")
//  } else {
//     console.log(`Enemy have ${final_enemy} pair`)
//  }


// function whoWin (player, enemy){
//     if (player === enemy){
//         return "Draw"
//     } else if (player > enemy) {
//         return "You Win"
//     } else {
//         return "Enemy Win"
//     }
// }

// console.log(whoWin(final_you,final_enemy))
