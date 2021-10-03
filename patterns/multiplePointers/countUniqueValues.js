// MULTIPLE POINTERS PATTERN

//Accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// MY SOLUTION
function countUniqueValues2(arr) {
  let count = 0;
  arr.forEach((num, i) => {
    if (num !== arr[i + 1]) {
      count++;
    }
  });
  return count;
}
// console.log(countUniqueValues2([1, 1, 1, 1, 1, 2])); //2
// console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
// console.log(countUniqueValues2([])); //0
// console.log(countUniqueValues2([-2, -1, -1, 0, 1])); //4

// BEST PRACTICE (Time Complexity O(N))
function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7])); //7
console.log(countUniqueValues2([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues2([-2, -1, -1, 0, 1])); //4
