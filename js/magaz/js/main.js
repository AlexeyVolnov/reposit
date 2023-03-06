'use strict'
// slider
$(function () {
    $('.slider__items').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: true,
    })
})
$(function () {
    $('.popular-slider').slick({
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })
})
//tabs

const tabs = document.querySelector('.search__tabs');
const searchInputPlaceholder = document.querySelector('.search__input');
const searchInputPlaceholderContent = ['номер', 'марку', 'название товара'];


tabs.addEventListener('click', function (e) {
    const tabNumber = e.target.getAttribute('datatype');
    if (tabNumber) {
        searchInputPlaceholder.setAttribute('datatype', tabNumber)
        tabs.childNodes.forEach(tab => {
            tab.classList?.remove('search__tab--active')
        })
        e.target.classList.add('search__tab--active')
        searchInputPlaceholder.setAttribute('placeholder', `Введите ${searchInputPlaceholderContent[tabNumber]}`)
    }
})


const cartsProduct = document.querySelectorAll(`[precense='false']`);
// карточка товаров


// наличие
cartsProduct.forEach(cart => {
    if (cart.getAttribute('precense')) {
        const link = `<a href="#" class="cart-product__message-link">Сообщить о поступлении</a> <br>`;
        const text = `<p class="cart-product__message-text">нет в наличии</p>`
        const cartProductPrice = cart.querySelector('.cart-product__price');
        const cartProductText = cart.querySelector('.cart-product__title');
        cartProductPrice.innerHTML = '';
        cartProductText.insertAdjacentHTML("beforeend", text)
        cartProductPrice.insertAdjacentHTML("beforeend", link)
    }
})

// избранное
const liveProduct = document.querySelectorAll('.cart-product__heart');

liveProduct.forEach(prod => {
    prod.addEventListener('click', function (e) {
        e.target.classList.toggle('live-active')
    })
})


//////////////////////////////


