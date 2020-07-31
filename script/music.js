$(function() {
    var windowWidth = window.innerWidth;
    $('.scroll-down, section, footer').fadeIn(300);
}).on('click', "#page-top", function() {
    $('body, html').animate({
        scrollTop: 0
    }, 500);
    return false;
}).on('click', '.nav-toggle', function () {
    $('.nav-toggle, .nav').toggleClass('show');
}).on('click', '.nav-menu li a', function (){
    $('.nav-toggle, .nav').removeClass('show');
});

var startPos = 0, winScrollTop = 0;
$(window).on('scroll',function() {
    var pageTop = $('#page-top');	
    if ($(this).scrollTop() > 100) {
        pageTop.fadeIn();
    } else {
        pageTop.fadeOut();
    }
    $('.fadein').each(function() {
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 200){
        $(this).addClass('active');
        }
    });

    winScrollTop = $(this).scrollTop();
    winWidth = window.innerWidth;
    if (winWidth > 1024) {
        if (winScrollTop >= startPos) {
            $('.nav-wrapper').addClass('hide');
        } else {
            $('.nav-wrapper').removeClass('hide');
        }
    }
    if (winScrollTop >= 200) {
        $('.scroll-down').addClass('hide').removeClass('show');
    } else {
        $('.scroll-down').removeClass('hide').addClass('show');
    }
    startPos = winScrollTop;
});
