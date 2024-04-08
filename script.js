const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login_link');
const registerLink = document.querySelector('.register_link');
const loginForm = document.querySelector('.form_box.login');
const registerForm = document.querySelector('.form_box.register');
const btnLogin = document.querySelector('.btnlogin');
const iconClose = document.querySelector('.icon-close');


btnLogin.addEventListener('click', () => {
    wrapper.classList.add('active');
    loginForm.style.transform = 'translateX(0)';
    registerForm.style.transform = 'translateX(400px)';
});

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    loginForm.style.transform = 'translateX(-400px)';
    registerForm.style.transform = 'translateX(0)';
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    loginForm.style.transform = 'translateX(0)';
    registerForm.style.transform = 'translateX(400px)';
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active');
});