// Give you a number array(element range:1-99, array length range: 6-40), please do a "Symmetric Sort" with it.
// rule: sort the number, the first smallest number at the left side, the second smaller number at the right side, and so on...

function symmetricSort(array) {
  const arrayCopy = array.slice().sort((a, b) => a - b);
  const oddIndex = arrayCopy.filter((num, i) => i % 2 === 1).reverse();
  const evenIndex = arrayCopy.filter((num, i) => i % 2 === 0);
  //return [...evenIndex, ...oddIndex]; //-->Using rest operator
  return evenIndex.concat(oddIndex);
}

console.log(symmetricSort([1, 2, 3, 4, 5, 6, 7, 8, 9])); //--> [1,3,5,7,9,8,6,4,2]
console.log(symmetricSort([1, 1, 2, 2, 3, 3, 4, 4, 5])); //--> [1,2,3,4,5,4,3,2,1]
console.log(symmetricSort([11, 2, 33, 4, 55, 6])); //--> [2,6,33,55,11,4],
