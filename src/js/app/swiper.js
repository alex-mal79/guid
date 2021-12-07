//================================================================
//Слайдер Swiper Общие настройкм
//================================================================
const generalSettings =document.querySelector('.general__settings');
if(generalSettings){
    const swiperGeneral = new Swiper(generalSettings,{
        // Обновление слайдера при изминении элементов слайдера
        observer: true,
        // Обновление слайдера при изминении родительских элементов слайдера
        observerParents: true,
        // Обновление слайдера при изминении дочерних элементов слайдера
        observerSlideChildren: true,
        // Показ количества слайдеров
        slidesPerView: 3,
        // Количество пролистываемых слайдеров
        slidesPerGroup: 3,
        // Авто высота
        autoHeight: true,
        // Мультирядность
        grid: {
            rows: 2,
          },
        // Отступ между слайдами, px
        spaceBetween: 30,
        // Бесконечная прокрутка
        loop: true,
        // Автопрокрутка
        autoplay:{
            // Пауза между прокруткой
            delay: 1000,
            // Закончить на последнем слайде
            StopOnLastSlide: true,
            // Отключить после ручного переключения
            disableOnInteraction: false,
        },
        // Скорость переключения слайдов
        speed: 1500,
        // Навигация
        // Стрелки
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        // Буллеты, Текущее положение, Прогрессбар
        pagination: {
            el: '.swiper-pagination',
            // Буллеты
            // clickable: true,
            // Динамические буллеты
            // dynamicBullets: true,
            // Кастомные буллеты
            // renderBullet: function(index, className){
            //     return '<span class="' + className + '">' + (index + 1) + '</span>';
            // },
            // Фракции
            type: 'fraction',
            // Кастомный вывод фракции
            renderFraction: function(currentClass, totalClass){
                return 'Фото <span class="' + currentClass + '"></span>' +
                        ' из ' +
                        '<span class="' + totalClass + '"></span>'
            },
            // Шкала просмотра слайдов
            // type: 'progressbar',
        },
        // Адаптив
        breakpoints: {
            320: {
                
            },
            480: {
                
            },
            992: {
    
            },
        },
    });
}
// Fullscreen слайдер
const fullScreen = document.querySelector('.fullscreen__swiper');
if(fullScreen){
    const fullScreenSlider = new Swiper(fullScreen,{
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
                        '<span>/</span> ' +
                        '<span class="' + totalClass + '" style="padding-left:35px;"></span>'
            },
        },
    });
}
// Стандартный слайдер
const standartSlider= document.querySelector('.sliders__standart');
if(standartSlider){
    const standart = new Swiper(standartSlider,{
        observer: true,
        observerParents: true,
        observerSlideChildren: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.standart__button-next',
            prevEl: '.standart__button-prev',
        },
        pagination: {
            el: '.standart__controls-fraction',
            type: 'fraction',
            renderFraction: function(currentClass, totalClass){
                return '<span class="' + currentClass + '" style="padding-right:35px;"></span>' +
                        '<span>/</span> ' +
                        '<span class="' + totalClass + '" style="padding-left:35px;"></span>'
            },
        },
    });
}