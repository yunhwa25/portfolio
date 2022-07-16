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