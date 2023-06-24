const box = document.querySelector('.box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
	box.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
	box.classList.remove('active');
});
