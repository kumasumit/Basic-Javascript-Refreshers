function sayHello() {
  return "Hello" + this.name;
}
var obj = { name: "sumit" };
console.log(sayHello.call(obj));
//Returns Hellosumit

var person = {
  age: 23,
  getAge: function () {
    return this.age;
  },
};
console.log(person.getAge());
var person2 = { age: 34 };
console.log(person.getAge.call(person2));
