$(document).ready(function () {
    
    // вопрос/ответ клик
    if(window.innerWidth > 768) {
        
        $('.answer__item').click(function() {
            $(this).addClass('active').find('.answer__content').slideDown();
            $('.answer__item').not(this).removeClass('active').find('.answer__content').slideUp();
        });
        $('.answer__item .close').click(function(evt) {
            evt.stopPropagation();
            $('.answer__item').removeClass('active').find('.answer__content').slideUp();
        });
    } else {
        $('.answer__item .answer__toggle').click(function() {
            $(this).parent().toggleClass('active').find('.answer__content').slideToggle();
            $('.answer__item .answer__toggle').not(this).parent().removeClass('active').find('.answer__content').slideUp();
        });
    }
    
    //============================

    $('.accordion__item').click(function() {
        $(this).find('.accordion__content').slideDown().parent().addClass('active');
        $('.accordion__item').not(this).find('.accordion__content').slideUp().parent().removeClass('active');
    });
});