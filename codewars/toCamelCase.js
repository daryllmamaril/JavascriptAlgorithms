// Convert string to camel case
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str) {
  const chars = str.split("");
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "-" || chars[i] === "_") {
      chars[i + 1] = chars[i + 1].toUpperCase();
      chars.splice(i, 1);
    }
  }
  return chars.join("");
}
console.log(toCamelCase("the-stealth-warrior")); //-->"theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); //-->"TheStealthWarrior"
