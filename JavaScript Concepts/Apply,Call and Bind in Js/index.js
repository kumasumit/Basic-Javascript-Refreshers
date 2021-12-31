let userDetails = {
  name: " Sumit",
  age: 25,
  printDetails: function (state, country) {
    console.log(this.name, state, country);
  },
};
userDetails.printDetails.call({ name: "Kumar Sumit" });
//the printDetails is now pointing to the name Object with name: Kumar Sumit.

userDetails.printDetails.apply({ name: "Sumit Kumar" }, ["Delhi", "India"]);
//apply function is same as call function. Only difference is 2nd Argument is passed in form of Array.

//Bind is like call, the only difference is that it returns the copy of the function
let newfun = userDetails.printDetails.bind({ name: "Sneha" });
newfun();

//In bind, we copy the function in a new function, and return the copy to be invoked later.
