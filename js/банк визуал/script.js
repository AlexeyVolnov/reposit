'use strict';

///////////////////////////////////////
// Modal window

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll(
    '.btn--show-modal-window'
);

const openModalWindow = function (e) {
    e.preventDefault()
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModalWindow.forEach((button) => {
    button.addEventListener('click', openModalWindow);
})

btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
        closeModalWindow();
    }
});


///////////


const message = document.createElement('div');
message.classList.add('cookie-message')
message.innerHTML = `Мы используем на этом сайте cookie для улучшения функциональности. <button class='btn btn--close-cookie'>ОК!</button>`

document.querySelector('.header').before(message)
message.querySelector('.btn--close-cookie').addEventListener('click', function () {
        message.remove()
    })
message.style.height = Number.parseFloat(getComputedStyle(message).height) + 50 + 'px';
document.documentElement.style.setProperty('--color-first', 'rgba(79,40,218,0.46)')
