const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allLiElements = document.querySelector("#ingredients");

const items =[];

ingredients.forEach ((element) => {
const liElement = document.createElement('li');
liElement.textContent = element;
liElement.classList.add('item');

items.push(liElement);

  });

allLiElements.append(...items);

console.log(allLiElements)

