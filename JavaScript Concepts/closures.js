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

function show1() {
  var b = 9;
  return {
    get_b: function () {
      return b;
    },
    set_b: function (latest) {
      return (b = latest);
    },
  };
}

var store1 = show1();
console.log(store1.get_b());
console.log(store1.set_b(34));
