/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/
function getSum(a, b) {
    if (a === b) {
        return a;
    }
    var sum = 0;
    for (var i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSum(1, 1)); //1
// console.log(getSum(-1, 0)); //-1
// console.log(getSum(-1, 2)); //2 (-1 + 0 + 1 + 2 = 2)
