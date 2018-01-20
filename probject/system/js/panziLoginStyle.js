//var reg1 = /[a-zA-Z0-9@\.]{2,20}/;
//var reg2 = /[\w\S]{6,18}/;

var managerObj = localStorage.getItem('manager');
var managerOne = eval('(' + managerObj + ')');
$.each(managerOne, function(i, item) {
	$('.btn').click(function() {
		var a = $('.userName input').val();
		var b = $('.pawd input').val();

		if(a != managerOne[i].name && b != managerOne[i].pasd) { // 用户名、密码都不正确
			$('.userHint')[0].style.display = 'block';
			$('.pawdHint')[0].style.display = 'block';
		} else if(a != managerOne[i].name) { // 用户名不正确
			$('.userHint')[0].style.display = 'block';
			$('.pawdHint')[0].style.display = 'none';
		} else if(b != managerOne[i].pasd) { // 密码不正确
			$('.pawdHint')[0].style.display = 'block';
			$('.userHint')[0].style.display = 'block';
		} else { // 用户名、密码都正确
			$('.userHint')[0].style.display = 'none';
			$('.pawdHint')[0].style.display = 'none';
			window.location.href = '../system/panzi.html';
		}
	});
});