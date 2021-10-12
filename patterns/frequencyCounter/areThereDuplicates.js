// USING FREQUENCY COUNTER PATTERN

// Implement a function that accepts a variable number of arguments and checks whether there are any duplicates among the arguments passed in.
// Time Complexity should be O(N)

// MY SOLUTION
function areThereDuplicates() {
  const inputArray = Object.values(arguments);
  let obj = {};

  for (let val of inputArray) {
    obj[val] = (obj[val] || 0) + 1;
  }

  for (let key in obj) {
    if (obj[key] > 1) {
      return true;
    }
  }
  return false;
}

// COLT'S SOLUTION
function areThereDuplicates2() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); //false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); //true
