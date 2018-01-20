 
 // 资讯动态
 $('.titleTop h4').click(function() {
 	// 改变自身的字体颜色
 	$('.titleTop h4').removeClass('titleChange');
 	$(this).addClass('titleChange');
 	// 获取data-class
 	var thisClass = $(this).attr('data-class');
 	$('.titleBottom ul').hide();
 	$('#' + thisClass).show();
 });
 //    轮播图
// 取出数据
var swiperStr = localStorage.getItem('swiperImages');
//console.log(swiperString);
// 将JSON下的字符串转化成可以用来操作的数据格式（数组或对象）
var swiper = eval('('+ swiperStr +')');
//console.log(swiper);
$.each(swiper,function(i,item) {
	var newSwiper = $('<div class="swiper-slide" data-swiper-autoplay="2000"><img src="'+ item.imgurl +'" /></div>');
	$('.swiper-wrapper').append(newSwiper);
});
var swiper = new Swiper('.swiper-container', {
 	slidesPerView: 1,
 	spaceBetween: 30,
 	loop: true,
 	autoplay: true,
 	pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
 });
 
 // wrap1 内容1
var oneLeftStr = localStorage.getItem('conOneLeft');
//console.log(oneLeftStr);
var oneLeft = eval('('+ oneLeftStr +')');
//console.log(oneLeft);
$.each(oneLeft, function(i,item) {
	var newOneLeft = $('<div class="wrapList col-sm-12 col-md-12 col-lg-6"><div class="list"><img src="'+ item.imgurl +'" /><div class="box1Text"><div class="box1Ico"></div><div class="box1Tex textRight"><h2 class="box1TitCn">漱玉图集</h2><h3 class="box1TitEn">LADY ATLAS</h3></div></div></div></div>');
	$('.wrap1').append(newOneLeft);
});
// wrap1 内容2
var oneRightStr = localStorage.getItem('conOneRight');
//console.log(oneRightStr);
var oneRight = eval('('+ oneRightStr +')');
//console.log(oneRight);
$.each(oneRight, function(i,item) {
	var newOneRight = $('<div class="wrapList col-sm-12 col-md-6 col-lg-3"><div class="list"><img src="'+ item.imgurl +'" /></div></div>');
	$('.wrap1').append(newOneRight);
});

// wrap2 内容
var twoStr = localStorage.getItem('contentTwoAll');
//console.log(twoStr);
var two = eval('('+ twoStr +')');
//console.log(two);
$.each(two, function(i,item) {
	var newTwo = $('<div class="wrapList col-xs-6 col-sm-6 col-md-3"><div class="list"><img src="'+ item.imgurl +'" /></div></div>');
	$('.wrap2_row').append(newTwo);
});

// wrap3 内容
var threeStr = localStorage.getItem('contentThreeAll');
//console.log(threeStr);
var three = eval('('+ threeStr +')');
//console.log(three);
$.each(three, function(i,item) {
	var newThree = $('<div class="wrapList col-xs-6 col-sm-6 col-md-3"><div class="list"><img src="'+ item.imgurl +'" /><div></div><p>'+ item.name +'</p></div></div>');
	$('.wrap3_row').append(newThree);
});

// wrap4 内容
var fourStr = localStorage.getItem('contentFourAll');
//console.log(fourStr);
var four = eval('('+ fourStr +')');
//console.log(four);
$.each(four, function(i,item) {
	var newFour = $('<div class="wrapList col-xs-6 col-sm-6 col-md-3"><div class="list"><img src="'+ item.imgurl +'" /><div></div><p>'+ item.name +'</p></div></div>');
	$('.wrap4_row').append(newFour);
});

// wrap5 内容
var fiveStr = localStorage.getItem('contentFiveAll');
//console.log(fiveStr);
var five = eval('('+ fiveStr +')');
//console.log(five);
$.each(five, function(i,item) {
	var newFive = $('<div class="wrapList col-xs-6 col-sm-6 col-md-3"><div class="list"><p>'+ item.title +'​</p><div><img src="'+ item.imgurl +'" /></div><h3>'+ item.name +'</h3></div></div>');
	$('.wrap5_row').append(newFive);
});

// wrap6 内容1
var sixOne = localStorage.getItem('contentSixOne');
//console.log(sixOne);
var sixOneAll = eval('('+ sixOne +')');
//console.log(sixOneAll);
$.each(sixOneAll, function(i,item) {
	var newSixOne = $('<li><div class="titleTime"><p class="titleDate">'+ item.time +'</p><p class="titleYear">'+ item.year +'</p></div><div class="titleWire"></div><div class="titleText"><h3 class="ellipsis">'+ item.title +'</h3><p class="titleBrief">'+ item.content +'</p></div></li>');
	$('#titleHot').append(newSixOne);
});

// wrap6 内容2
var sixTwo = localStorage.getItem('contentSixTwo');
//console.log(sixTwo);
var sixTwoAll = eval('('+ sixTwo +')');
//console.log(sixTwoAll);
$.each(sixTwoAll, function(i,item) {
	var newSixTwo = $('<li><div class="titleTime"><p class="titleDate">'+ item.time +'</p><p class="titleYear">'+ item.year +'</p></div><div class="titleWire"></div><div class="titleText"><h3 class="ellipsis">'+ item.title +'</h3><p class="titleBrief">'+ item.content +'</p></div></li>');
	$('#titleBrand').append(newSixTwo);
});

// wrap6 内容3
var sixThree = localStorage.getItem('contentSixThree');
//console.log(sixThree);
var sixThreeAll = eval('('+ sixThree +')');
//console.log(sixThreeAll);
$.each(sixThreeAll, function(i,item) {
	var newSixThree = $('<li><div class="titleTime"><p class="titleDate">'+ item.time +'</p><p class="titleYear">'+ item.year +'</p></div><div class="titleWire"></div><div class="titleText"><h3 class="ellipsis">'+ item.title +'</h3><p class="titleBrief">'+ item.content +'</p></div></li>');
	$('#titleNews').append(newSixThree);
});

//var fullWrap = document.getElementsByClassName('fullWrap')[0];
//console.log(fullWrap);
//var y = 0;
//window.onload = function() {
//	function onMouseWheel(ev) {
//		var ev = event || window.event;
//		var down = true;
//		down = ev.wheelDelta ? ev.wheelDelta < 0 : ev.detail > 0;
//		if(down) {
//			fullWrap.style.transform = 'translate3d(0px,'+ y +'px,0px)';
//			console.log(fullWrap.style.transform);
//			for(var i = 0; i < $('.contWrap').length; i++) {
//				var a = $('.contWrap')[i].offsetTop;
//				console.log(a);
//				console.log($('.contWrap')[i].offsetHeight);
//			}
//		}
//	}
//}











