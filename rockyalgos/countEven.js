//countEven([1,2,3,4,5]) 2;
const argumentArray1 = [1,2,3,4,5]; //2
const argumentArray2 = [10,2,3,4,50,67,54]; //5

const countEven1 = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}
//console.log(countEven1(argumentArray1));

const countEven2 = (arr) => {
  let count = 0;
  arr.forEach(num => {
    if (num % 2 === 0) {
      count++;
    }
  })
  return count;
}
console.log(countEven2(argumentArray2));