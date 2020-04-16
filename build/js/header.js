$(document).ready(function() {
    // открытие/закрытие меню в мобилке
    $('.header__burger').click(function() {
        $(this).toggleClass('active');
        $('.header__mobile-menu').slideToggle();
    });

    // баг при изменении окна браузера
    $(window).resize(function(){
        if (window.innerWidth > 768) {
            $('.header__burger').removeClass('acitve');
            $('.header__mobile-menu').hide();
        }
    })

    // открытие/закрытие подменю в мобилке
    $('.header__mobile-menu-services-item--dropdown').click(function() {
        $(this).find('.header__mobile-menu-services-dropdown').slideToggle();
        $(this).toggleClass('active');
        $('.header__mobile-menu-services-item--dropdown').not($(this)).removeClass('active').find('.header__mobile-menu-services-dropdown').slideUp();
    });

    // фиксация меню
    let headerHeight = $('.header__wrap-top-fixed').height();
    
    
    $(window).scroll(function() {
        
        if ($(window).scrollTop() > headerHeight) {
            
            $('.header__wrap-top').addClass('fixed');
            
        } else {
           
            $('.header__wrap-top').removeClass('fixed');
            
        }
    })

});