const formInputEl = document.querySelector('#validation-input');

formInputEl.addEventListener('blur', () => {
    formInputEl.classList.toggle("valid", formInputEl.value.length >= 6 );
    formInputEl.classList.toggle("invalid", formInputEl.value.length < 6 )
})