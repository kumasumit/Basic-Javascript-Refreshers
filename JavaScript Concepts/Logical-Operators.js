var x = "sumit";
var y = 220;
var z = 0;

//And Opearator
console.log(x && y, y && x, z && y, y && z);
//here in case 1,2 and 4 all first values are truthy, 2nd value is returned
//in case 3, first value is falsy, z=0, so first value is returned,
//control never goes to 2nd value.

//Or Opearator
console.log(x || y, y || x, z || y, y || z, x || z, z || x);
//here when first value is truthy, that it is returned
//here when first value is falsy, always 2nd value is returned.

//Dynamic Typing
let b = 9;
console.log(typeof b);
b = "name";
console.log(typeof b);
//Variables have no type, only values have types.
//Javascript is a dynamic typed language, type is checked at run time and not compile time
//like c,c++ or java.
console.log(isNaN("11"), isNaN(true), isNaN("sumit"));
