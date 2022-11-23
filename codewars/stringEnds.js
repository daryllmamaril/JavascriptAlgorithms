// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
  return str.slice(-(ending.length)) === ending;
}
console.log(solution('abcde', 'cde')); //true
console.log(solution('abcde', 'abc')); //false
console.log(solution('samurai', 'ra')); //false

const solution2 = (str, ending) => str.endsWith(ending);
console.log(solution2('abcde', 'cde')); //true
console.log(solution2('abcde', 'abc')); //false
console.log(solution2('samurai', 'ra')); //false

