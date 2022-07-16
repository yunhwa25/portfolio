'use strict';

// a 클릭했을때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});


// header
// 창을 켰을 때 창 사이즈 기준
$(document).ready(function(){
    var WinW = $(window).width();
    if(WinW < 769) {
        $(".sub_menu").hide();
        // 마우스 오버
        $("header").off("mouseover mouseout");
        $('header .menubar').on('click', function(){
            $('.gnb').addClass('on'); //선택한 요소에 클래스 속성값을 추가
        });
        $('header .close').on('click', function(){ //닫기버튼과 섹션영역 클릭시 제거
            $('.gnb').removeClass('on'); //선택한 요소의 클래스 속성에서 지정한 값만 제거
        });
    }
    else {
        $(document).ready(function(){
            //**** 마우스오버  ****//
            //서브메뉴 숨기고 시작
            $(".sub_menu").hide();
            // 마우스 오버
            $("header").mouseover(function(){
                $(".sub_menu").stop().slideDown(300);
            })
            $("header").mouseout(function(){
                $(".sub_menu").stop().slideUp(300);
            });
        });
    }
});
// 실시간으로 창 사이즈 조절할 때 기준
$(window) .resize(function(){
    if ($(window).width()<769){
        $(document).ready(function(){
            //**** 마우스오버  ****//
            //서브메뉴 숨기고 시작
            $(".sub_menu").hide();
            // 마우스 오버
            $("header").off("mouseover mouseout");
        })
    }
    else {
        $(document).ready(function(){
            //**** 마우스오버  ****//
            //서브메뉴 숨기고 시작
            $(".sub_menu").hide();
            // 마우스 오버
            $("header").mouseover(function(){
                $(".sub_menu").stop().slideDown(300);
            })
            $("header").mouseout(function(){
                $(".sub_menu").stop().slideUp(300);
            });
        });
    }
});


// 이미지슬라이드
// 창을 켰을 때 창 사이즈 기준
$(function() {
    var WinW = $(window).width();
    if(WinW < 1024) {
        $(".visual .img_slide").slick({ 
            arrows: true, //화살표 사용안함
            dots: false, //닷츠
            autoplay: true, //자동재생
            fade: true, //페이드인 효과        
            autoplaySpeed: 4000, //재생시간
            pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
            pauseOnFocus:false //포커스시 슬라이드 멈춤 해제
        });
    }
    else {
        $(".visual .img_slide").slick({ 
            arrows: true, //화살표 사용안함
            dots: true, //닷츠
            autoplay: true, //자동재생
            fade: true, //페이드인 효과        
            autoplaySpeed: 4000, //재생시간
            pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
            pauseOnFocus:false //포커스시 슬라이드 멈춤 해제
        });
    }
});

//splitting.js
$(function(){
    Splitting();
});

// scroll animation
$(function(){
    $('.animate').scrolla({
        mobile: true,    //모바일버전시 활성화
        once: false      //스크롤시 딱 한번만 하고 싶을 때
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
$(function() {
    $('.goTop').on('click', function() {
        var top = $('body').position().top;  //offSet()함수는 대상자의 top, left등의 위치값을 반환함
        $('html, body').animate( { scrollTop : (top) }, 400);
    });
});

