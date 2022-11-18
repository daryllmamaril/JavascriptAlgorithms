// onlyOdd([1,2,3,4,5]) [1,3,5]

const onlyOdd1 = (arrNums) => {
  const odds = []
  arrNums.forEach(num => {
    if (num % 2 !== 0) {
      odds.push(num);
    }
  })
  return odds;
}
//console.log(onlyOdd1([1,2,3,4,5]));

const onlyOdd2 = (arrNums) => {
  return arrNums.filter(num => (num % 2) === 1);
}
console.log(onlyOdd2([1,2,3,4,5,6,7]));

const onlyOdd3 = (arrNums) => {
  const odds = [];
  for (let i = 0; i < arrNums.length; i++) {
    if (arrNums[i] % 2 !== 0) {
      odds.push(arrNums[i])
    }
  }
  return odds;
}
//console.log(onlyOdd3([1,2,3,4,5,6,7,8,9]));
