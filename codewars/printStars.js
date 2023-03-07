function printStarsInc() {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += "* ";
    console.log(stars);
  }
}
console.log(printStarsInc());

function printStarsInc2(rows) {
  for (let i = 1; i <= rows; i++) {
    console.log("* ".repeat(i))
  }
}
console.log(printStarsInc2(5));

function printStarsDec(rows) {
  for (let i = rows; i >= 1; i--) {
    let stars = "* ".repeat(i);
    console.log(stars);
  }
}
console.log(printStarsDec(5));

