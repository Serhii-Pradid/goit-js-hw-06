
const refs = {
textInput: document.querySelector('#name-input'),
changeName: document.querySelector('#name-output'),
};

refs.textInput.addEventListener('input', onInputChange);

function onInputChange(event) {
    //console.log(event.currentTarget.value)
    refs.changeName.textContent = event.target.value;

if (refs.textInput.value == '') {
    refs.textInput.value = "Anonymous";
  }
}

