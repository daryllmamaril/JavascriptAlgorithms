// Given a string, remove any characters that are unique from the string.

function onlyDuplicates(str) {
  return str
    .split("")
    .filter((char) => str.indexOf(char) !== str.lastIndexOf(char))
    .join("");
}
console.log(onlyDuplicates("abccdefee")); //-->"cceee";
console.log(onlyDuplicates("dddaz")); //-->"ddd";
