// MULTIPLE POINTERS PATTERN

//Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There maybe more than one pair that matches the average target. Time Complexity must be O(N).

// BRUTE FORCE
function averagePair1(array, targetAvg) {
  if (array.length === 0) {
    return false;
  }
  if (array.length === 1 && array[0] === targetAvg) {
    return true;
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] / 2 === targetAvg) {
        return true;
      }
    }
  }
  return false;
}

// BEST PRACTICE USING MULTIPLE POINTERS PATTERN
function averagePair(array, targetAvg) {
  if (array.length === 0) {
    return false;
  }
  if (array.length === 1 && array[0] === targetAvg) {
    return true;
  }
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let avg = array[start] + array[end] / 2;
    if (avg === targetAvg) {
      return true;
    } else if (avg > targetAvg) {
      end--;
    } else {
      start++;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); //false
console.log(averagePair([2], 2)); //true
console.log(averagePair([7], 3)); //false
console.log(averagePair([], 4)); //false
