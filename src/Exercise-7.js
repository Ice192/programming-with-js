function Charges (pound) {
    if (pound <= 2) {
        return pound * 1.5
    } else if ( pound <= 6){
        return pound * 3
    } else if ( pound <= 10){
        return pound * 4
    } else if (pound > 10) {
        return pound * 4.75
    } else {
        console.log("Invalid Input")
    }
}

module.exports = {
    Charges
}