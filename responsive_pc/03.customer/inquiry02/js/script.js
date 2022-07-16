'use strict';

// a 클릭했을때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});


// rightBtn
$(function(){
    var $w = $(window),
        footerHei = $('footer').outerHeight(),
        $banner = $('.wrap a p.rightBtn');
    $w.on('scroll', function(){
        var sT = $w.scrollTop();
        var val = $(document).height() - $w.height() - footerHei;

        if (sT >= val)
            $banner.addClass('on')
        else
            $banner.removeClass('on')
    });
});
// 상단으로 부드럽게
$(function(){
    $('.goTop').on('click', function(){
        var top = $('body').offset().top; //offset()함수는 대상자의 top, left등 위치값을 반환함
        $('html, body').animate({ scrollTop : (top)}, 400);
    });
});

// 답변창 내려오게
$(document).on('click', '.lnr', function () {
    var _this = $(this);
    var _target = $('.answer');
    if (_this.hasClass('lnr-chevron-up')) {
        _this.removeClass('lnr-chevron-up');
        _this.addClass('lnr lnr-chevron-down');
        _target.slideDown();
    } else {
        _this.removeClass('lnr-chevron-down');
        _this.addClass('lnr-chevron-up');
        _target.slideUp();
    }
});