$(function () {
    $('.present-slider').slick({
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear'
    });

    $('.product-menu').on('click',function(){
        $('.present_nav').addClass('active');
    })

    $('.nav-close_btn').on('click',function(){
        $('.present_nav').removeClass('active');
    })
})

