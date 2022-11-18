// g tells to find all matches, not just the first.
// i tells to be case insensitive.
// What goes inside the // is the pattern.
// [] tells to match any character in a set.
// aeiou are the characters in the set.
// " means replace aeiou with an empty string"
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
console.log(disemvowel("Ima take off all the VOWELS in this sentence."))

function disemvowel2(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let result = "";
  str.split("").map(char => {
    if (!vowels.includes(char)) {
       result += char;
    }
  })
  return result;
}