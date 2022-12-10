// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords1(string) {
  const words = string.split(" ");
  console.log(words)
  let result = "";
  words.map((word, i) => {
    if (word.length > 4) {
      words[i] = word.split("").reverse().join("");
      console.log(word)
    } else {
      words[i] = word
    }
  })
  return result = words.join(" ")
}

function spinWords2(string) {
  const spinned = string.split(" ").map((word) => {
    return word.length >= 5 ? word.split("").reverse().join("") : word;
  })
  return spinned.join(" ");
}

function spinWords(string){
  return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}


console.log(spinWords("Hey fellow warriors")) // => returns "Hey wollef sroirraw"
console.log(spinWords("This is a test")) // => returns "This is a test"
console.log(spinWords("This is another test")) //=> returns "This is rehtona test"