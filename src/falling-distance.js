function falling_distance (time) {
    const g = 9.8
    const distance = 1/2 * g * time * time

    return distance
}

module.exports = {
    falling_distance
}