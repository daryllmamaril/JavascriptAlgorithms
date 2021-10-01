// FREQUENCY PATTERN

// MY SOLUTION - Time Complexity: O(n2)
function same(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  array1.forEach((num1) => {
    let square = num1 * num1;
    if (array2.includes(square)) {
      array2.splice(array2.indexOf(square), 1);
    }
  });
  return array2.length === 0;
}

// BEST PRACTICE - Time Complexity: O(n)
function same2(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of array1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of array2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
console.log(same2([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])); //false
console.log(same1([1, 2, 3], [4, 1, 9])); //true
console.log(same2([1, 2, 3], [1, 9])); //false
console.log(same2([1, 2, 1], [4, 4, 1])); //false(frequency must be the same)
console.log(same2([10, 4, 5], [16, 100, 25])); //true
