'use strict';

// a 클릭했을때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

// .overview 이미지슬라이드
$(function(){
    $(".overview .slide").slick({
        arrows: false,
        dots: false,
        autoplay: true,
        fade: true,
        autoplaySpeed: 4000,
    });
});

// TOP버튼
$(function() {
    $('.goTop').on('click', function() {
        var top = $('body').position().top;
        $('html, body').animate( { scrollTop : (top) }, 500);
    });
});