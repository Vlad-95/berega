$(document).ready(function() {
    
    $('.reviews__item').click(function(evt){
        $reviewsImage = $(this).find('img').attr('src');
        $popupImage = $('.reviews-popup img');
        
        $popupImage.attr('src', $reviewsImage);

        $('.reviews-popup').addClass('active'); 
    })

    $('.reviews-popup__item-close').click(function() {
        $('.reviews-popup').removeClass('active');
    })

    $('.reviews-popup').click(function(evt) {
        const target = evt.target;

        if (target.classList.contains('reviews-popup__layer')  ) {
            $('.reviews-popup').removeClass('active');
        }
    });    
});