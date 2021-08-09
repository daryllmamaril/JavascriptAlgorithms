var recipe = { flour: 200, eggs: 1, sugar: 100 };

function getMissingIngredients(recipe, added) {
  const resultObj = {};
  for (let key in recipe) {
    for (let key2 in added) {
      if (added[key] === undefined) {
        //console.log(added[key]);
        console.log(resultObj.key);
      }
    }
  }
  return resultObj;
}

console.log(getMissingIngredients(recipe, { flour: 50, eggs: 1 })); // must return {flour: 150, sugar: 100}
console.log(getMissingIngredients(recipe, {})); // must return {flour: 200, eggs: 1, sugar: 100}
//console.log(getMissingIngredients(recipe, { flour: 500, sugar: 200 })); // must return {flour: 100, eggs: 3, sugar: 100}
