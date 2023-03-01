const form = document.querySelector('.login-form');

form.addEventListener('submit' , onFormSubmit);

function onFormSubmit (event) {
event.preventDefault();

const {
    elements: { email, password }
} = event.currentTarget;

if (email.value.trim()  === '' || password.value.trim() === '') {
return alert('Всі поля мають бути заповненими!');
};
console.log(`Email: ${email.value} , Password: ${password.value}`);
event.target.reset();

};


