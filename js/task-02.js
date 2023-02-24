const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach ((element) => {
const liElement = document.createElement('li');
liElement.textContent = element;
liElement.classList.add('item');

//console.log(liElement)
  });

 const allLiElements = document.querySelector(".ingredients");
 allLiElements.appendChild(liElement);