const radius = [3, 4, 5, 6];
const area = function (radius) {
  return Math.PI * radius * radius;
};

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};
//here we have added calculate to our array prototype, it means
//all our arrays have access to calculate function.
//here calculate is a polyfill for map function in Javascript.
//Calculate is a higher order function and area is a callback passed to higher order function calculate.

console.log(radius.calculate(area));
console.log(radius.map(area));
//both will give the same output.
//because calculate is a polyfill for map function.

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

console.log(radius.calculate(circumference));
console.log(radius.map(circumference));
