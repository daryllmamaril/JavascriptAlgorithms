function printStarsInc() {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += "* ";
    console.log(stars);
  }
}
//console.log(printStarsInc());

function printStarsInc(rows) {
  for (let i = 1; i <= rows; i++) {
    let stars = "* ".repeat(i);
    console.log(stars);
  }
}
//console.log(printStarsInc(5));

function printStarsDec(rows) {
  for (let i = rows; i >= 1; i--) {
    let stars = "* ".repeat(i);
    console.log(stars);
  }
}
console.log(printStarsDec(5));

