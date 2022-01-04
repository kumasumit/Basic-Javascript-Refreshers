//Map examples
const users = [
  { firstName: "Kumar", lastName: "Sumit", age: 31 },
  { firstName: "Jai", lastName: "Anand", age: 31 },
  { firstName: "Utkarsha", lastName: "Pandey", age: 31 },
  { firstName: "Shalini", lastName: "Gupta", age: 31 },
];

const output = users.map((user) => user.firstName + " " + user.lastName);
console.log(output);
//this will give the new array.
console.log(output.at(-1));
//will return last element of the array.
