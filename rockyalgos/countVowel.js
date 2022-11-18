//vowelCount("banana") 3
const word1 = "banAna"; //3

const countVowel1 = (str) => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const strArr = str.split("");
  return strArr.filter(char => vowels.includes(char)).length;
}
//console.log(countVowel1(word1));

const word2 = "BanAnarAma"; //5

const countVowel2 = (str) => {
  const vowels = "aeiou";
  str = str.toLowerCase();
  return str.split("").filter(char => vowels.includes(char)).length;
}
console.log(countVowel2(word2));