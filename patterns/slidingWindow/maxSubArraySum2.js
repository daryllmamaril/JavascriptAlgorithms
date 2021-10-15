// SLIDING WINDOW

// Same as maxSubArray.js (extra practice)
// Given an array of integers and a number, write a function which finds the maximum sum of a subarray with the length of the number passed to the function. NOTE: that a subarray must consists of consecutive elements from the original array. In the first example below [100, 200, 300] is the subarray of the original array, but [100, 300] is not.

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

console.log(maxSubArraySum([100, 200, 300, 400], 2)); //700
console.log(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); //39
console.log(maxSubArraySum([-3, 4, 0, -2, 6, -1], 2)); //5
console.log(maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); //5
console.log(maxSubArraySum([2, 3], 3)); //null
