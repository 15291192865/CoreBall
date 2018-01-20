
//var reg1 = /[a-zA-Z0-9@\.]{2,20}/;
//var reg2 = /[a-zA-Z0-9_\S]{6,18}/;

var userinto = localStorage.getItem('userinforw');
var userInto = eval('('+ userinto +')');
//console.log(userInto);
$.each(userInto, function(i,item) {
	$('.btn').click(function() {
		var a = $('.userName input').val();
		var b = $('.pawd input').val();
//		console.log(userInto[i].username);
		
		if(a != userInto[i].username && b != userInto[i].userpasd) {  // 用户名、密码都不正确
			$('.userHint')[0].style.display = 'block';
			$('.pawdHint')[0].style.display = 'block';
		} else if(a != userInto[i].username) { 	// 用户名不正确
			$('.userHint')[0].style.display = 'block';
			$('.pawdHint')[0].style.display = 'none';
		} else if(b != userInto[i].userpasd) {  // 密码不正确
			$('.pawdHint')[0].style.display = 'block';
			$('.userHint')[0].style.display = 'block';
		} else {											// 用户名、密码都正确
			$('.userHint')[0].style.display = 'none';
			$('.pawdHint')[0].style.display = 'none';
			setTimeout(function() {
				window.location.href = '../web/panzi.html';
			},500);
		}
	});
});





