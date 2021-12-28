//the apply method is similar to call() method, the only difference is that,
//call method takes arguments separately whereas apply() method takes arguments as an array.

function saySomething(message) {
  return this.name + " is " + message;
}
var person = { name: "Sumit" };
console.log(saySomething.apply(person, ["awesome"]));
//output: sumit is awesome
