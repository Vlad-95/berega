$(document).ready(function() {

    // копирование текста по клику
    $('.accordion__content__info p').click(function() {
        $(this).addClass('copy').attr('data-title','Скопировано');

    
        setTimeout(function() {
            $('.accordion__content__info p').removeClass('copy').attr('data-title', '');
        }, 1500);

        let temp = $("<input>");
        $('body').append(temp);
        let copyText = $(this).text().trim();
        temp.val($copyText).select();
        document.execCommand('copy');
        temp.remove();

    });

    // скролл до формы
    // $('.js-feedback-scroll').on('click', function(e){
    //     $('html,body').stop().animate({ scrollTop: $('#feedback').offset().top }, 1000);
    //     e.preventDefault();
    // });

    // показ/скрытие сообщений об успешных отправках (тест)
    $('.footer__subscribe-submit').click(function (evt) {
        evt.preventDefault();

        $('.success-msg--subscribe').fadeIn();

        setTimeout(function() {
            $('.success-msg').fadeOut();
        }, 2000)
    })

    $('.section-feedback__submit').click(function (evt) {
        evt.preventDefault();

        $('.success-msg--form').fadeIn();

        setTimeout(function() {
            $('.success-msg').fadeOut();
        }, 2000)
    })

    $('.success-msg__close').click(function (evt) {
        

        $('.success-msg').fadeOut();
    })

});