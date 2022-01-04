//Return an array after r left rotations
function rleftRoataions(arr, rotations) {
  if (rotations <= 0) return arr;
  else {
    for (let i = 0; i < rotations; i++) {
      let first = arr.shift(); //removes first element from array.
      arr.push(first); //pushes the first removed element tp teh back of the array.
    }
  }
  return arr;
}
const arr = [2, 3, 4, 5, 6, 7];
console.log(rleftRoataions(arr, -1));
console.log(rleftRoataions(arr, 1));
console.log(rleftRoataions(arr, 2));
console.log(rleftRoataions(arr, 3));

//here subsequent rotations are being performed on the returned rotated array, and not the orginal array.
