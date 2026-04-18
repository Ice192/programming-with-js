const simbol = ['♠️', '❤️', '♦️', '♣️']
const angka = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']


function setCard (simbol, angka) {
    const card = []
    for (const x of angka){
        for (const y of simbol){
            card.push(y+'  '+x)
        }
    }
    return card
}

const card = setCard(simbol,angka)
console.log(card)

function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = 1; j < arr.length; j++){
        
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        }
    }
    return arr
}

function totalShuffle(arr, iteration){
    for (let i = 0; i < iteration; i++){
        shuffle(arr)
    }

    return arr
}

// const random_shuffle = Math.floor(Math.random() * 100) + 1
// console.log(totalShuffle(card, random_shuffle))


function reshuffle(arr) {
    const result = []
    for (let i = 0; i < arr.length; i++){
        const index = Math.floor(Math.random()*arr.length - 1)
        
        result.push(arr[index])
    }
    return result
}

// console.log(reshuffle(card))

function thirdShuffle(arr) {
    for (let i = 0; i < 1000; i++){
        const a = Math.floor(Math.random() * (arr.length - 1))
        const b = Math.floor(Math.random() * (arr.length - 1))

        if (a === b){
            continue
        }

        const temp = arr[a]
        arr[a] = arr[b]
        arr[b] = temp
    }
    return arr
}

const final_card = thirdShuffle(card)

function player (card, total){
    const result = []
    for (let i = 0; i < total; i++){
        const pick = Math.floor(Math.random() * (card.length - 1))

        const take = card.splice(pick,1)
        result.push(take[0])
    }

    return result
}

const you = player(final_card, 2)
const enemy = player(final_card, 2)
const bandar = player(final_card, 5)
console.log("you",you)
console.log("Enemy",enemy)
console.log(bandar)

console.log(final_card)

function getAngka (card){
    const angka = card.split("  ")
    return angka[1]
}

function getSymbol (card) {
    const symbol = card.split("  ")
    return symbol[0]
}

function getColor (symbol) {
    let color = "black"
    if (symbol === "❤️" || symbol === "♦️"){
        color = "red"
    }

    return color
}

function cekPair (card, bandar){
    const result = []
    const temp = card.concat(bandar)
    let count_pair = 0
   
    for (const card of temp){
        const aCard = getAngka(card)
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

 const final_you = cekPair(you, bandar)
 if (final_you === 0) {
    console.log("You don't have a pair")
 } else {
    console.log(`You have ${final_you} pair`)
 }
 const final_enemy = cekPair(enemy, bandar)
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


// UI function
function getCardUI (card){
    const symbol = getSymbol(card)
    const color = getColor(symbol)

    const myElement = document.createElement("div")
    myElement.classList.add("card", color)
    myElement.innerHTML = card

    return myElement
}

const button_play = document.querySelector('#play')

button_play.addEventListener('click', () => {
    const playerContainer = document.querySelector('#player')
    const enemyContainer = document.querySelector('#enemy')
    const dealerContainer = document.querySelector('#dealer')

    // player
    for (const x of you) {
        const el = getCardUI(x)
        playerContainer.append(el)
    }

    // enemy
    for (const x of enemy) {
        const el = getCardUI(x)
        enemyContainer.append(el)
    }

    // dealer
    for (const x of bandar) {
        const el = getCardUI(x)
        dealerContainer.append(el)
    }
})

// document.addEventListener('DOMContentLoaded', (ev) => {
//     const player = document.querySelector('#player')
//     for(const x of you){
//         const myElement = getCardUI(x)
//         player.append(myElement)
//     }
// })