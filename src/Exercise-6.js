function Cond1 (num) {
    if (num % 2 == 0){
            console.log(`Pocket ${num} are Black`)
        }
        else {
            console.log(`Pocket ${num} are Red`)
        }
}

function Cond2 (num) {
    if (num % 2 != 0){
            console.log(`Pocket ${num} are Black`)
        }
        else {
            console.log(`Pocket ${num} are Red`)
        }
}

function Roulette (num){
    if (num == 0) {
        console.log(`Pocket ${num} is Green`)
    } else if (num <= 11 ) {
        Cond1(num)
    } else if (num <= 18 ) {
        Cond2(num)
    }  else if (num <= 28 ) {
        Cond1(num)
    } else if (num <= 36 ) {
        Cond2(num)
    } else {
        console.log(`Invalid Input`)
    }
    // for (num; 0 <= num >= 10; num++) {
    //     if(num == 0) {
    //         console.log(`Pocket ${num} is Green`)
    //     }
    //     else if(num % 2) {
    //         console.log(`Pocket ${num} are Black`)
    //     } else {
    //         console.log(`Pocket ${num} are Red`)
    //     }    
    // }

    // for (num; 10 < num >= 18; num++) {
    //     if(num % 2) {
    //         console.log(`Pocket ${num} are Red`)
    //     } else {
    //         console.log(`Pocket ${num} are Black`)
    //     }
    // }

    // for (num; 18 < num >= 28; num++) {
    //     if(num % 2) {
    //         console.log(`Pocket ${num} are Black`)
    //     } else {
    //         console.log(`Pocket ${num} are Red`)
    //     }
    // }

    // for (num; 28 < num >= 36; num++) {
    //     if(num % 2) {
    //         console.log(`Pocket ${num} are Red`)
    //     } else {
    //         console.log(`Pocket ${num} are Black`)
    //     }
    // }
    // return
}

for(let i = 0; i <= 36; i++ ) {
  Roulette(i)
}

module.exports = {
    Roulette
}