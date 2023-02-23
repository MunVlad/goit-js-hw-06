const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

ingredients.map(ingredient => {
const ingredientItem = document.createElement('li');
ingredientItem.classList = 'item';
ingredientItem.textContent = ingredient;
ingredientsList.append(ingredientItem);
});  
