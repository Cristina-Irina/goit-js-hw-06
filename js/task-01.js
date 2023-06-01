const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log('Number of categories:', categoryItems.length);

categoryItems.forEach(category => {
  const categoryHeader = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li').length;

  console.log('\nCategory:', categoryHeader);
  console.log('Elements:', categoryElements);
});
