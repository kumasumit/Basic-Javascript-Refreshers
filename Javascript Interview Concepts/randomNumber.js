//Write a program to generate a random number between 2 numbers,
// both inclusive
function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  return Math.floor(Math.random() * rangeEnd - rangeStart + rangeStart);
}

console.log(`My random number is ${randomNumberGeneratorInRange(5, 100)}`);
