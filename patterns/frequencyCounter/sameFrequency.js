// Given 2 positive integers, find out if the 2 numbers have the same frequency of digits.
// Time Complexity must be O(N)

// MY SOLUTION
function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();

  if (num1.length !== num2.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < num1.length; i++) {
    obj1[num1[i]] = (obj1[num1[i]] || 0) + 1;
  }

  for (let i = 0; i < num2.length; i++) {
    obj2[num2[i]] = (obj2[num2[i]] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(34, 14)); //false
console.log(sameFrequency(3589578, 5879385)); //true
console.log(sameFrequency(22, 222)); //false
