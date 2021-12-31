//Dummy data set and use of Promises
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
  return new Promise((resolve, reject) => {
    datas.push(newData);
    let error = false;
    if (!error) {
      resolve();
    } else {
      reject("kuck error hain");
    }
  });
}

createData({ name: "jai", age: 90 })
  .then(getdatas)
  .catch((err) => console.log(err));
