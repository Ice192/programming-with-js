function Population (organism, increase, days) {
    increase /= 100
let population = organism
    for (let n = 1; n <= days; n++) {
        console.log(`${n} day : ${population} populations`)
        population += population * increase
    }

    return population
}

Population(2, 30, 10)