function show() {
  var a = 3;
  return function (num) {
    a = num;
    console.log(a);
  };
}

asd = show();
asd(12);
//best use case of closures is to implement getters and setters in Javascript.
