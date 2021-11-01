//Create a function that masks a string of characters with # except for the last four (4) characters.

function mask(string) {
  return string.slice(-4).padStart(string.length, "#");
}
console.log(mask("123456789")); //"#####6789"
console.log(mask("00000000001771"));

//
//
//
//
//
//

const mask2 = (string) => string.slice(-4).padStart(string.length, "#");
console.log(mask2("12345")); //"#2345"
