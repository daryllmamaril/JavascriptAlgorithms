// MULTIPLE POINTERS PATTERN

//NAIVE SLOUTION (Time Complexity O(N^2), Space Complexity O(1))
function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
console.log(sumZero1([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3] <--first pair where the sum is 0

// BEST PRACTICE (Time Complexity O(N), Space Complexity O(1))
// This is only works for a sorted array
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return [];
}
console.log(sumZero([-4, -3, -2, -1, 0, 5, 10])); // [] <--return an empty array when no pair sums to 0.
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])); // [-3, 3] <--first pair where the sum is 0
