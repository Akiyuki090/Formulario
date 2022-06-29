var nome = document.getElementById('nome');
var email = document.getElementById('email');


nome.addEventListener('focus', () => {

    nome.style.borderColor = "#4B0082";	

});

nome.addEventListener('blur', () => {

    nome.style.borderColor = "#ccc";

});

email.addEventListener('focus', () => {

    email.style.borderColor = "#4B0082";	

});

email.addEventListener('blur', () => {

    email.style.borderColor = "#ccc";

});