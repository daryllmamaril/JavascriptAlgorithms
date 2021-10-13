// Implement a function that accepts a variable number of arguments and checks whether there are any duplicates among the arguments passed in.
// Time Complexity should be O(N)

// USING FREQUENCY COUNTER PATTERN:
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

// console.log(areThereDuplicates(1, 2, 3)); //false
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates("a", "b", "c", "a")); //true

//
//
//
//
//

// USING MULTIPLE POINTERS PATTERN (Two pointers) (Doesnt work for mixed type arguments)
function areThereDuplicates3(...args) {
  let start = 0;
  let next = 1;

  if (typeof args[0] === "string") {
    args.sort();
  } else {
    args.sort((a, b) => a - b);
  }

  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
console.log(areThereDuplicates3(1, 2, 3)); //false
console.log(areThereDuplicates3(1, 4, 2, 2, 3, 4, 5, 6, 7, 8, 9)); //true
console.log(areThereDuplicates3(1, 2, 2)); // true
console.log(areThereDuplicates3("a", "b", "c", "a")); //true
console.log(areThereDuplicates3("antler", "zebra", "tiger", "dog")); //false
console.log(areThereDuplicates3("antler", "dog", "zebra", "tiger", "dog")); //true

// ONE LINER (Works for mixed type arguments)
function areThereDuplicates4() {
  return new Set(arguments).size !== arguments.length;
}
console.log(areThereDuplicates4(1, 2, 3, "a", "b", "c", "a")); //true
