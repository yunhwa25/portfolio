'use strict'; // 이런거 쓸바에 타입스크립트를 씀 .. 

// a 클릭했을때 위로 튕기는 이벤트제거
// document = 문서 on 문서가 로드 되었을 때 
// function 함수라는뜻
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

// gnb 메뉴 
$(function() {
    $('header .manuOpen').on('click', function(){
    $('.gnb').addClass('on');//선택한 요소에 클래스 속성값을 추가
    });
   $('.gnb .close').on('click', function() { //닫기버튼과 섹션영역 클릭시 제거
    $('.gnb').removeClass('on');//선택한 요소의 클래스 속성에서 지정한 값만 제거
    });
});


 //scroll animation
 $(function(){
    $('.animate').scrolla({
        moblie : true,  //모바일버전시 활성화
        once: true //스크롤시 딱 한번만 하고 싶을 때 true, 반복하고 싶을 때 false
    });
});



// slick.js
$(function() {
    $(".visual .slide").slick({ 
         arrows: true, //화살표 사용안함
         dots: false, //닷츠
         autoplay: true, //자동재생
         fade: true, //페이드인 효과        
         autoplaySpeed: 4000, //재생시간
         pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
        pauseOnFocus:false //포커스시 슬라이드 멈춤 해제
     });
  }); 


// fixheader
var scrollValue = 0;
scrollValue = $(document).scrollTop(); 

fixHeader();

$(window).on('scroll resize', function(){
 scrollValue = $(document).scrollTop(); 
 fixHeader();
});

function fixHeader(){
  if(scrollValue > 200) {
       $('header').addClass('on');
   } else {
      $('header').removeClass('on');}
 }

//상단이동 부드럽게
$(function(){
    $('.goTop').on('click', function(){
        var top = $('body').offset().top; //offset()함수는 대상자의 top, left등 위치값을 반환함
        $('html, body').animate({ scrollTop : (top)}, 400);
    });
});

