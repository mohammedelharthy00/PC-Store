$(document).ready(function () {
    var owl = $(".banner-slider");

    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true, 
        autoplayTimeout: 4000, 
        autoplayHoverPause: true, 
        dots: true,
        nav: false,
        animateOut: 'fadeOut', 
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 }
        }
    });

    owl.on("changed.owl.carousel", function (event) {
        new WOW().init();
    });
});
