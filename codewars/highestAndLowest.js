// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
  const sorted = numbers.split(" ").sort((a, b) => b - a);
  return `${sorted[0]} ${sorted[sorted.length - 1]}`;
}

function highAndLow2(numbers) {
  // No need to map to a number but i like how you can map and just put Number on the parameter and it will apply it to all the elements.
  numbers = numbers.split(" ").map(Number);
  return Math.max.apply(0, numbers) + " " + Math.min.apply(0, numbers);
}

function highAndLow3(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow2("1 2 -3 -4 4 15")); // return "15 -4"
console.log(highAndLow3("1 9 3 4 -5")); // return "9 -5"



