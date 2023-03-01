
const refs = {
    counterEl: document.querySelector('#value'),
    reduceClickButton: document.querySelector('[data-action="decrement"]'),
    addClickButton: document.querySelector('[data-action="increment"]'),
};

let counterValue = 0;

refs.reduceClickButton.addEventListener('click', (event) => {
  counterValue -= 1;
  refs.counterEl.textContent = counterValue;
  });

refs.addClickButton.addEventListener('click', (event) => {
  counterValue += 1;
  refs.counterEl.textContent = counterValue;
});

