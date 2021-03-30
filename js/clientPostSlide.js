const swiper3 = new Swiper(".client_list_slider", {
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: {
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
    },
    breakpoints: {
        992: {
            slidesPerView: 2,
            spaceBetween: 35,
        },
    },
    // autoHeight: true,
    pagination: {
        el: ".swiper-pagination",
    },
});
