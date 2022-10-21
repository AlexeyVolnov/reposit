$(document).ready(function () {
   $(".present-slider").slick({
      prevArrow:
         '<button class="slider-btn slider-btn-left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
         '<path d="M9.21839 1L1 9L9.21839 17" stroke="white"/>\n' +
         "</svg></button>",
      nextArrow:
         '<button class="slider-btn slider-btn-right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
         '<path d="M0.78161 17L9 9L0.78161 1" stroke="white"/>\n' +
         "</svg></button>",
      infinite: false,
   });
   $(".questions-item-title").on("click", function () {
      $(".questions-item").removeClass("questions-item--active");
      $(this).parent().addClass("questions-item--active");
   });
   $("#fullpage").fullpage({
      //options here
      autoScrolling: true,
      scrollHorizontally: true,
      sectionSelector: ".page",
      scrollingSpeed: 700,
      easing: "easeInOutCubic",
   });
});
