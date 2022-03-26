/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/
function getSum(a: number, b: number): number {
  if (a === b) {
    return a;
  }
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSum(1, 1)); //1
// console.log(getSum(-1, 0)); //-1
// console.log(getSum(-1, 2)); //2 (-1 + 0 + 1 + 2 = 2)
