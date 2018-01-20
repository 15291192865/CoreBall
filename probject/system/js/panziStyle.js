// 侧边栏绑定点击事件
$('.manager-btn .btn').click(function() {
	// 改变按钮自身的颜色变化
	$('.manager-btn .btn').removeClass('btn-danger');
	$(this).addClass('btn-danger');

	// 获取data-class
	var divClass = $(this).attr('data-class');
	$('.manager div').hide();
	$('.' + divClass).show();
});

// 展示列表
// 轮播图
var swiperStr = localStorage.getItem('swiperImages'); // 取数据
var swiper = eval('(' + swiperStr + ')'); // 转数组
//		console.log(swiper);
$.each(swiper, function(i, item) {
	// 创建新列表
	var newSwiper = $('<tr><td><img style="width: 100px;" src="' + item.imgurl + '"/></td><td><button class="btn btn-info" onclick="modSwiper(this)" data-id="' + i + '" data-toggle="modal" data-target="#oneModal">修改</button><button class="btn btn-warning" onclick="delSwiper(this)" data-id="' + i + '">删除</button></td></tr>');
	// 将新的对象添加到商品展示表格中
	$('.swiperManager table').append(newSwiper);
});
// 修改
function modSwiper(a) {
	var index = $(a).attr('data-id');
	//	console.log(index);
	$('#refSwiper').click(function() {
		history.go(0);
		var modSwi_imgurl = $('#modswimg').val();
		var newSwiObj = {
			imgurl: modSwi_imgurl
		};
		swiper.splice(index, 1, newSwiObj);
		var newStr = JSON.stringify(swiper);
		localStorage.setItem('swiperImages', newStr);
	});
}
// 提交按钮的点击事件（添加商品）
// 轮播
$('#subSwiper').click(function() {
	// 获取新信息(押队信息做过滤：正则)
	var sw_imgurl = $('#swimg').val(); // 图片路径
	// 将获取的信息组装成一条商品信息（一个对象）
	var newSwiperObj = {
		imgurl: sw_imgurl
	};
	swiper.push(newSwiperObj); // 添加信息
	// 将goodArr转化成字符串，更新到localStorage
	var swiperString = JSON.stringify(swiper);
	localStorage.setItem('swiperImages', swiperString);
	// 刷新页面
	history.go(0);
});
// 删除
function delSwiper(a) {
	swal({
		title: "您确定要删除这条信息吗？",
		text: "删除后将无法恢复，请谨慎操作！",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		confirmButtonText: "是的，我要删除！",
		cancelButtonText: "让我在考虑一下……",
		closeOnConfirm: false,
		closeOnCancel: false
	})
	$('.swal2-confirm').click(function() {
		// 获取删除的这条信息在goodArr中的位置
		var index = $(a).attr('data-id');
		// 从数组中删除当前信息
		swiper.splice(index, 1);
		// 将swiper转换成字符串
		var newString = JSON.stringify(swiper);
		localStorage.setItem('swiperImages', newString);
		// 刷新页面
		history.go(0);
	});
}
// wrap1 内容1
var oneLeftStr = localStorage.getItem('conOneLeft');
//console.log(oneLeftStr);
var oneLeft = eval('(' + oneLeftStr + ')');
//console.log(oneLeft);
$.each(oneLeft, function(i, item) {
	var newOneLeft = $('<tr><td><img style="width: 100px;" src="' + item.imgurl + '"/></td><td><button class="btn btn-info" onclick="modOneLeft(this)" data-id="' + i + '" data-toggle="modal" data-target="#twoModal">修改</button><button class="btn btn-warning" onclick="deloneLeft(this)" data-id="' + i + '">删除</button></td></tr>');
	$('.wrap1LeftManager table').append(newOneLeft);
});
// 修改
function modOneLeft(a) {
	var index = $(a).attr('data-id');
	//	console.log(index);
	$('#refOneLeft').click(function() {
		history.go(0);
		var modOneLeft_imgurl = $('#modolimg').val();
		var newOneLeftObj = {
			imgurl: modOneLeft_imgurl
		};
		oneLeft.splice(index, 1, newOneLeftObj);
		var newStr = JSON.stringify(oneLeft);
		localStorage.setItem('conOneLeft', newStr);
	});
}
// 添加
$('#subOneLeft').click(function() {
	// 获取新信息(押队信息做过滤：正则)
	var ol_imgurl = $('#olimg').val(); // 图片路径
	// 将获取的信息组装成一条商品信息（一个对象）
	var newOneLeftObj = {
		imgurl: ol_imgurl,
	};
	oneLeft.push(newOneLeftObj);
	var oneLeftString = JSON.stringify(oneLeft);
	localStorage.setItem('conOneLeft', oneLeftString);
	// 刷新页面
	history.go(0);
});
// 删除
function deloneLeft(a) {
	swal({
		title: "您确定要删除这条信息吗？",
		text: "删除后将无法恢复，请谨慎操作！",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		confirmButtonText: "是的，我要删除！",
		cancelButtonText: "让我在考虑一下……",
		closeOnConfirm: false,
		closeOnCancel: false
	})
	$('.swal2-confirm').click(function() {
		// a: 点击的删除按钮
		// 获取删除的这条信息在goodArr中的位置
		var index = $(a).attr('data-id');
		// 从数组中删除当前信息
		oneLeft.splice(index, 1);
		// 将goodArr转换成字符串
		var newString = JSON.stringify(oneLeft);
		localStorage.setItem('conOneLeft', newString);
		// 刷新页面
		history.go(0);
	});
}
// wrap1 内容2
var oneRightStr = localStorage.getItem('conOneRight');
//console.log(oneRightStr);
var oneRight = eval('(' + oneRightStr + ')');
//console.log(oneRight);
$.each(oneRight, function(i, item) {
	var newOneRight = $('<tr><td><img style="width: 100px;" src="' + item.imgurl + '"/></td><td><button class="btn btn-info" onclick="modOneRight(this)" data-id="' + i + '" data-toggle="modal" data-target="#threeModal">修改</button><button class="btn btn-warning" onclick="deloneRight(this)" data-id="' + i + '">删除</button></td></tr>');
	$('.wrap1RightManager table').append(newOneRight);
});
// 修改
function modOneRight(a) {
	var index = $(a).attr('data-id');
	//	console.log(index);
	$('#refOneRight').click(function() {
		history.go(0);
		var modOneRight_imgurl = $('#modorimg').val();
		var newOneRightObj = {
			imgurl: modOneRight_imgurl
		};
		oneRight.splice(index, 1, newOneRightObj);
		var newStr = JSON.stringify(oneRight);
		localStorage.setItem('conOneRight', newStr);
	});
}
// 添加
$('#subOneRight').click(function() {
	// 获取新信息(押队信息做过滤：正则)
	var or_imgurl = $('#orimg').val(); // 图片路径
	// 将获取的信息组装成一条商品信息（一个对象）
	var newOneRightObj = {
		imgurl: or_imgurl,
	};
	oneRight.push(newOneRightObj);
	var oneRightString = JSON.stringify(oneRight);
	localStorage.setItem('conOneRight', oneRightString);
	// 刷新页面
	history.go(0);
});
// 删除
function deloneRight(a) {
	swal({
		title: "您确定要删除这条信息吗？",
		text: "删除后将无法恢复，请谨慎操作！",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		confirmButtonText: "是的，我要删除！",
		cancelButtonText: "让我在考虑一下……",
		closeOnConfirm: false,
		closeOnCancel: false
	})
	$('.swal2-confirm').click(function() {
		// a: 点击的删除按钮
		// 获取删除的这条信息在goodArr中的位置
		var index = $(a).attr('data-id');
		// 从数组中删除当前信息
		oneRight.splice(index, 1);
		// 将goodArr转换成字符串
		var newString = JSON.stringify(oneRight);
		localStorage.setItem('conOneRight', newString);
		// 刷新页面
		history.go(0);
	});
}
// wrap2 内容
var twoStr = localStorage.getItem('contentTwoAll');
//console.log(twoStr);
var two = eval('(' + twoStr + ')');
//console.log(two);
$.each(two, function(i, item) {
	var newTwo = $('<tr><td><img style="width: 100px;" src="' + item.imgurl + '"/></td><td><button class="btn btn-info" onclick="modTwo(this)" data-id="' + i + '" data-toggle="modal" data-target="#fourModal">修改</button><button class="btn btn-warning" onclick="deltwo(this)" data-id="' + i + '">删除</button></td></tr>');
	$('.wrap2Manager table').append(newTwo);
});
// 修改
function modTwo(a) {
	var index = $(a).attr('data-id');
	//	console.log(index);
	$('#refTwo').click(function() {
		history.go(0);
		var modTwo_imgurl = $('#modtimg').val();
		var newTwoObj = {
			imgurl: modTwo_imgurl
		};
		two.splice(index, 1, newTwoObj);
		var newStr = JSON.stringify(two);
		localStorage.setItem('contentTwoAll', newStr);
	});
}
// 添加
$('#subTwo').click(function() {
	// 获取新信息(押队信息做过滤：正则)
	var g_imgurl = $('#timg').val(); // 图片路径
	// 将获取的信息组装成一条商品信息（一个对象）
	var newTwoObj = {
		imgurl: g_imgurl,
	};
	two.push(newTwoObj);
	var twoString = JSON.stringify(two);
	localStorage.setItem('contentTwoAll', twoString);
	// 刷新页面
	history.go(0);
});
// 删除
function deltwo(a) {
	swal({
		title: "您确定要删除这条信息吗？",
		text: "删除后将无法恢复，请谨慎操作！",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		confirmButtonText: "是的，我要删除！",
		cancelButtonText: "让我在考虑一下……",
		closeOnConfirm: false,
		closeOnCancel: false
	})
	$('.swal2-confirm').click(function() {
		// a: 点击的删除按钮
		// 获取删除的这条信息在goodArr中的位置
		var index = $(a).attr('data-id');
		// 从数组中删除当前信息
		two.splice(index, 1);
		// 将goodArr转换成字符串
		var newString = JSON.stringify(two);
		localStorage.setItem('contentTwoAll', newString);
		// 刷新页面
		history.go(0);
	});
}
// wrap3 内容
var threeStr = localStorage.getItem('contentThreeAll');
//console.log(threeStr);
var three = eval('(' + threeStr + ')');
//console.log(three);
$.each(three, function(i, item) {
	var newThree = $('<tr><td><img style="width: 100px;" src="' + item.imgurl + '"/></td><td>' + item.name + '</td><td><button class="btn btn-info" onclick="modThree(this)" data-id="' + i + '" data-toggle="modal" data-target="#fiveModal">修改</button><button class="btn btn-warning" onclick="delthree(this)" data-id="' + i + '">删除</button></td></tr>');
	$('.wrap3Manager table').append(newThree);
});
// 修改
function modThree(a) {
	var index = $(a).attr('data-id');
	//	console.log(index);
	$('#refThree').click(function() {
		history.go(0);
		var modThree_name = $('#modgname').val();
		var modThree_imgurl = $('#modgimg').val();
		var newThreeObj = {
			imgurl: modThree_imgurl,
			name: modThree_name
		};
		three.splice(index, 1, newThreeObj);
		var newStr = JSON.stringify(three);
		localStorage.setItem('contentThreeAll', newStr);
	});
}
// 添加
$('#subThree').click(function() {
	// 获取新信息(押队信息做过滤：正则)
	var g_name = $('#gname').val(); // 昵称
	var g_imgurl = $('#gimg').val(); // 图片路径
	// 将获取的信息组装成一条商品信息（一个对象）
	var newThreeObj = {
		imgurl: g_imgurl,
		name: g_name,
	};
	three.push(newThreeObj);
	var threeString = JSON.stringify(three);
	localStorage.setItem('contentThreeAll', threeString);
	// 刷新页面
	history.go(0);
});
// 删除
function delthree(a) {
	swal({
		title: "您确定要删除这条信息吗？",
		text: "删除后将无法恢复，请谨慎操作！",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		confirmButtonText: "是的，我要删除！",
		cancelButtonText: "让我在考虑一下……",
		closeOnConfirm: false,
		closeOnCancel: false
	})
	$('.swal2-confirm').click(function() {
		// a: 点击的删除按钮
		// 获取删除的这条信息在goodArr中的位置
		var index = $(a).attr('data-id');
		// 从数组中删除当前信息
		three.splice(index, 1);
		// 将goodArr转换成字符串
		var newString = JSON.stringify(three);
		localStorage.setItem('contentThreeAll', newString);
		// 刷新页面
		history.go(0);
	});
}
// wrap4 内容
var fourStr = localStorage.getItem('contentFourAll');
//console.log(fourStr);
var four = eval('(' + fourStr + ')');
//console.log(four);
$.each(four, function(i, item) {
	var newFour = $('<tr><td><img style="width: 100px;" src="' + item.imgurl + '"/></td><td>' + item.name + '</td><td><button class="btn btn-info" onclick="modFour(this)" data-id="' + i + '" data-toggle="modal" data-target="#sixModal">修改</button><button class="btn btn-warning" onclick="delfour(this)" data-id="' + i + '">删除</button></td></tr>');
	$('.wrap4Manager table').append(newFour);
});
// 修改
function modFour(a) {
	var index = $(a).attr('data-id');
	//	console.log(index);
	$('#refFour').click(function() {
		history.go(0);
		var modFour_name = $('#modfname').val();
		var modFour_imgurl = $('#modfimg').val();
		var newFourObj = {
			imgurl: modFour_imgurl,
			name: modFour_imgurl
		};
		four.splice(index, 1, newFourObj);
		var newStr = JSON.stringify(four);
		localStorage.setItem('contentFourAll', newStr);
	});
}
// 添加
$('#subFour').click(function() {
	// 获取新信息(押队信息做过滤：正则)
	var f_name = $('#fname').val(); // 昵称
	var f_imgurl = $('#fimg').val(); // 图片路径
	// 将获取的信息组装成一条商品信息（一个对象）
	var newFourObj = {
		imgurl: f_imgurl,
		name: f_name,
	};
	four.push(newFourObj);
	var fourString = JSON.stringify(four);
	localStorage.setItem('contentFourAll', fourString);
	// 刷新页面
	history.go(0);
});
// 删除
function delfour(a) {
	swal({
		title: "您确定要删除这条信息吗？",
		text: "删除后将无法恢复，请谨慎操作！",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		confirmButtonText: "是的，我要删除！",
		cancelButtonText: "让我在考虑一下……",
		closeOnConfirm: false,
		closeOnCancel: false
	})
	$('.swal2-confirm').click(function() {
		// a: 点击的删除按钮
		// 获取删除的这条信息在goodArr中的位置
		var index = $(a).attr('data-id');
		// 从数组中删除当前信息
		four.splice(index, 1);
		// 将goodArr转换成字符串
		var newString = JSON.stringify(four);
		localStorage.setItem('contentFourAll', newString);
		// 刷新页面
		history.go(0);
	});
}
// wrap5 内容
var fiveStr = localStorage.getItem('contentFiveAll');
//console.log(fiveStr);
var five = eval('(' + fiveStr + ')');
//console.log(five);
$.each(five, function(i, item) {
	var newFive = $('<tr><td>' + item.title + '</td><td><img style="width: 100px;" src="' + item.imgurl + '"/></td><td>' + item.name + '</td><td><button class="btn btn-info" onclick="modFive(this)" data-id="' + i + '" data-toggle="modal" data-target="#sevenModal">修改</button><button class="btn btn-warning" onclick="delfive(this)" data-id="' + i + '">删除</button></td></tr>');
	$('.wrap5Manager table').append(newFive);
});
// 修改
function modFive(a) {
	var index = $(a).attr('data-id');
	//	console.log(index);
	$('#refFive').click(function() {
		history.go(0);
		var modFive_name = $('#modfiname').val();
		var modFive_imgurl = $('#modfiimg').val();
		var modFive_title = $('#modfititle').val();
		var newFiveObj = {
			imgurl: modFive_imgurl,
			name: modFive_name,
			title: modFive_title
		};
		five.splice(index, 1, newFiveObj);
		var newStr = JSON.stringify(five);
		localStorage.setItem('contentFiveAll', newStr);
	});
}
// 添加
$('#subFive').click(function() {
	// 获取新信息(押队信息做过滤：正则)
	var fi_name = $('#finame').val(); // 昵称
	var fi_imgurl = $('#fiimg').val(); // 图片路径
	var fi_title = $('#fititle').val(); // 标题
	// 将获取的信息组装成一条商品信息（一个对象）
	var newFiveObj = {
		imgurl: fi_imgurl,
		name: fi_name,
		title: fi_title,
	};
	five.push(newFiveObj);
	var fiveString = JSON.stringify(five);
	localStorage.setItem('contentFiveAll', fiveString);
	// 刷新页面
	history.go(0);
});
// 删除
function delfive(a) {
	swal({
		title: "您确定要删除这条信息吗？",
		text: "删除后将无法恢复，请谨慎操作！",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		confirmButtonText: "是的，我要删除！",
		cancelButtonText: "让我在考虑一下……",
		closeOnConfirm: false,
		closeOnCancel: false
	})
	$('.swal2-confirm').click(function() {
		// a: 点击的删除按钮
		// 获取删除的这条信息在goodArr中的位置
		var index = $(a).attr('data-id');
		// 从数组中删除当前信息
		five.splice(index, 1);
		// 将goodArr转换成字符串
		var newString = JSON.stringify(five);
		localStorage.setItem('contentFiveAll', newString);
		// 刷新页面
		history.go(0);
	});
}
// wrap6 内容1
var sixOne = localStorage.getItem('contentSixOne');
//console.log(sixOne);
var sixOneAll = eval('(' + sixOne + ')');
//console.log(sixOneAll);
$.each(sixOneAll, function(i, item) {
	var newSixOne = $('<tr><td>' + item.time + '</td><td>' + item.year + '</td><td>' + item.title + '</td><td>' + item.content + '</td><td><button class="btn btn-info" onclick="modSixOne(this)" data-id="' + i + '" data-toggle="modal" data-target="#eightModal">修改</button><button class="btn btn-warning" onclick="delsixOneAll(this)" data-id="' + i + '">删除</button></td></tr>');
	$('.wrap6OneManager table').append(newSixOne);
});
// 修改
function modSixOne(a) {
	var index = $(a).attr('data-id');
	//	console.log(index);
	$('#refSixOne').click(function() {
		history.go(0);
		var modSixOne_year = $('#modsoyear').val();
		var modSixOne_time = $('#modsotime').val();
		var modSixOne_title = $('#modsotitle').val();
		var modSixOne_content = $('#modsocontent').val();
		var newSixOneObj = {
			year: modSixOne_year,
			time: modSixOne_time,
			title: modSixOne_title,
			content: modSixOne_conten
		};
		sixOneAll.splice(index, 1, newSixOneObj);
		var newStr = JSON.stringify(sixOneAll);
		localStorage.setItem('contentSixOne', newStr);
	});
}
// 添加
$('#subSixOne').click(function() {
	// 获取新信息(押队信息做过滤：正则)
	var so_year = $('#soyear').val(); // 年份
	var so_time = $('#sotime').val(); // 时间
	var so_title = $('#sotitle').val(); // 标题
	var so_content = $('#socontent').val(); // 内容
	// 将获取的信息组装成一条商品信息（一个对象）
	var newSixOneObj = {
		year: so_year,
		time: so_time,
		title: so_title,
		content: so_content
	};
	sixOneAll.push(newSixOneObj);
	var sixOneAllString = JSON.stringify(sixOneAll);
	localStorage.setItem('contentSixOne', sixOneAllString);
	// 刷新页面
	history.go(0);
});
// 删除
function delsixOneAll(a) {
	swal({
		title: "您确定要删除这条信息吗？",
		text: "删除后将无法恢复，请谨慎操作！",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		confirmButtonText: "是的，我要删除！",
		cancelButtonText: "让我在考虑一下……",
		closeOnConfirm: false,
		closeOnCancel: false
	})
	$('.swal2-confirm').click(function() {
		// a: 点击的删除按钮
		// 获取删除的这条信息在goodArr中的位置
		var index = $(a).attr('data-id');
		// 从数组中删除当前信息
		sixOneAll.splice(index, 1);
		// 将goodArr转换成字符串
		var newString = JSON.stringify(sixOneAll);
		localStorage.setItem('contentSixOne', newString);
		// 刷新页面
		history.go(0);
	});
}
// wrap6 内容2
var sixTwo = localStorage.getItem('contentSixTwo');
//console.log(sixTwo);
var sixTwoAll = eval('(' + sixTwo + ')');
//console.log(sixTwoAll);
$.each(sixTwoAll, function(i, item) {
	var newSixTwo = $('<tr><td>' + item.time + '</td><td>' + item.year + '</td><td>' + item.title + '</td><td>' + item.content + '</td><td><button class="btn btn-info" onclick="modSixTwo(this)" data-id="' + i + '" data-toggle="modal" data-target="#nineModal">修改</button><button class="btn btn-warning" onclick="delsixTwoAll(this)" data-id="' + i + '">删除</button></td></tr>');
	$('.wrap6TwoManager table').append(newSixTwo);
});
// 修改
function modSixTwo(a) {
	var index = $(a).attr('data-id');
	//	console.log(index);
	$('#refSixTwo').click(function() {
		history.go(0);
		var modSixTwo_year = $('#modstyear').val();
		var modSixTwo_time = $('#modsttime').val();
		var modSixTwo_title = $('#modsttitle').val();
		var modSixTwo_content = $('#modstcontent').val();
		var newSixTwoObj = {
			year: modSixTwo_year,
			time: modSixTwo_time,
			title: modSixTwo_title,
			content: modSixTwo_content
		};
		sixTwoAll.splice(index, 1, newSixTwoObj);
		var newStr = JSON.stringify(sixTwoAll);
		localStorage.setItem('contentSixTwo', newStr);
	});
}
// 添加
$('#subSixTwo').click(function() {
	// 获取新信息(押队信息做过滤：正则)
	var st_year = $('#styear').val(); // 年份
	var st_time = $('#sttime').val(); // 时间
	var st_title = $('#sttitle').val(); // 标题
	var st_content = $('#stcontent').val(); // 内容
	// 将获取的信息组装成一条商品信息（一个对象）
	var newSixTwoObj = {
		year: st_year,
		time: st_time,
		title: st_title,
		content: st_content
	};
	sixTwoAll.push(newSixTwoObj);
	var sixTwoAllString = JSON.stringify(sixTwoAll);
	localStorage.setItem('contentSixTwo', sixTwoAllString);
	// 刷新页面
	history.go(0);
});
// 删除
function delsixTwoAll(a) {
	swal({
		title: "您确定要删除这条信息吗？",
		text: "删除后将无法恢复，请谨慎操作！",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		confirmButtonText: "是的，我要删除！",
		cancelButtonText: "让我在考虑一下……",
		closeOnConfirm: false,
		closeOnCancel: false
	})
	$('.swal2-confirm').click(function() {
		// a: 点击的删除按钮
		// 获取删除的这条信息在goodArr中的位置
		var index = $(a).attr('data-id');
		// 从数组中删除当前信息
		sixTwoAll.splice(index, 1);
		// 将goodArr转换成字符串
		var newString = JSON.stringify(sixTwoAll);
		localStorage.setItem('contentSixTwo', newString);
		// 刷新页面
		history.go(0);
	});
}
// wrap6 内容3
var sixThree = localStorage.getItem('contentSixThree');
//console.log(sixThree);
var sixThreeAll = eval('(' + sixThree + ')');
//console.log(sixThreeAll);
$.each(sixThreeAll, function(i, item) {
	var newSixThree = $('<tr><td>' + item.time + '</td><td>' + item.year + '</td><td>' + item.title + '</td><td>' + item.content + '</td><td><button class="btn btn-info" onclick="modSixThree(this)" data-id="' + i + '" data-toggle="modal" data-target="#tenModal">修改</button><button class="btn btn-warning" onclick="delsixThreeAll(this)" data-id="' + i + '">删除</button></td></tr>');
	$('.wrap6ThreeManager table').append(newSixThree);
});
// 修改
function modSixThree(a) {
	var index = $(a).attr('data-id');
	//	console.log(index);
	$('#refSixThree').click(function() {
		history.go(0);
		var modSixThree_year = $('#modstryear').val();
		var modSixThree_time = $('#modstrtime').val();
		var modSixThree_title = $('#modstrtitle').val();
		var modSixThree_content = $('#modstrcontent').val();
		var newSixThreeObj = {
			year: modSixThree_year,
			time: modSixThree_time,
			title: modSixThree_title,
			content: modSixThree_content
		};
		sixThreeAll.splice(index, 1, newSixThreeObj);
		var newStr = JSON.stringify(sixThreeAll);
		localStorage.setItem('contentSixThree', newStr);
	});
}
// 添加
$('#subSixThree').click(function() {
	// 获取新信息(押队信息做过滤：正则)
	var str_year = $('#stryear').val(); // 年份
	var str_time = $('#strtime').val(); // 时间
	var str_title = $('#strtitle').val(); // 标题
	var str_content = $('#strcontent').val(); // 内容
	// 将获取的信息组装成一条商品信息（一个对象）
	var newSixThreeObj = {
		year: str_year,
		time: str_time,
		title: str_title,
		content: str_content
	};
	sixThreeAll.push(newSixThreeObj);
	var sixThreeAllString = JSON.stringify(sixThreeAll);
	localStorage.setItem('contentSixThree', sixThreeAllString);
	// 刷新页面
	history.go(0);
});
// 删除
function delsixThreeAll(a) {
	swal({
		title: "您确定要删除这条信息吗？",
		text: "删除后将无法恢复，请谨慎操作！",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		confirmButtonText: "是的，我要删除！",
		cancelButtonText: "让我在考虑一下……",
		closeOnConfirm: false,
		closeOnCancel: false
	})
	$('.swal2-confirm').click(function() {
		// a: 点击的删除按钮
		// 获取删除的这条信息在sixThreeAll中的位置
		var index = $(a).attr('data-id');
		// 从数组中删除当前信息
		sixThreeAll.splice(index, 1);
		// 将sixThreeAll转换成字符串
		var newString = JSON.stringify(sixThreeAll);
		localStorage.setItem('contentSixThree', newString);
		// 刷新页面
		history.go(0);
	});
}