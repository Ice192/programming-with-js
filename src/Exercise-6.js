function Roulatte (){
    for (num = 0; 0 <= num >= 10; num++) {
        if(num = 0) {
            console.log(`Pocket ${num} is Green`)
        }
        else if(num % 2) {
            console.log(`Pocket ${num} are Black`)
        } else {
            console.log(`Pocket ${num} are Red`)
        }
    }

    for (num; 10 < num >= 18; num++) {
        if(num % 2) {
            console.log(`Pocket ${num} are Red`)
        } else {
            console.log(`Pocket ${num} are Black`)
        }
    }

    for (num; 18 < num >= 28; num++) {
        if(num % 2) {
            console.log(`Pocket ${num} are Black`)
        } else {
            console.log(`Pocket ${num} are Red`)
        }
    }

    for (num; 28 < num >= 36; num++) {
        if(num % 2) {
            console.log(`Pocket ${num} are Red`)
        } else {
            console.log(`Pocket ${num} are Black`)
        }
    }
    return
}

console.log(Roulatte())
module.exports = {
    Roulatte
}