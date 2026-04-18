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

console.log(Square.equals(square1, square2))
