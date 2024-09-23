// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument.
// The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).

//Examples
// let circy = new Circle(11)
// circy.getArea()

// // Should return 380.132711084365
// let circy = new Circle(4.44)
// circy.getPerimeter()

// // Should return 27.897342763877365

class Circle {
  constructor(r) {
    this.r = r;
  }
  getArea() {
    return Math.PI * Math.pow(this.r, 2);
  }
  getPerimeter() {
    return 2 * Math.PI * this.r;
  }
}
let circy = new Circle(11)
console.log(circy.getArea());
console.log(circy.getPerimeter());


