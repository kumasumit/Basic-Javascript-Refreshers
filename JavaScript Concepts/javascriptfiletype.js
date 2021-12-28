console.log(typeof "sumit");
console.log(typeof 123);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof false);
console.log(typeof sumit);

//typeof returns udefined for anytype which is not predefined
//typeof null returns object.

//None primitive data types in Javascript are Arrays and Objects.
let people = {
  name: "sumit",
  email: "people@123",
  phone: 5678902345,
};
//Objects store data in key value pairs like dictionary in python

let ans = [4, "hello", "hi"];
//Arrays store data in an ordered list
console.log(people, ans);
//Equality Operators
var x = 2;
var y = "2";
console.log(x == y);
console.log(x === y);
