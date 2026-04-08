function FirstNested ()  {
    for (let i = 1; i <= 7; i++) {
        let line = ""
        for (let j = 7; j > i; j--) {
            line += "*" + ""
    }
    console.log(line)
}
}

FirstNested()

function SecondNested ()  {
    let line = ""
    for (let i = 0 ; i < 7; i++) {
        line += "#"
        for (let j = 0; j < i; j++) {
            line += " "
            // if(i === j) {
            //     line += ""
            // } else {
            //     line += "#"
            // }
    }
    line += "#\n"
}
console.log(line)
}

SecondNested()