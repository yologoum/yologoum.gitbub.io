$(document).ready(function(){
    //햄버거 메뉴만들기
   $('.btn').on('click', function(){
     $('.menu').addClass('active'); 
    $('.cover').addClass('on');
   });
    $('.cover').on('click', function(){
     $('.menu').removeClass('active'); 
    $('.cover').removeClass('on');
   });
    
    //부모의 전파받은 이벤트 안받겠다.
    $('.menu').on('click', function(e){
        e.stopPropagation();
    });
    
    //탭메뉴 만들기
    $('.tabmenu h2').on('click',function(){
       
        $(this).next().show();
        $(this).parent('.tabmenu').siblings().children('p').hide();
    });
    
//    $('.tabmenu').eq(2)
    $('.tabmenu:nth-child(3) h2').trigger('click'); //제이쿼리가 대신클릭해주는것이다.
});