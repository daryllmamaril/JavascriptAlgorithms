// If myNum is even and does not end with a 0 return "even"
// If myNum ends with a 0 return "zero"
// If myNum is odd and does not end with a 5 return "odd"
// If myNum ends with a 5 return "five"

function revolentTest(myNum) {
  const num = myNum.toString().split("");
  if (+num[num.length - 1] === 0) {
    return "zero";
  } else if (myNum % 2 === 0 && +num[num.length - 1] !== 0 ) {
    return "even";
  } else if (+num[num.length - 1] === 5) {
     return "five";
  } else {
    return "odd";
  }

}
console.log(revolentTest(115));