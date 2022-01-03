//Concurrency Model and setTimeout
console.log("start");
setTimeout(() => {
  console.log("this is callback from setTimeout");
}, 0);
console.log("end");

//Now here even though the timer has a delay of 0 milliseconds.
//first start, then end is executed.
//then the call stack frees the gec(global execution context)
//only after call stack is empty, even loop pushes timeout from callbackqueue into the main thread or the call stack.
//also always remeber all synchronous functions are executed first, only after that
//asynchronous functions are executed.
