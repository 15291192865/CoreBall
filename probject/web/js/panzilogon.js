var reg1 = /[a-zA-Z0-9@\.]{2,20}/;
var reg2 = /[a-zA-Z0-9_\S]{6,18}/;

var userinto = localStorage.getItem('userinforw');
var userInto = eval('(' + userinto + ')');

$.each(userInto, function(i, item) {
	$('.btn').click(function() {
		var a = $('.userName input').val();
		var b = $('.pawd input').val();
		console.log(a,b);

		if(!reg1.test(a) && !reg2.test(b)) { // 用户名、密码都不正确
			$('.userHint')[0].style.display = 'block';
			$('.pawdHint')[0].style.display = 'block';
		} else if(!reg1.test(a)) { // 用户名不正确
			$('.userHint')[0].style.display = 'block';
			$('.pawdHint')[0].style.display = 'none';
		} else if(!reg2.test(b)) { // 密码不正确
			$('.pawdHint')[0].style.display = 'block';
			$('.userHint')[0].style.display = 'none';
		} else { // 用户名、密码都正确
			$('.userHint')[0].style.display = 'none';
			$('.pawdHint')[0].style.display = 'none';
			
			var arr = {
				username: a,
				userpasd: b
			}
			userInto.push(arr);
			console.log(userInto);
			var newObj = JSON.stringify(userInto);
			console.log(newObj);
			localStorage.setItem('userinforw',newObj);
			window.location.href = '../web/panzilogin.html';
		}
	});
});