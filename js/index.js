'use strict';

// a 클릭했을때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

// .about 탭메뉴
$(function(){
    $('.tab_tit').on('click', function(){
        var index = $('.tab_tit').index($(this));
        $('.tab_txt').removeClass('on');
        $('.tab_txt:eq('+ index + ')').addClass('on')
        $('.tab_tit').removeClass('on');
        $('.tab_tit:eq('+ index + ')').addClass('on')
    });
});

// .gallery_sub fix
$(window).on('scroll resize', function(){
    var scrollPos = 0;
    scrollPos = $(document).scrollTop();
    fix();
    
    function fix(){
        if(scrollPos > 3400) {
            $('.fix .list').addClass('fixed');
            $('.fix .list').removeClass('absolute');
        }
        else {$('.fix .list').removeClass('fixed');}
        if(scrollPos > 13882) {
            $('.fix .list').removeClass('fixed');
            $('.fix .list').addClass('absolute');
        }
        
    }
});

$(function(){
    $(document).on('click', '.fix .list a', function(){
        $('html, body').animate({'scrollTop': $($(this).attr('href')).offset().top-219},500);
        return false;
    });

    var fix = $('.fix .list'),
        fixMenu = $('.fix .list li'),
        fixMenuLeng = fixMenu.length;
    $(window).on('scroll load resize', function(){
        for (var i = 0; i < fixMenuLeng; i++){
            if ($(fixMenu.eq(fixMenuLeng-1-i).find('a').attr('href')).offset().top-300 < $(window).scrollTop()){
                fixMenu.removeClass('on')
                fixMenu.eq(fixMenuLeng-1-i).addClass('on')
                break
            } else {
                fixMenu.eq(0).addClass('on')
            }
        }
    });
});




// .ncs 이미지슬라이드
$(function() {
    $(".ncs .bottom .slide").slick({ 
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
});


// $('.aco_tit').click(function(e){
//     e.preventDefault();
//     $(this).next().slideToggle().siblings('.aco_txt').slideUp()
// });
// $(".aco_tit").click(function(){
//     $(this).next(".aco_txt").stop().slideToggle(300);
//     $(this).toggleClass('on').siblings().removeClass('on');
//     $(this).next(".aco_txt").siblings(".aco_txt").slideUp(300);
// });

// $(".que").click(function() {
//     $(this).next(".anw").stop().slideToggle(300);
//    $(this).toggleClass('on').siblings().removeClass('on');
//    $(this).next(".anw").siblings(".anw").slideUp(300); // 1개씩 펼치기
//  });

// // 답변창 내려오게
// $(document).on('click', '.lnr', function () {
//     var _this = $(this);
//     var _target = $('.answer');
//     if (_this.hasClass('lnr-chevron-up')) {
//         _this.removeClass('lnr-chevron-up');
//         _this.addClass('lnr lnr-chevron-down');
//         _target.slideDown();
//     } else {
//         _this.removeClass('lnr-chevron-down');
//         _this.addClass('lnr-chevron-up');
//         _target.slideUp();
//     }
// });

// $(function(){
//     var acc = document.getElementsByClassName("aco_tit");
//     var i;

//     for (i = 0; i < acc.length; i++){
//         acc[i].addEventListener("click", function(){
//             this.classList.toggle("on");

//             var aco_txt = this.nextElementSiblling;
//             if (aco_txt.style.display === "block") {
//                 aco_txt.style.display = "none";
//             } else {
//                 aco_txt.style.display = "block";
//             }
//         });
//     }
// });