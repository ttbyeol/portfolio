var scrollEvent = false; //한 번씩만 적용하기 위해 참, 거짓 변수 선언
var count = 0; //어느 만큼 내렸는지

$("html, body").on("mousewheel", function (c) {
	c.preventDefault();
	var m = c.originalEvent.wheelDelta;
	var sb = $("#page1").height();

	if(m > 1 && scrollEvent == false && count >= 1){
		console.log(count);
		scrollEvent = true;
		count--;
		$("html, body").stop().animate({scrollTop:sb*count},
			{duration:300, complete: function () {
				scrollEvent = false;}
			});
	} else if (m < 1 && scrollEvent == false && count < 3) {
		console.log(count);
		scrollEvent = true;
		count++;
		$("html, body").stop().animate({scrollTop:sb*count},
			{duration:300, complete: function () {
				scrollEvent = false;}
			});
		}
	});