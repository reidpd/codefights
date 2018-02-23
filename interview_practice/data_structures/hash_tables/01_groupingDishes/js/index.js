const groupingDishes = (dishes) => {
  let ingredients = {};
  dishes.forEach(dish => {
    let meal = dish.shift();
    dish.forEach(ing => {
      ing in ingredients ? ingredients[ing].push(meal) : ingredients[ing] = [meal];
    })
  });
  console.log(ingredients);
  let ingMap = [];
  Object.keys(ingredients).forEach(ing => {
    if (ingredients[ing].length > 1) {
      ingredients[ing].unshift(ing);
      ingMap.push(ingredients[ing]);
    }
  });

  return ingMap.map(list => {
    const ings = list.slice(1).sort((a,b) => a.localeCompare(b));
    ings.unshift(list[0])
    return ings;
  }).sort((a,b) => {
    const names = [a,b].map(arr => arr.slice().shift());
    return names[0].localeCompare(names[1]);
  });
};

module.exports = { fns: [ groupingDishes ] };
