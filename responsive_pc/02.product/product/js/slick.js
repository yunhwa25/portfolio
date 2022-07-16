$(function(){
    $('.visualimg').slick({
        autoplay: true,
        dots: true,
        autoplaySpeed: 4000
    });
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


$(document).ready(function(){
    //**** 마우스오버  ****//
    //서브메뉴 숨기고 시작
    $(".sub_menu").hide();
    // 마우스 오버
    $("header").mouseover(function(){
      $(".sub_menu").stop().slideDown(300);
     }).mouseout(function(){
      $(".sub_menu").stop().slideUp(300);
    });
});