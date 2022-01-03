a(); //function statements support hoisting
console.log(b); // here b is treated as a variable and b is hoisted as a variable not a function
// b();
//Function Declarations and Function Statements
function a() {
  console.log("a is called");
}
//Function Expressions
var b = function () {
  console.log("b is called");
};
b();

//First class Functon
var c = function (param1) {
  console.log(param1);
};
c(b); // here b is a function which is passed as a value in function c which makes c a first class function.
//functions which take another function as a parameter or pass another function as a value, or return another function are called first class functions.
//Here c is a first class function, which takes b as an argument.
//here b is treated as a value passed in c.
