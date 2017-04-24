$(document).ready(function(){

    //mouseenter mouseleave
    //mouseover mouseout
    $('.menu .drop a').on('mouseenter', function(){

        $(this).siblings('.sub').addClass('active');
        $(this).addClass('on');

//       $('.sub').show();
//       $('.sub').stop().slideDown();
//        $(this).siblings.show();
//        $('.sub').animate({top: '100%', opacity : 1});
    });

    $('.menu .drop').on('mouseleave', function(){

        $(this).children('.sub').removeClass('active');
        $(this).children('a').removeClass('on');

//       $('.sub').hide();
//       $('.sub').stop().slideUp();
//        $(this).children('.sub').animate({top:'120%', opcity:0}, function(){
//            $('.sub').hide();
//        });

    });
    //슬라이드 업다운은 누적이 된다. 누적없게 스탑을 사용한다. 스탑은 모든걸 멈추게 해서 위험하니까 잘생각하고 쓰기

    //on 메소드
    /*
        처음에는 그냥 click을 사용했다.
        요즘은 on메소드를 사용해서 click 등의 이벤트를 2개 넣을 수있다.
        하나의 선택자 안에 2개이상의 이벤트를 각각의 함수를 넣을 수잇따.
    */
    /*
        오버와 엔터의 차이
        오버의 경우 내부의 요소가 있을때도 계속 오버이벤트가 중복발생한다 오버 오버 오버 이벤트가 자식태그에도 전달된다. (버블링 현상)
    */
//    $('.box1').on({
//        mouseenter : function(){
//            $(this).css('background','skyblue');
//        },
//        mouseleave : function(){
//            $(this).css('background','darkblue');
//        },
//        click : function(){
//            $(this).css('width',500);
//        }
//    });
//
//    $('.box2').on({
//        mouseover : function(){
//            $(this).css('background','skyblue');
//        },
//        mouseout : function(){
//            $(this).css('background','darkblue');
//        }
//
//    });

//    $('.box1').on({
//        mouseenter : function(){
//            $(this).addClass('color');
//        },
//        mouseleave : function(){
//            $(this).removeClass('color');
//        }
//    })


    //hover는 함수를 두개 가질수 있다.
//    $('.box1').hover(function(){
//        $(this).addClass('color');
//    },function(){
//        $(this).removeClass('color');
//    })

    //hover의 기능이 같다면
    $('.box1').hover(function(){
        $(this).toggleClass('color');
    });
});
