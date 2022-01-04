const users = [
  { firstName: "Kumar", lastName: "Sumit", age: 11 },
  { firstName: "Jai", lastName: "Anand", age: 21 },
  { firstName: "Utkarsha", lastName: "Pandey", age: 21 },
  { firstName: "Shalini", lastName: "Gupta", age: 31 },
];

const output = users.reduce(function (acc, user) {
  if (acc[user.age]) {
    //this checks is age value is already present, if yes it incements it by 1
    ++acc[user.age];
  } else {
    acc[user.age] = 1; //the age value is not there it assigns it a acc value to 1 for 1st occurence.
  }
  return acc;
}, {});
console.log(output);

//Filter and Map
const ageLessThan30 = users
  .filter((user) => user.age < 30)
  .map((user) => user.firstName);

console.log(ageLessThan30);

//Achieving the same through reduce.
const newAgeLessThan30 = users.reduce((acc, user) => {
  if (user.age < 30) {
    acc.push(user.firstName);
  }
  return acc;
}, []);
console.log(newAgeLessThan30);
