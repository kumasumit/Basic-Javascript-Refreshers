// Requiring fs module in which
// readFile function is defined.
const fs = require("fs");

// Reading data in utf-8 format
// which is a type of character set.
// Instead of 'utf-8' it can be
// other character set also like 'ascii'
fs.readFile("trail.txt", "utf-8", (err, data) => {
  if (err) throw err;

  // Converting Raw Buffer to text
  // data using tostring function.
  console.log(data);
});

//Program to write data to a file.
// Data which will write in a file.
let data = "Learning how to write in a file."
  
// Write data in 'Output.txt' .
fs.writeFile('Output.txt', data, (err) => {
      
    // In case of a error throw err.
    if (err) throw err;
})