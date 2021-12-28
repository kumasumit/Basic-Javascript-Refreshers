console.log(a);
// console.log(f);
console.log(square(4));
console.log(square);
// console.log(square1);

function square(num) {
  return num * num;
}

const square1 = (num) => {
  return num * num;
};
var a = 5;
let f = 6;
console.log(square1(6));

//arrow functions behave like let and const variables and will throw error
//cannot acces before initialization like let and const varialbles.
//variables declared with var will log undefined, from the execution Context;
