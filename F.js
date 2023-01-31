"use strict";

const toggleBtn = document.querySelector('.toggle--btn');
const signupElement = document.querySelector('.signup');
const loginElement = document.querySelector('.login');

toggleBtn.addEventListener('click', () => {
    // statement
    if (signupElement.classList.contains('hide')) {
        signupElement.classList.remove('hide')
        signupElement.classList.add('show')
        toggleBtn.innerHTML = 'Login';
        loginElement.classList.remove('show');
        loginElement.classList.add('hide');
    } else {
        signupElement.classList.remove('show')
        signupElement.classList.add('hide')
        toggleBtn.innerHTML = 'Sign Up'
        loginElement.classList.remove('hide');
        loginElement.classList.add('show');
    }
})