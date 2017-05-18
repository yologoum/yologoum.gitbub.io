js 작성

파일은 페이지별로 분리하며 공통스크립트는 common폴더에 정리한다.
수정, 관리를 위해 ????? 함수로 분리하여 작성

body 하단에 스크립트 링크 연결 (공통 사용인 플러그인 및 제이쿼리는 예외 head에 유지)

작성 순서
01. 설정 == 변수, 배열, 위치
02. 함수 실행
03. scroll/resize/이벤트
04. 함수


on메소드 사용법
    각 이벤트에 따른 함수를 사용할 수 있다.
    $('.box1').on({
       mouseenter : function(){
           $(this).css('background','skyblue');
       },
       mouseleave : function(){
           $(this).css('background','darkblue');
       },
       click : function(){
           $(this).css('width',500);
       }
    });

    한 선택자에 다수의 이벤트를 연결할 수 있다.
   $(선택자).on('click mouseenter', function(){
       일어날 일
   });

레디 함수 구분
$(document).ready(function(){ ... }); === $(function(){ ... });   //문서로드후 실행
(function($){ ... })(jQuery);   //$의 의미를 jquery에서 사용하겠다는 의미(다른 라이브러리에서도 사용할수 있기에 jquery 객체화 시키는것)
