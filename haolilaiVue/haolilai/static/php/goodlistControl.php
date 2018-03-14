<?php
//引入model层
require('goodlist.php');
//接收请求
if($_POST){
	$type = $_POST['type'];
}else{
	$type = $_GET['type'];
}
switch($type){
	case 'select'://查询  //前台商品查询
		sel();
		break;
	case 'del': //删除的时候 需要传删除的商品的data={ id: } 
		del();
		break;
	case 'ins': //添加的时候 需要传 商品的 data={img   intor   price}
		ins();
		break;
	case 'mod': //修改的时候 需要传修改的商品的data={id  img   intor   price}
		mod();
		break;
}
?>