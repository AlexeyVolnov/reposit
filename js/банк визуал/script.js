'use strict';

///////////////////////////////////////
// Modal window


const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const nav = document.querySelector('.nav');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabContainer = document.querySelector('.operations__tab-container');
const contentBlock = document.querySelectorAll('.operations__content')
const buttons = document.querySelectorAll('.operations__tab');
const link = document.querySelector('.nav__links')


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
message.querySelector('.btn--close-cookie').addEventListener('click', function (e) {
    message.remove()
})
message.style.height = Number.parseFloat(getComputedStyle(message).height) + 50 + 'px';
document.documentElement.style.setProperty('--color-first', 'rgba(79,40,218,0.46)')


// плавный скрол до элемента
/*// старый метод скрола к элементу
btnScrollTo.addEventListener('click', function (evt) {
    const section1Coords = section1.getBoundingClientRect();

    evt.preventDefault()
    window.scrollTo({
        left: section1Coords.left + window.pageXOffset,
        top: section1Coords.y + window.pageYOffset,
        behavior:'smooth'});

    section1.scrollIntoView({behavior: 'smooth'})
})*/


//////скрол
link.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('nav__link') && !e.target.classList.contains('btn')) {
        const href = e.target.getAttribute('href');
        document.querySelector(`${href}`).scrollIntoView({behavior: 'smooth'})
    }
    ;
})
// переключение вкладок
//первый вариант
/*
const buttonTab = document.querySelectorAll('.operations__tab')
buttonTab.forEach(btn => {
    btn.addEventListener('click', function (e) {
        const tab = e.target.getAttribute('data-tab');
        const contentTab = document.querySelector(`.operations__content--${tab}`);
        document.querySelectorAll('.operations__content').forEach(child=>child.classList.remove('operations__content--active'))
        contentTab.classList.add('operations__content--active');

    })
})

*/


/*
const container = document.querySelector('.operations__tab-container');
const buttons = document.querySelectorAll('.operations__tab');
const content = document.querySelectorAll('.operations__content');
container.addEventListener('click',function (e){
   const index =  +e.target.closest('.operations__tab').getAttribute('data-tab')
    content.forEach(c=>c.classList.remove('operations__tab--active'))
    content[index-1].classList.add('operations__tab--active')
    console.log(content)
})
*/
//// вкладки
tabContainer.addEventListener('click', function (e) {
    const clickedButton = e.target.closest('.operations__tab');
    if (!clickedButton) {
        return
    }
    buttons.forEach(btn => btn.classList.remove('operations__tab--active'))
    contentBlock.forEach(block => block.classList.remove('operations__content--active'));

    const numberBtn = +clickedButton.getAttribute('data-tab')

    document.querySelector(`.operations__content--${numberBtn}`).classList.add('operations__content--active')
    document.querySelector(`.operations__tab--${numberBtn}`).classList.add('operations__tab--active')
})
////
const navLinkHoverAnimation = function (e) {
    const elemOver = e.target;
    if (elemOver.classList.contains('nav__link')) {
        const siblingLinks = elemOver.closest('.nav__links').querySelectorAll('.nav__link')
        const logo = elemOver.closest('.nav').querySelector('.nav__logo');
        const logoText = elemOver.closest('.nav').querySelector('.nav__text')
        siblingLinks.forEach(link => {
            if (link !== elemOver) {
                link.style.opacity = this;
                logoText.style.opacity = this;
                logo.style.opacity = this
            }
        })
    }
}

nav.addEventListener('mouseover', navLinkHoverAnimation.bind(0.4))

nav.addEventListener('mouseout', navLinkHoverAnimation.bind(1))

