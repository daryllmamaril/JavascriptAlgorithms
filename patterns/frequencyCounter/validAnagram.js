// FREQUENCY COUNTER PATTERN

// MY SOLUTION
function validAnagram1(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let anagram1 = {};
  let anagram2 = {};
  str1.split("").forEach((char) => {
    anagram1[char] = (anagram1[char] || 0) + 1;
  });
  str2.split("").forEach((char) => {
    anagram2[char] = (anagram2[char] || 0) + 1;
  });
  for (let key in anagram1) {
    if (anagram1[key] !== anagram2[key]) {
      return false;
    }
  }
  return true;
}

// BEST PRACTICE
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("", "")); //true
console.log(validAnagram("aaz", "zza")); //false
console.log(validAnagram("anagram", "nagaram")); //true
console.log(validAnagram("rat", "car")); //false
console.log(validAnagram("awesome", "awesom")); //false
console.log(validAnagram("qwerty", "qeywrt")); //true
console.log(validAnagram("texttwisttime", "timetwisttext")); //true