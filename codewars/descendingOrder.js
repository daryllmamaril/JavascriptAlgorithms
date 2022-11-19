function descendingOrder(n){
  return +(String(n).split("").sort((a, b) => b - a).join(""));
}

console.log(descendingOrder(123456789)); //987654321