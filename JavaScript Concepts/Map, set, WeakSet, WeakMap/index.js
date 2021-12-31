//Map, set , weakSet and Weakmap
"use strict";
//set, contains only unique values,
//it contains only unique values,
//Object Constructor
let myArray = [1, 2, 3, 4];
let set1 = new Set(myArray);
console.log(set1);
//set1 now belongs to Set Prototype
set1.add(5);
set1.delete(2);
//here delete takes in the value required to delete the file.
// console.log(set1.size);
let obj = {
  name: "Sumit",
};
set1.add(obj);
// console.log(set1);
// set1.forEach((ele) => console.log(ele));
//You can see and verify all methods from the Set Prototype.

//Map key-value pairs
let myMap = new Map([
  ["a1", "Ajay"],
  ["a2", "Vikash"],
]);
// console.log(myMap);
myMap.set("a3", "Jai");
myMap.set("a2", "Sushma");
//here since a2 is already present with value Vikash, we over-ride it with Jai
// console.log(myMap);
// console.log(myMap.get("a2"));
//here get takes key as an argument.
//map does not allow duplicates.
// myMap.forEach((key, value) => console.log(value, key));

//Weak Set
let ws = new WeakSet();
//it contains only objects, no other data types.
//it does not support forEach. You cannot iterate.
// ws.add(1); // will throw invalid data types as only objects are allowed.
var obj4 = { name: "Tiger", height: 6 };
ws.add(obj4);
console.log(ws);

//Weak Map
let wm = new WeakMap();
//it contains only objects, no other data types.
//it does not support forEach. You cannot iterate.
var obj6 = {};
var obj7 = {};
wm.set(obj6, "Private");
wm.set(obj7, "Public");
console.log(wm);
