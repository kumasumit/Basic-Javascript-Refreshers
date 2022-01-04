//This is a binary search on a sorted Array by Recursion
function binarySearch(arr, value, startPos, endPos) {
  //here value is the va;lue to be searched.
  if (startPos > endPos) return -1; //Base case.
  middleIndex = Math.floor(startPos + endPos) / 2;
  if (arr[middleIndex] === value) return middleIndex;
  else if (arr[middleIndex] > value)
    return binarySearch(arr, value, startPos, middleIndex - 1);
  else {
    return binarySearch(arr, value, middleIndex + 1, endPos);
  }
}
const arr1 = [2, 34, 67, 89, 98, 109];
console.log(binarySearch(arr1, 98, 0, 5));
