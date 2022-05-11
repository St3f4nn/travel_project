'use strict';

// Elements

const navBar = document.querySelector('#hero-nav');
const navBurger = document.querySelector('#hero-nav-side-burger');
const navMenu = document.querySelector('#hero-nav-menu');

// Functions

window.onscroll = () => {
    if (window.pageYOffset > 0) {
        navBar.classList.add('onscroll');
    } else {
        navBar.classList.remove('onscroll');
    };
};

// Event listeners

navBurger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});