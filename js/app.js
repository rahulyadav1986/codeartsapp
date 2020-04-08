const newLocal = setInterval(function () {
    /*jQuery('.humberger-menu').click(function(){
        jQuery('.side-menu').addClass('open');
        jQuery('.ovearlay').addClass('open');
    });
    jQuery('.menuback').click(function(){
        jQuery('.side-menu').removeClass('open');
        jQuery('.ovearlay').removeClass('open');
    });
    jQuery('.ovearlay').click(function(){
        jQuery('.side-menu').removeClass('open');
        jQuery('.ovearlay').removeClass('open');
    });
    jQuery('.nav-menu li').click(function(){
        jQuery('.side-menu').removeClass('open');
        jQuery('.ovearlay').removeClass('open');
    });*/
    setTimeout(function () {
        jQuery('.spalsh-screen').hide();
    }, 3000);
    jQuery('.bannar-slider').owlCarousel({
        loop: true,
        margin: 0,
        smartSpeed: 450,
        auto: true,
        nav: false,
        dots: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            980: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
})