$(function() {
    var pageTop = $('#page-top');	
    pageTop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });
    pageTop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    $(window).on('scroll',function(){
        $('.fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
            $(this).addClass('active');
            }
        });
    });
    var startPos = 0, winScrollTop = 0;
    $(window).on('scroll', function(){
        winScrollTop = $(this).scrollTop();
        if (winScrollTop >= startPos) {
            $('.site-header').addClass('hide');
        } else {
            $('.site-header').removeClass('hide');
        }
        startPos = winScrollTop;
    });
});