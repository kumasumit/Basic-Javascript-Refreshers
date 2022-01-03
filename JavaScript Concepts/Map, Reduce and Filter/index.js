//Sort Function
const ages = [12, 23, 45, 67, 78, 90];
const sortedAges = ages.sort((a, b) => a - b);
//this is sort in ascending order from lowest to highest
// console.log(sortedAges);
const descAges = ages.sort((a, b) => b - a);
// console.log(descAges);

//Reduce Function
const sumAges = ages.reduce((total, age) => total + age, 0);
//here 0 is initial value of total.
// console.log(sumAges);

//Map function
//Map function is used to transform an array.
const arr = [3, 5, 6, 7];
function binary(x) {
  return x.toString(2);
}
const output = arr.map(binary);
console.log(output);
