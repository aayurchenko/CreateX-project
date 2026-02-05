// const { response } = require("express");

$(function () {
    console.log("Hello, we are working!");

    // ========== Fancybox ==========
    Fancybox.bind("[data-fancybox]", {
        buttons: [
            "zoom",
            "slideShow",
            "fullScreen",
            "thumbs",
            "close"
        ]
    });

    // ========== MixItUp ==========
    var mixer = mixitup('.directions__list');

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active');
        $(this).addClass('directions__filter-btn--active');
    });
    // ========== Team Slider ==========
    let $teamSlider = $('.team__slider');
    let slidesToShow = 4;
    let slideCount = $teamSlider.children().length;

    // Если 4 или меньше — клонируем полностью весь набор
    if (slideCount <= slidesToShow) {
        $teamSlider.append($teamSlider.children().clone());
    }

    $teamSlider.slick({
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        appendArrows: $('.team__slider-arrows'),
        responsive: 
        [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault();
        $('.team__slider').slick('slickPrev');
    })
    $('.team__slider-next').on('click', function (e) {
        e.preventDefault();
        $('.team__slider').slick('slickNext');
    })
    // ========== Testimonials Slider ==========
    let $testimonialsSlider = $('.testimonials__slider');
    let slidesToShow_testimonials = 1;
    
    $testimonialsSlider.slick({
        slidesToShow: slidesToShow_testimonials,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
        appendArrows: $('.testimonials__slider-arrow'),
        appendDots: $('.testimonials__slider-dots'),
                responsive: 
        [
            {
                breakpoint: 750,
                settings: {
                    
                },
            },
        ]
    });
    $('.testimonials__slider-prev').on('click', function (e) {
        e.preventDefault();
        $('.testimonials__slider').slick('slickPrev');
    })
    $('.testimonials__slider-next').on('click', function (e) {
        e.preventDefault();
        $('.testimonials__slider').slick('slickNext');
    })

    // ========== Program Accordeon ==========
    $('.program__acc-link').on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('program__acc-link--active')) {
            $(this).removeClass('program__acc-link--active');
            $(this).children('.program__acc-text').slideUp();
        } else {
            $('.program__acc-link').removeClass('program__acc-link--active')
            $('.program__acc-text').slideUp();
            $(this).addClass('program__acc-link--active');
            $(this).children('.program__acc-text').slideDown();
        }
    })

    // $(".header__nav-list a, .header__top-btn, .footer__go-top").on("click", function (e) {
    //     e.preventDefault()
    //     var id = $(this).attr('href'),
    //     top = $(id).offset().top
    //     console.log("работает")
    //     $('body,html').animate({ scrollTop: top }, 1500)
    // })

    $(".header__nav--list a, .header__top--button, .footer__go-top, .header__content--btn").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		console.log("работает")
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 800);
	});

    $('.burger, .overlay').on('click', function (e) {
        e.preventDefault();
        $('.header__top').toggleClass('header__top--open');
        $('.overlay').toggleClass('overlay--show')
        if ($('.burger').hasClass('burger--active')) {
            $('.burger').removeClass('burger--active');
        } else {
            $('.burger').removeClass('burger--active')
            $(this).addClass('burger--active');
        }
    });
    setInterval(() => {
        if ((window.scrollY > 5) && (!$('.header__top').hasClass('header__top--open'))) {
            $('.burger').addClass('burger--follow');
        } else {
            $('.burger').removeClass('burger--follow');
        }
    }, 10);
    
    function toggleFooterAccordion() {
    if ($(window).width() < 550) {
        $('.footer_site-title').off('click').on('click', function(){
        $(this).next().slideToggle();
        });
        } else {
            // На больших экранах показываем меню и отключаем аккордеон
            $('.footer_site-title').next().show();
            $('.footer_site-title').off('click');
        }
    }

// Инициализация
    $(document).ready(toggleFooterAccordion);
    $(window).on('resize', toggleFooterAccordion);
});
