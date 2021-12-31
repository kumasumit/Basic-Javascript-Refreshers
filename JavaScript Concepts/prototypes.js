//Objects have the highest hierarchy in prototype
const obj1 = {
  name: "Sumit",
  getName: function () {
    return this.name;
  },
  getRoll: function () {
    return this.roll;
  },
};
const obj2 = {
  name: "Atul",
  roll: 12,
  __proto__: obj1,
};
// console.log(obj2);
// console.log(obj2.getName());
//here we get atul because getname will search for this in calling scope obj2 for name,
//since it is atul, it will return atul.
// if name is not there in obj2, it will return name of parent scope that is object 1.
// console.log(obj2.getRoll());

const obj3 = {
  class: "MBA",
  __proto__: obj2,
};
// console.log(obj3);
// console.log(obj3.getName());
// console.log(obj3.getRoll());
//here obj3 is getting nae and roll from obj2 and getName and getRoll from obj1.

//Array prototypes
const arr = ["Ajay", "amit", "rahul", "srijana"];
// console.log(arr);
Array.prototype.show = function () {
  return this;
};
console.log(arr.show());
//A user defined function to convert array into an object
Array.prototype.convertIntoObject = function () {
  let newObj = {};
  this.forEach((element, index) => (newObj[index] = element));
  return newObj;
};
console.log(arr.convertIntoObject());

//How to make a new user defined Prototype:
function MyPrototype(name, roll) {
  this.name = name;
  this.roll = roll;
}
MyPrototype.prototype = obj1;
const myproto = new MyPrototype("Utkarsha", 23);
console.log(myproto);
//If you want to add methods of different object, use

//this gives access to getName and getRoll functions
console.log(myproto.getName());
console.log(myproto.getRoll());
//note this will not give you access to any variables other than
//name and roll.
