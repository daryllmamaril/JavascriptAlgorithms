// SLIDING WINDOW PATTERN

//NAIVE SOLUTION (Time Complexity O(N^2))
function maxSubArraySum1(array, num) {
  if (array.length < num) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < array.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += array[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
console.log(maxSubArraySum1([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); //19

//BEST PRACTICE
function maxSubArraySum(array, num) {
  //
}
console.log(maxSubArraySum1([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); //19
