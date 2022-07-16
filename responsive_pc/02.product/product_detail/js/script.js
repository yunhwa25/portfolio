'use strict';

// a 클릭했을때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//헤더
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

// 이미지슬라이드
$(function() {
    $(".contents .productImg .img_slide ").slick({ 
        arrows: true, //화살표
        dots: false, //닷츠
        autoplay: true, //자동재생
        fade: true, //페이드인 효과        
        autoplaySpeed: 4000, //재생시간
        pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
        pauseOnFocus:false //포커스시 슬라이드 멈춤 해제
    });
});

// 탭메뉴
$(function(){
    $('.tabMenu .list li a').on('click', function(){
        var num = $('.tabMenu .list li a').index($(this));
        $('.tabMenu .box').removeClass('on');
        $('.tabMenu .box:eq('+(num)+')').addClass('on');
        $('.tabMenu .list li').removeClass('on');
        $(this).parent().addClass('on')
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
// 상단으로 부드럽게
$(function(){
    $('.goTop').on('click', function(){
        var top = $('body').offset().top; //offset()함수는 대상자의 top, left등 위치값을 반환함
        $('html, body').animate({ scrollTop : (top)}, 400);
    });
});