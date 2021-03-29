const swiper2 = new Swiper(".bike-list-slider", {
    slidesPerView: 1,
    spaceBetween: 25,
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 35
        },
        800: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        }
    }
    ,
    navigation: {
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
    },
    autoHeight: true
});
