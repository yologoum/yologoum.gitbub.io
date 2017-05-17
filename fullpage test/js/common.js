(function($) {
$.activar = {
	pageControl : {
		touch : null,
		touchY : null,
		currentPage : 0,
		pageMove : false,
		pageLen : null,
		easing : 'easeInOutQuint',
		runTime : null,
		mobileTime : 800,
		pcTime : 1000
	},
	init : function() {
		var _this = this;
		$(window).ready(function() {
			_this.run();
		});
	},
	run : function() {
		var _this = this;
		_this.pageControl.pageLen = $(".section").length === 0 ? 1 : $(".section").length;
		_this.pageControl.runTime = $.activar.mobile ? _this.pageControl.mobileTime : _this.pageControl.pcTime;
		//$("body").attr("id", "page01").addClass("odd");
		$(".section01").addClass("active");

		// 마우스 휠 이벤트
		$(document).bind("mousewheel, wheel", function(event) {
			_this.wheel(event);
			event.preventDefault();
		});

		// 모바일 터치 이벤트
		$(document).bind("touchstart",function(e) {
			var event = e.originalEvent;
			_this.pageControl.touch = event.touches[0].screenY;
		}).bind("touchmove",function(e) {
			var event = e.originalEvent;
			if (_this.pageControl.touch > event.touches[0].screenY + 50) _this.wheelHandle(-1); // 터치 아래
			if (_this.pageControl.touch < event.touches[0].screenY - 50) _this.wheelHandle(1); // 터치 위로
			e.preventDefault();
		}).bind("touchend",function(e) {
			//console.log(_this.pageControl.touchY);
		});

		$(".pageNav button").bind("click", function() {
			var index = $(this).index();
			$(this).parent().addClass("on").siblings().removeClass("on");
			if (_this.pageControl.currentPage != index) _this.pageMove(index);
		});
	},
	wheel : function(event) {
		var wheelDelta,
			eventObject = event.originalEvent,
			wheelDelta = eventObject.wheelDelta / 120;
		if (!wheelDelta) wheelDelta = eventObject.deltaY * -1;
		this.wheelHandle(wheelDelta);
	},
	wheelHandle : function(wheelDelta) {
		var pageLen = this.pageControl.pageLen;

		if (wheelDelta < 0) { // 마우스 휠 아래
			if (this.pageControl.currentPage != pageLen -1) this.pageMove(this.pageControl.currentPage + 1);
		} else { // 마우스 휠 위로
			if (this.pageControl.currentPage !== 0) this.pageMove(this.pageControl.currentPage - 1);
		}
	},
	pageMove : function(index) {
		var _this = this,
			pageLen = _this.pageControl.pageLen;

		if (_this.pageControl.pageMove) return;
		_this.pageControl.pageMove = true;
		_this.pageControl.currentPage = index;

		var bodyId = "page0" + (index + 1);
		$("body").attr("id", bodyId).addClass("move");
		$(".pageNav li").eq(index).addClass("on").siblings().removeClass("on");

		// 마지막 페이지 클래스
		if (index == pageLen - 1) $("body").addClass("last");
		else $("body").removeClass("last");

		if (index !== 0) $("body").addClass("fixed");
		else $("body").removeClass("fixed");

		if ((index % 2) === 0) $("body").addClass("odd").removeClass("even");
		else $("body").addClass("even").removeClass("odd");

		var $prev = $(".section.active"),
			$current = $(".section").eq(index).addClass("active");

		setTimeout(function() {
			$prev.removeClass("active");
			$("body").removeClass("move");
			_this.pageControl.pageMove = false;
		}, _this.pageControl.runTime);
	}
};

if (navigator.userAgent.match("Mobile") === null){
	$.activar.userAgent = "pc";
	$.activar.mobile = false;
/*} else if (navigator.userAgent.match("iPad") != null){
	$.activar.userAgent = "iPad";
	$.activar.mobile = true;*/
} else {
	$.activar.userAgent = "mobile";
	$.activar.mobile = true;
}

$.activar.init();

})(jQuery);

$(document).ready(function(){

	//랜덤이미지
	var menuType = ['black' , 'black' , 'white' , 'white' , 'white'];
	var rNum = Math.floor(Math.random() * menuType.length);

	$('.section01').css({'background-image': 'url(./images/bg/mainImg' + rNum + '.jpg)' });
	console.log(rNum);
	//랜덤 이미지 따른 내용 컬러변경
	if( menuType[rNum] === 'black'){
		$('section').css('color' , 'blue');
	} else if(menuType[rNum] === 'white'){
		$('section').css('color' , 'white');
	}
});
