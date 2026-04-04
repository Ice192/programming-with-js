function oceanLevel (year) {
    let ocean;
    for(let i = 1; i <= year; i++){
        ocean = 1.6 * i
        console.log(`${i} year, the ocean rising at ${ocean}`)
    }
    return ocean
}

module.exports = {
    oceanLevel
}