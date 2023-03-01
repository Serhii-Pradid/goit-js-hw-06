const formInputEl = document.querySelector('#validation-input');

formInputEl.addEventListener('blur', () => {

    const result = formInputEl.value.length >= 6;
    formInputEl.classList.toggle("valid", result );
    formInputEl.classList.toggle("invalid", !result)
})