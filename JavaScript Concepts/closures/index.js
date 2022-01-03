function outest() {
  var c = 10;
  function outer(b) {
    var a = 20;
    function inner() {
      console.log(a, b, c, d);
    }
    // let d = 34;
    return inner;
  }
  return outer;
}

let d = 45; // here if d is not there in outer, it searches in outest, if it is not in outest, it searches in the global scope.
var close1 = outest(); //this will return outer
var close2 = close1("Hi this is sumit"); //this will return inner
close2(); // this will run/call the inner function

//Data Hiding and Encapsulation, using Private Variables in Javascript.
function counter() {
  var count = 0;
  return function incrementCount() {
    count++;
    console.log(count);
  };
}

var counter1 = counter(); // returns increment count function.
counter1(); //Increments count from 0 to 1.
counter1(); //increments count from 1 to 2.

var counter2 = counter(); // returns new copy of increment count function.
//here we have new copy of incrementCount, with count variable initialized to 0.
counter2(); // Increments new copy of count from 0 to 1.
counter2(); // Increments new copy of count from 1 to 2.

var counter3 = counter(); // returns new copy of increment count function.
//here we have new copy of incrementCount, with count variable initialized to 0.
counter3(); // Increments new copy of count from 0 to 1.
counter3(); // Increments new copy of count from 1 to 2.

//If you want to write scalabale code for counters, use Constructor function Counter.
function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

var counter4 = new Counter();
counter4.incrementCounter(); //here we are using constructors to increment and decrement counters, from outside he scope.
counter4.incrementCounter();
counter4.decrementCounter();

//Smart garbage collection of closures.
function f() {
  var e = 10;
  var g = 89;
  return function k() {
    console.log(e);
  };
}

var i = f();
i();
//here both e and g are closed with inner function k , but since g is not used
//it is garbage collected with modern web browesers.
