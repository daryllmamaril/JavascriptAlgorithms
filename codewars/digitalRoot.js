// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digitalRoot1(n){
 let result = 0;
 String(n).split("").map((num) => result += +num);
 return result > 10 ? digitalRoot(result) : result;
}

function digitalRoot(n) {
  if (n < 10) return n;
  return digitalRoot(
    String(n).split("").reduce((accum, num) => {
      return accum + +num;
    }, 0)
  )
}

console.log(digitalRoot(10)); // --> 1 + 0 = 1
console.log(digitalRoot(16)); // --> 1 + 6 = 7
console.log(digitalRoot(942)); // --> 9 + 4 + 2 = 15  -->  1 + 5 = 6
console.log(digitalRoot(132189)); // --> 1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
console.log(digitalRoot(493193)); // --> 4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11 -->  1 + 1 = 2