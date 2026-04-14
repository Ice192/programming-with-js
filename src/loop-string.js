const kalimatFavoritKu = "Tuhan memberikan      manusia                    seluruh alam semesta, alam semesta yang memiliki triliunan planet. Mengapa kami masih saja hanya di planet bumi?"

function hitungKata (myArr){
let kumpulanKata = []
let kata = ""
    for (const x of myArr) {
        
        if (x !== " ") {
            kata += x
        }
        else if (kata !== ""){
            kumpulanKata.push(kata)
            kata = ""
        }
        else if (x === " " ){
            kata = ""
        } 
    }

    if (kata !== ""){
            kumpulanKata.push(kata)
        }
    console.log(kumpulanKata)
    const jumlahKata = kumpulanKata.length
    return jumlahKata
}

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

function cekAlphabet (alphabet, kalimat) {
    const kumpulanHuruf = []
    for (const x of alphabet){
        let find = false
        for(const y of kalimat){
            if(x === y) {
                find = true
                break
            }
        }
        if (!find) {
            kumpulanHuruf.push(x)
        }

    }

    return kumpulanHuruf

    
}

console.log(hitungKata(kalimatFavoritKu)) //20

console.log(cekAlphabet(alphabet, kalimatFavoritKu))