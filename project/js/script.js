$(document).ready(function(){
    $('.gnb nav ul .depth1 a').on('mouseenter', function(){
        $(this).siblings('div').addClass('show');
        $(this).addClass('on');
    });
    $('.gnb nav ul .depth1').on('mouseleave', function(){
        $(this).find('div').removeClass('show');
        $(this).children('a').removeClass('on');
    });
});

$(window).scroll(function(){

    //gnb
    var height = $(document).scrollTop();
    if(height >= $('header').height()){
        $('.gnb').addClass('fix');
    } else{
        $('.gnb').removeClass('fix');
    }

});
