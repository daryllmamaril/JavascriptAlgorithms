// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  return [...s1, ...s2]
    .filter((char, i) => [...s1, ...s2].indexOf(char) === i)
    .sort()
    .join("");
}

const longest2 = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

const a = "xyaabbbccccdefww";
const b = "xxxxyyyyabklmopq";
const c = "abcdefghijklmnopqrstuvwxyz";

console.log(longest(a, b)); //-> "abcdefklmopqwxy"
console.log(longest2(c, c)); //-> "abcdefghijklmnopqrstuvwxyz"
