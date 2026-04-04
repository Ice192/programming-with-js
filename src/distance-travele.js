function distanceTravel (speed, hour) {
    let distance

    for(let i = 1; i <= hour; i++){
        distance = speed * i
        console.log(`${i} hours - ${distance} miles` )
    }
    return distance 
}

module.exports = {
    distanceTravel
}