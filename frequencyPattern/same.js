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
  //
}
console.log(same2([1, 2, 3], [4, 1, 9])); //true
console.log(same2([1, 2, 3], [1, 9])); //false
console.log(same2([1, 2, 1], [4, 4, 1])); //false(frequency must be the same)
console.log(same2([10, 4, 5], [16, 100, 25])); //true
