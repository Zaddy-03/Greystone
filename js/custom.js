$(document).ready(function () {
    "use strict";

    // Preloader js
    $(window).load(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // ************ Login popup
    $('.js-modal-show').on('click', function (e) {
        $('.js-modal-shopify').toggleClass('is-shown--off-flow').toggleClass('is-hidden--off-flow');
    });
    $('.js-modal-hide').on('click', function (e) {
        $('.js-modal-shopify').toggleClass('is-shown--off-flow').toggleClass('is-hidden--off-flow');
    });
  
    // ************Mean Menu
    jQuery('header .main-menu').meanmenu({
        meanScreenWidth: "991"
    });

    //=========== Scroll to top 
    jQuery('.to-top').on('click', function (event) {
        jQuery('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 100) {
            jQuery('.to-top').fadeIn(1000);
        } else {
            jQuery('.to-top').fadeOut(1000);
        };
    });

    //WOW JS
    new WOW().init();
    
});

