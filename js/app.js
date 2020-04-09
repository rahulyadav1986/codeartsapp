const newLocal = setInterval(function () {
    jQuery('.humberger-menu').click(function(){
        jQuery('.side-menu').addClass('open');
        jQuery('.ovearlay').addClass('open');
    });
    jQuery('.side-menu ul li').click(function(){
        jQuery('.side-menu').removeClass('open');
        jQuery('.ovearlay').removeClass('open');
    });  
    jQuery('.ovearlay').click(function(){
        jQuery('.side-menu').removeClass('open');
        jQuery('.ovearlay').removeClass('open');
    });     
}, 1000);





