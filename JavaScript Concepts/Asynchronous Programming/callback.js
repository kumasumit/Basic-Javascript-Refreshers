//Dummy data set and use of Callback
var datas = [
  { name: "Kumar", age: 23 },
  { name: "rahul", age: 34 },
  { name: "amit", age: 37 },
];

function getdatas() {
  let output = "";
  datas.forEach((data) => {
    output += `<li>${data.name}</li>`;
  });
  document.body.innerHTML = output;
}

function createData(newData, callback) {
  datas.push(newData);
  callback();
}

createData({ name: "sumit", age: 90 }, getdatas);
