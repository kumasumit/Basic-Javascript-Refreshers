//Implicit type coercion
//String Coercion
let a = 3,
  b = "3";
console.log(a + b);
//Output is 33 number is coerced in string type.
console.log("24" + a);
//Output is 243 number is coerced in string type.

//Number Coercion
console.log(a - b);
//Output is 0 string is coerced in number type.
console.log("243" - a);
//Output is 240 string is coerced in number type.

//Boolean Coercion
//All values except 0, null, "", undefined, NaN are truthy values.
var x = 0;
var y = 23;
if (x) {
  console.log(x);
} //this will not run since 0 is coerced to boolean false.
if (y) {
  console.log(y);
} //this will not run since 23 is coerced to boolean true.
