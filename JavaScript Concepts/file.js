console.log("Hello World");
const arr = [1, 2, 3, 5, 6];

//array.map

const newarr = arr.map(function (value, index, arr) {
  return value * 2;
});
console.log(arr);
console.log(newarr);

//arr.reduce

const sum = newarr.reduce(function (acc, val) {
  return acc + val;
}, 0);
console.log(sum);

//String Interpolation

const name = "Sumit";
const age = 32;
const greeting = `Hi I am ${name} and my age is ${age}`;
console.log(greeting);

//Objects and Array destructuring

const person = {
  name: "Sumit",
  age: 12,
  hobby: "cricket, music",
};

//Spread operator

const extendedPerson = {
  ...person,
  nickname: "hello",
  greet: "wow",
};
console.log(extendedPerson);

// const name = person.name;
// const age = person.age;
// const hobby = person.hobby;

//this does exactly the same thing, the order has to be the same.
const { name: name1, age: myAge, ...newperson } = person;
console.log(name1, myAge, newperson);

console.log(age, myAge);

const elements = ["this", "is", "my", "array"];
const [first, second, ...newelements] = elements;
console.log(first, second, newelements); //here the order is important because arrays are stored in contiguous memory

//Spread Operator
const arr1 = [23, 45, 67];
const arr2 = [...elements, 67, ...arr1];
console.log(arr2);
