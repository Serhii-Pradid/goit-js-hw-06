const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allLiElements = document.querySelector("#ingredients");

ingredients.forEach ((element) => {
const liElement = document.createElement('li');
liElement.textContent = element;
liElement.classList.add('item');

allLiElements.append(liElement);
//console.log(liElement)
  });

console.log(allLiElements)

