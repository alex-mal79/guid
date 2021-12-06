//================================================================
//Слайдер Swiper
//================================================================
// Fullscreen слайдер
if(document.querySelector('.fullscreen__swiper')){
    const fullscreen = new Swiper('.fullscreen__swiper',{
        observer: true,
        observerParents: true,
        observerSlideChildren: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.fullscreen__controls-next',
            prevEl: '.fullscreen__controls-prev',
        },
        pagination: {
            el: '.fullscreen__controls-fraction',
            type: 'fraction',
            renderFraction: function(currentClass, totalClass){
                return '<span class="' + currentClass + '" style="padding-right:35px;"></span>' +
                        '<span class="slider__arrow">/</span> ' +
                        '<span class="' + totalClass + '" style="padding-left:35px;"></span>'
            },
        },
    });
}