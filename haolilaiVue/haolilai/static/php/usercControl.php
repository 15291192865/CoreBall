<?php
require('user.php');

if($_POST){
	$type = $_POST['type'];
}else{
	$type = $_GET['type'];
}

switch($type){
	case 'zhuce':  //注册  data={type:post:  ,password:   ,tel:    }
		zhuce();
		break;
	case 'zhuce1':
		zhuce1();
		break;
	case 'sel': //后台查询
		sel();
		break;
	case 'login': //登陆  data={type:post  ,password:   ,tel:    }
		login();
		break;
	case 'loginS':  //后台登陆账号密码 post  data={type:post  , password:  }
		loginS();
		break;
}
?>