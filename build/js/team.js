$(document).ready(function() {
    

    $('.team__item').click(function(evt) {
        let teamName = $(this).find('.team__name').text();
        let teamProff = $(this).find('.team__proffesion').text();
        let popupName = $('.team-popup__item-name');
        let popupProff = $('.team-popup__item-proffession');
        popupName.text(teamName);
        popupProff.text(teamProff);
    
        $('.team-popup').addClass('active');
    });


    // показ/скрытие всплывашки
    $('.team-popup__item-close').click(function() {
        $('.team-popup').removeClass('active');
    })

    if(window.innerWidth <= 768) {
        $('.team-popup').click(function() {
            $(this).removeClass('active');
        })
    }

    $('.team-popup').click(function(evt) {
        const target = evt.target;

        if (target.classList.contains('team-popup__layer')  ) {
            $('.team-popup').removeClass('active');
        }
    });
    
    
});