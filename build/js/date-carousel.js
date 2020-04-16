$(document).ready(function () {
    $('.date-carousel__slider').slick({
        slidesToShow: 9,
        centerMode: true,
        arrows: false,
        infinite: true,
        focusOnSelect: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 7
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    })
});