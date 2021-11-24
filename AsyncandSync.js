setTimeout(() => {
  console.log("inside timeout");
}, 0);

console.log("hi this is sumit");
//here inside timeout will always be executed after hi this is sumit, because timeout is an async function

const myPromise = new Promise((resolve, reject) => {
  resolve("hello");
});

console.log(myPromise);
