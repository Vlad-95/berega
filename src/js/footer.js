$(document).ready(function() {
    // открытие/скрытие адресов по клику на нижней панели в мобилке
    $('.button-fixed__item--address').click(function() {
        $('.address-block').fadeIn();
    });

    $('.address-block__close').click(function() {
        $('.address-block').fadeOut();
    })

    $(window).resize(function() {
        if(window.innerWidth > 576) {
            $('.address-block').fadeOut();
        }
    })
})