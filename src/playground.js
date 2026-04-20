// class Rectangle {
//     //setup object
//     constructor(_width, _height, _color){
//         console.log('The rectangle is being created');

//         this.width = _width;
//         this.height = _height;
//         this.color = _color;
//     }

//     getArea() {
//         return this.width * this.height
//     }

//     printDescription () {
//         console.log(`I'm a rectangle of ${this.width}`)
//     }
// }

// let myRectangle1 = new Rectangle(5, 4, 'Red')
// let myRectangle2 = new Rectangle(51, 42, 'Blue')
// console.log(myRectangle1.getArea())
// console.log(myRectangle2.printDescription())


// class Square {
//     constructor(width) {
//         this.width = width
//         this.height = width
//         this.numOfRequestArea = 0 
//     }

//     get area () {
//         this.numOfRequestArea ++
//         return this.width * this.height
//     }

//     set area (area) {
//         this.width = Math.sqrt(area)
//         this.height = this.width
//     }
// }

// let square1 = new Square(25)
// console.log(square1.area)

// square1.area = 250

// console.log(square1.area)
// console.log(square1.area)
// console.log(square1.area)
// console.log(square1.area)

// console.log(square1.numOfRequestArea)


class Square {
    constructor(width) {
        this.width = width
        this.height = width
    }

    static equals (a, b) {
        return a.width * a.height === b.width * b.height 
    }

}

let square1 = new Square(6)
let square2 = new Square(6)

// console.log(Square.equals(square1, square2))

const myArray = [1,2,3,4,5]

const mySet = new Set(myArray)

const addArray = myArray.map(number => number + 2)

const products = [
    {name: "Laptop", price: 499, color: "white"},
    {name: "Smartphone", price: 899, color: "black"},
    {name: "Headphones", price: 50, color: "white"},
    {name: "Tablet", price: 199, color: "gray"},
    {name: "Keyboard", price: 210, color: "blue"}
]

const discount = products.map((product) => {
    return {
        ...product,
        price: product.price * 0.5
    }
})

const productNames = products.map((product) => {
    return product.name
})
const price = products.price
const affordableProducts =
 products.filter(product => product.price < 200)
const totalPrice = myArray.reduce ((total, currentPrice) => {
    return total + currentPrice
})

console.log(discount)
console.log(affordableProducts)
console.log(productNames)

console.log(totalPrice)