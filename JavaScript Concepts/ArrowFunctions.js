var obj2 = {
  valueOfThis: () => {
    return this;
  },
};
var obj1 = {
  valueOfThis: function () {
    return this;
  },
};
console.log(obj2.valueOfThis());
//returns window object in browser console, here there is no parent scope, it returns {}.
//In arrow function there is no binding to calling object
console.log(obj1.valueOfThis());
//returns object1 valueOfThis(){} since this is bound to the calling object, object1, in this case.
//In normal functions, there is binding to this, so it returns calling object, obj1 in this case.
