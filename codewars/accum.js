function accum(string) {
  const repeatChars = string
    .toUpperCase()
    .split("")
    .map((char, i) => {
      const repeated = char.repeat(i + 1);
      return repeated[0] + repeated.slice(1).toLowerCase();
    });
  return repeatChars.join("-");
}

function accum2(s) {
  return [...s]
    .map((char, i) => {
      return char.toUpperCase() + char.toLowerCase().repeat(i);
    })
    .join("-");
}

console.log(accum("abcd")); //-> "A-Bb-Ccc-Dddd"
console.log(accum2("RqaEzty")); //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")); //-> "C-Ww-Aaa-Tttt"
