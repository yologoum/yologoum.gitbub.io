//kanban module
var Kanban = (function($){
    //private 기능부분
    //보드를 추가하는 기능
    var add_board = function(e){
        if (e.keyCode == 13 || e.type == 'click'){
            
            
            var title =$('.add_board_title').val();
            var tag = '<div class="list">\
                            <h2>' + title + '</h2>\
                            <div class="contents">\
                            </div>\
                            <button class="card_btn">card add</button>\
                            <input type="text" class="add_card_btn" />\
                        </div>';
            $('#board').append(tag);
            $('.add_board_title').val('');
        }
    

    }
    
    //카드 추가하는 기능
    //자바스크립트는 동적으로 추가 된 태그에는 이벤트 안먹는다.
    var add_card = function(){
        if(event.keyCode == 13 || event.type == 'click'){
            if(event.type == 'click'){
                var card =$(this).siblings('.add_card_btn').val();
            }else{
                var card =$(this).val();
            }
            //var card =$('.add_card_btn').val();
            var tag = '<div class="card">'+ card +'\
                            <span class="close">X</span>\
                            <span class="next">-></span>\
                            <span class="prev"><-</span>\
                        <div>'
            $(this).parent('.list').find('.contents').append(tag);
        }
        
    }
    
    //카드삭제
    var delete_card =function(){
        $(this).parent('.card').remove();
    }
    
    var move =function(){ 
        var class_name = $(this).attr('class');
        if(class_name == "next"){
            $(this).parents('.list').next('.list').find('.contents').append($(this).parent('.card'));    
        }else{
            $(this).parents('.list').prev('.list').find('.contents').append($(this).parent('.card'));    
        }
    }
    return{
        //컨트롤 이벤트부분
        init : function(){
            //이벤트 정리
            $('.add_board').on('click', add_board);
            $('.add_board_title').on('keypress',add_board);
            //$('.card_btn').on('click', add_card);
            //동적으로 생성된 태그에 이벤트를 먹게 하기 위해서 on메소드에 선택자를 넣어준다.
            $(document).on('click','.card_btn',add_card);
            $(document).on('keypress','.add_card_btn',add_card);
            $(document).on('click','.close',delete_card);
            $(document).on('click','.next',move);
            $(document).on('click','.prev',move);
}
    }
}(jQuery));

$(document).ready(function(){
    Kanban.init();
});