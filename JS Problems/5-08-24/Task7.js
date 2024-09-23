// Write a class called Rectangle that represents a rectangular two-dimensional region. It should have the following constructor:

// constructor(x, y, width, height)
// Returns a string representation of this rectangle, as [x=1, y=2, width=3, height=4].

class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}
const obj = new Rectangle(1, 2, 3, 4);
console.log(obj);
