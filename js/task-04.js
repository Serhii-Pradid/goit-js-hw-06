
const refs = {
    counterValue: document.querySelector('#value'),
    removeClickButton: document.querySelector('[data-action="decrement"]'),
    addClickButton: document.querySelector('[data-action="increment"]'),
};


refs.addClickButton.addEventListener('click', (event) => {
return refs.counterValue.textContent += 1;
});

refs.removeClickButton.removeEventListener('cklick', (event) => {
    return refs.counterValue.textContent -= 1;
});