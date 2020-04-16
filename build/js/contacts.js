$(document).ready(function () {
    ymaps.ready(init);
    function init(){
        let myMap = new ymaps.Map("map", {
            center: [59.93875979023427,30.199519287463378],
            zoom: 12,
            controls: []
        });
        

        myMap.geoObjects
            .add(new ymaps.Placemark([59.93182597139973,30.367085064674995]))
            .add(new ymaps.Placemark([59.93897589921913,30.31575831296601]));
        
        myMap.behaviors.disable('scrollZoom');
        

        let ctrlKey = false;
        let ctrlMessVisible = false;
        let timer;

        myMap.events.add(['wheel', 'mousedown'], function(evt) {
            if (evt.get('type') == 'wheel') {
                if (!ctrlKey) {
                    $('.map-ctrl').fadeIn();

                    ctrlMessVisible = true;
                    clearTimeout(timer);

                    timer = setTimeout(function() {
                        $('.map-ctrl').fadeOut();
                        ctrlMessVisible = false;
                    }, 1000);
                } else {
                    $('.map-ctrl').fadeOut();
                }
            }
            if (evt.get('type') == 'mousedown' && ctrlMessVisible) {
                $('.map-ctrl').fadeOut();
            }
        })

        $(document).keydown(function(evt) {
            if (evt.which === 17 && !ctrlKey) {
                ctrlKey = true;
                myMap.behaviors.enable('scrollZoom');
            }
        });

        $(document).keyup(function(evt) {
            if (evt.which === 17) {
                ctrlKey = false;
                myMap.behaviors.disable('scrollZoom');
            }
        })

        // изменение центра карты
        if ($(window).width() <= 768) {
            myMap.setCenter([59.940489300353825,30.314792318325093]);
        } 
        
        else if ($(window).width() <= 1200 && $(window).width() > 768){
            myMap.setCenter([59.942642491400356,30.27822844503409]);
        } else {
            myMap.setCenter([59.93875979023427,30.199519287463378]);
        }

        $(window).resize(function () {
            if ($(window).width() <= 768) {
                myMap.setCenter([59.940489300353825,30.314792318325093]);
            } 
            
            else if ($(window).width() <= 1200 && $(window).width() > 768){
                myMap.setCenter([59.942642491400356,30.27822844503409]);
            } else {
                myMap.setCenter([59.93875979023427,30.199519287463378]);
                
            }
        });

        // показ/скрытие карты на мобилке
        $('.map-mobile-btn').click(function() {
            $('#map').toggleClass('active');
            $(this).toggleClass('active');
            if ($(this).hasClass('active')) {
                $(this).find('.map-mobile-btn-text').text('Закрыть карту');
            } else {
                $(this).find('.map-mobile-btn-text').text('Выбрать на карте')
            };
            myMap.container.fitToViewport();
        
        });
    };

    
    
    // показ/скрытие карточек
    let contactsItem = $('.contacts__item');
    let contactsItemMorePhotoLink = $('.contacts__item-content-image');
    
    contactsItem.on('click', function(evt) {
        evt.stopPropagation();

        contactsItem.not($(this)).removeClass('active');
        $(this).addClass('active');
    });

    $('.contacts__item .close').click(function(evt) {
        evt.stopPropagation();
        contactsItem.removeClass('active');
    });

    $(document).click(function(evt) {
        
        if (!evt.target.classList.contains('contacts__item')) {
            contactsItem.removeClass('active');
        }
    })
    
    // показ/скрытие фоток
    contactsItemMorePhotoLink.click(function() {
        let images = $(this).find('.contacts__item-content-hidden-images').find('.images');
        $.fancybox.open(images);
    });

    
});