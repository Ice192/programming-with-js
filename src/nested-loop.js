function FirstNested ()  {
    for (let i = 1; i <= 7; i++) {
        for (let j = 7; j > i; j--) {
            process.stdout.write(`* `)
    }
    console.log()
}
}

FirstNested()

function SecondNested ()  {
    for (let i = 3; i < 9; i++) {
        for (let j = 1; i > j; j++) {
            if(i === j) {
                process.stdout.write(` `)
            } else {
                process.stdout.write(`#`)
            }
    }
    console.log()
}
}

SecondNested()