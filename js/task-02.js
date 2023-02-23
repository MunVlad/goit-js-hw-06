const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => {
  const ingredientItem = document.createElement('li');
 ingredientItem.classList = 'item';
 ingredientItem.textContent = ingredient;
  return ingredientItem;
});

ingredientsList.append(...items);

