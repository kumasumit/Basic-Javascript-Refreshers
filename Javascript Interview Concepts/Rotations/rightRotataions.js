//Return an array after r right rotations
function rRightRotations(array, rotations) {
  if (rotations <= 0) return array;
  else {
    for (let i = 0; i < rotations; i++) {
      let element = array.pop();
      array.unshift(element);
    }
  }
  return array;
}
const array = [2, 3, 4, 5, 6, 7];
console.log(rRightRotations(array, -1));
console.log(rRightRotations(array, 1));
console.log(rRightRotations(array, 2));
console.log(rRightRotations(array, 3));

//here sunsequent rotations are being performed on the returned rotated array, and not the orginal array.
