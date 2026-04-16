const simbol = ['♠️', '❤️', '♦️', '♣️']
const angka = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']



function setCard (simbol, angka) {
    const card = []
    for (const x of simbol){
        for (const y of angka){
            card.push(x+'  '+y)
        }
    }
    return card
}

const card = setCard(simbol,angka)
console.log(card)

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for(let j = 0; j < arr.length; j++){
        
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        }
    }
    return arr
}

console.log(shuffle(card))
console.log(shuffle(card))
