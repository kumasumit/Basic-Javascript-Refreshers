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

async function createData(newData, callback) {
  await datas.push(newData);
  getdatas();
}

createData({ name: "sushma", age: 90 }, getdatas);
