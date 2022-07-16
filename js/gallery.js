'use strict';

// a 클릭했을때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

// .visual 이미지슬라이드
$(function(){
    $(".visual .mainImg .slide").slick({
        arrows: true,
        dots: true,
        slidesToShow: 2,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    });
});