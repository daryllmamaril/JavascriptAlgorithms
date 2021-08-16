// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

const array1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const array2 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
//--> [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13];

function snail(array) {
  let finalArray = [];
  while (array.length) {
    finalArray.push(...array.shift());
    for (var i = 0; i < array.length; i++) {
      finalArray.push(array[i].pop());
    }
    finalArray.push(...(array.pop() || []).reverse());
    for (var i = array.length - 1; i >= 0; i--) {
      finalArray.push(array[i].shift());
    }
  }
  return finalArray;
}

console.log(snail(array1)); // --> [1,2,3,6,9,8,7,4,5]
console.log(snail(array2));
