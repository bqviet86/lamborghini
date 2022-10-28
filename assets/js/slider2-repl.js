// SWIPER SLIDER
let swiperThumbs = new Swiper('.mySwiper-thumb', {
    loop: true,
    spaceBetween: 0,
    effect: 'fade',
})

let swiperSlide = new Swiper('.mySwiper-slide', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    thumbs: {
        swiper: swiperThumbs,
    },
})