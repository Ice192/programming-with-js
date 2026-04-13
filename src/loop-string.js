const kalimatFavoritKu = "Tuhan memberikan manusia seluruh alam semesta, alam semesta yang memiliki triliunan planet. Mengapa kami masih saja hanya di planet bumi?"

function hitungKata (myArr){
let kumpulanKata = []
let kata = ""
    for (const x of myArr) {
        if (x !== " ") {
            kata += x
        } else {
            kumpulanKata.push(kata)
            kata = ""
        } 
    }   
    if (kata !== ""){
        kumpulanKata.push(kata)
    }
    const jumlahKata = kumpulanKata.length
    return jumlahKata
}


console.log(hitungKata(kalimatFavoritKu)) //20