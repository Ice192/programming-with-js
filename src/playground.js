class Person {
    constructor(name) {
        this.name = name
    }
    sayhello (name) {
        const say = console.log(`Hello ${name}, my name is ${this.name}`)
        return say
        }
}
const eko = new Person("Eko")

console.log(eko)
eko.sayhello("Budi")


// Getter Setter
class Configuration {
    static name = "Belajar Javascript"
    static version = 1.0
    static author = "Rais"
}

const config = new Configuration()
console.log(config)
Configuration.author = "Ina"
console.log(Configuration.name)
console.log(Configuration.version)
console.log(Configuration.author)


