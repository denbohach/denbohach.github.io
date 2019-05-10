$(function () {
    // Preloader
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

    // SlowScroll 
    jQuery("a.scrollto").click(function (e) {
        e.preventDefault();
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1300);
        return false;
    });

    // Menu-opener hamburger
    $('.menu-open').click(function(){
        $('.menu-collapse').toggleClass('d-none').css('order','1');
        $('.menu').toggleClass('menu-opened');
    });

    // Modal-Window
    $('.nav-btn, .footer-btn').click(function (){
        $('#exampleModal').arcticmodal();
    })

    // Slick-slider
    $('.reviews-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
    });
})