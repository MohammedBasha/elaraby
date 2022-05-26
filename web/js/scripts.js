require(['jquery','slick'], function($){
    $(document).ready(function () {
        // Init the Category's products slider in the Homepage with Slick lib
        $('.home-category .products').slick({
            dots: false,
            arrows: true,
            autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 1
        });
    });
});