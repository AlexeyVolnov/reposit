$(document).ready(function () {
    $('.header-slider').slick({
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        fade: true,


    });

    $('.nav-buter').on('click', function () {
        $('.nav-buter-list').toggleClass('active')
    })


});


