// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.
var MORSE_CODE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "|": " ",
};

function decodeMorse(morseCode) {
  const noSpaces = morseCode.split("   ");
  console.log(noSpaces);
  const wordArrays = noSpaces.map((word) => word.split(" "));
  //console.log(wordArrays);
  const decoded = wordArrays.map((array) => {
    return array.map((el) => MORSE_CODE[el]).join("");
  });
  return decoded.join(" ").toUpperCase().trim();
}
//console.log(decodeMorse(".... . -.--   .--- ..- -.. .")); //-->"HEY JUDE"

function decodeMorse2(morseCode) {
  return morseCode
    .split("   ")
    .map((word) =>
      word
        .split(" ")
        .map((code) => MORSE_CODE[code])
        .join("")
    )
    .join(" ")
    .toUpperCase()
    .trim();
}
//console.log(decodeMorse2(".... . -.--   .--- ..- -.. .")); //-->"HEY JUDE"

function decodeMorse3(morseCode) {
  return morseCode
    .split("   ")
    .map((codedWord) => {
      return codedWord.split(" ").reduce((word, code) => {
        return (word += MORSE_CODE[code]);
      }, "");
    })
    .join(" ")
    .toUpperCase()
    .trim();
}
console.log(decodeMorse3(".... . -.--   .--- ..- -.. .")); //-->"HEY JUDE"
