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
      //console.log(i, j);
      temp += array[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
console.log(maxSubArraySum1([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); //19

//BEST PRACTICE (Time Complexity O(N))
function maxSubArraySum(array, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (array.length < num) {
    return null;
  }
  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;
  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}
console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); //19
console.log(maxSubArraySum([2, 6], 3)); //null
