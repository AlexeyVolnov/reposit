'use strict';

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
const header = document.querySelector('.header');
const sections = document.querySelectorAll('.section');
const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');


const btnsOpenModalWindow = document.querySelectorAll('.btn--show-modal-window');

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


///////////Cookie
/*

const message = document.createElement('div');
message.classList.add('cookie-message')
message.innerHTML = `Мы используем на этом сайте cookie для улучшения функциональности. <button class='btn btn--close-cookie'>ОК!</button>`

document.querySelector('.header').before(message)
message.querySelector('.btn--close-cookie').addEventListener('click', function (e) {
    message.remove()
})
message.style.height = Number.parseFloat(getComputedStyle(message).height) + 50 + 'px';
document.documentElement.style.setProperty('--color-first', 'rgba(79,40,218,0.46)')
*/


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

nav.addEventListener('mouseover', navLinkHoverAnimation.bind(0.2))
nav.addEventListener('mouseout', navLinkHoverAnimation.bind(1))


/*
//закрепить(Sticky) меню при скроле это старый метод плохо что постоянно слушает событие скрола
window.addEventListener('scroll',function (){

   if(window.scrollY > 1100){
       nav.classList.add('sticky')
   }else{
       nav.classList.remove('sticky')
   }
})*/


//закрепить(Sticky) меню при скроле это новый метод Intersection Observer API
const navHeight = nav.getBoundingClientRect().height;


const getStickyNav = function (entries) {
    entries[0].intersectionRatio === 0 &&
    entries[0].isIntersecting === false
        ? nav.classList.add('sticky')
        : nav.classList.remove('sticky')
}

const observer = new IntersectionObserver(getStickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
});
observer.observe(header)


/*

sections.forEach(section => section.classList.add('section--hidden'));



const popUpSections = function (entries,observer) {
    const entry = entries[0];
    if (entry.isIntersecting) {
        entry.target.classList.remove('section--hidden')
        observer.unobserve(entry.target)
    }
}
const observerSection = new IntersectionObserver(popUpSections, {root: null,threshold: 0.2})
sections.forEach(section => observerSection.observe(section))

*/


sections.forEach(section => section.classList.add('section--hidden'))
const sectionPopUp = function (entries, event) {
    const entry = entries[0];
    if (entry.isIntersecting === true) {
        entry.target.classList.remove('section--hidden')
        sectionObserver.unobserve(entry.target)
    }
}

const sectionObserver = new IntersectionObserver(sectionPopUp, {root: null, threshold: 0.2})
sections.forEach(section => sectionObserver.observe(section))


const lazyLoadingImg = document.querySelectorAll('[data-src]') && document.querySelectorAll('.services__img')
const lazyLoading = function (entries, event) {
    const entry = entries[0];
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', () => {
        entry.target.classList.remove('lazy-img')
        lazyImagesObserver.unobserve(entry.target)
    })

}
const lazyImagesObserver = new IntersectionObserver(lazyLoading, {root: null, threshold: 0.7})
lazyLoadingImg.forEach(img => lazyImagesObserver.observe(img))


//Slider
const sliderContainer = document.querySelector('.slider')
const sliderItems = document.querySelectorAll('.slide');
const sliderLeftBtn = document.querySelector('.slider__btn--left')
const sliderRightBtn = document.querySelector('.slider__btn--right')
sliderItems.forEach((item,index)=>{
    if(index !== 0){
        item.style.display = 'none'
    }
})
sliderContainer.addEventListener('click',function (e){

    if(e.target.classList.contains('slider__btn--left')){
        e.target.classList.style.display = 'none';
        e.target.nextSibling.style.display = 'block'
    }
})