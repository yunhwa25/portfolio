'use strict';

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