const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

function createListItem(text) {
  const listItem = document.createElement('li');
  listItem.textContent = text;
  listItem.classList.add('item');
  return listItem;
}

ingredients.forEach(ingredient => {
  const listItem = createListItem(ingredient);
  ingredientsEl.appendChild(listItem);
});
