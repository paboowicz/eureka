$(function () {

    $('.scroll-down').click(function(e){
        e.preventDefault();
        const headerHeight = $('.header-bottomarea').outerHeight();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("main.main-content").offset().top - headerHeight
        }, 1000);
    });

});