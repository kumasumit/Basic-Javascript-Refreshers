//Rest operator
var students = {
  name: "Sumit",
  age: "28",
  hobbies: ["Cricket", "Singing"],
};

const { age, ...rest } = students;
console.log(age, rest);
//How to update values of an object
//Spread Operator
var newStudent = {
  ...students,
  age: 29,
};
//here new value of age:29 will over-ride old value of age:28
console.log(newStudent);
