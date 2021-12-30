var a = 2;
b = a;
a = 3;
console.log(a, b);
var obj1 = {
  name: "atul",
  age: 34,
};
var obj = obj1;
obj.name = "kumar";
console.log(obj1, obj);
var arr1 = [1, 2, 4, 5];
var arr = arr1;
arr.pop();
console.log(arr, arr1);
