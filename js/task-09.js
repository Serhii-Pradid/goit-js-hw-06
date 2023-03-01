/*const body = document.body;
const swapBtnEl = document.querySelector('.change-color');
const titleColor = document.querySelector('.color');

swapBtnEl.addEventListener('click' , getRandomHexColor);

function getRandomHexColor() {

  titleColor.textContent = body.style.backgroundColor;

    return body.style.backgroundColor =`#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}*/


const swapBtnEl = document.querySelector('.change-color');
const titleColor = document.querySelector('.color');
const body = document.body;

swapBtnEl.addEventListener('click' , (event) => {

  const color = getRandomHexColor();
  body.style.backgroundColor = color;
titleColor.textContent = color;
});

function getRandomHexColor() {

     return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};



