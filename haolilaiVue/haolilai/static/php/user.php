<?php
require('sql.php');
$sql = new Sqlcon;
//注册
function zhuce1(){
	global $sql;
	$password = $_POST['password'];
	$tel = $_POST['tel'];
	$userres = $sql->con->query('select username from user'); //查询user中所有用户名
	foreach($userres as $value){
		if(current($value) == $username){
			echo json_encode(array('status'=>0,'message'=>'账号名已存在'));
			return; //跳出当前方法
		}
	}
	$telres = $sql->con->query('select tel from user'); //查询tel中所有用户
	foreach($telres as $value){
		if(current($value) == $tel){
			echo json_encode(array('status'=>0,'message'=>'电话号码已被使用'));
			return;
		}
	}
	$res = $sql->con->query("insert into user(password,tel) values('$password','$tel')");
	if($res){
		echo json_encode(array('status'=>1,'message'=>'注册成功'));
	}else{
		echo json_encode(array('status'=>-3,'message'=>'添加信息时失败'));
	}
}
//用户注册 
function zhuce(){
	global $sql;
	$password = $_POST['password'];
	$tel = $_POST['tel'];
	$tel_i=0;
	$telres = $sql->con->query('select tel from user');
	if($telres->num_rows>0)	{ //如果查询到的条目大于0 说明库里有数据
		//判断电话号码
		$telarr = [];
		foreach($telres as $thisval){
			array_push($telarr,$thisval);
		}
		for($j=0;$j<count($telarr);$j++){
			if($tel == $telarr[$j]['tel']){
				$tel_i=1;
			}
		}
		if($tel_i==1){
			echo json_encode(array('status'=>-1,'message'=>'手机号码相同'));
		}else{
			//都不相同
			$res = $sql->con->query("insert into user(password,tel) values('$password','$tel')");
			if($res){
				echo json_encode(array('status'=>1,'message'=>'注册成功'));
			}else{
				echo json_encode(array('status'=>-3,'message'=>'添加信息时失败'));
			}
		}
	}else{
		echo json_encode(array('status'=>-2,'message'=>'数据库查询失败'));
	}
}

//用户登陆
function login(){
	global $sql;
	$tel = $_POST['tel'];
	$password = $_POST['password'];
	//根据用户名先去找此用户
	$userres = $sql->con->query("select * from user where tel='$tel'");
	if($userres->num_rows>0){//说明有这个用户名
	$userArr = []; 
		foreach($userres as $thisval){
			array_push($userArr,$thisval);
		}
		for($i=0;$i<count($userArr);$i++){
			if($password == $userArr[$i]['password']){
				echo json_encode(array('status'=>1,'message'=>'登陆成功'));
			}else{
				echo json_encode(array('status'=>0,'message'=>'密码错误'));
			}
		}
		
	}else{
		echo json_encode(array('status'=>0,'message'=>'未找到此用户名'));
	}
}

//用户信息的查询  不允许查询到密码（后台页面显示时使用）
function sel(){
	global $sql;
	$res = $sql->con->query('select ID,tel from user'); 
	if($res->num_rows>0)	{//如果查询返回的数据条目大于0
		$arr = [];
		foreach($res as $thisval) {
			array_push($arr,$thisval);
		}
		$endArr = array('status'=>1,'data'=>$arr);
		echo json_encode($endArr);
	}else{
		echo json_encode(array('status'=>0,'message'=>'用户表无信息'));
	}
}

function loginS(){
	global $sql;
	$username = $_POST['username'];
	$password = $_POST['password'];
	//根据用户名先去找此用户
	$userres = $sql->con->query("select * from userS where username='$username'");
	if($userres->num_rows>0){//说明有这个用户名
	$userArr = []; 
		foreach($userres as $thisval){
			array_push($userArr,$thisval);
		}
		for($i=0;$i<count($userArr);$i++){
			if($password == $userArr[$i]['password']){
				echo json_encode(array('status'=>1,'message'=>'登陆成功'));
			}else{
				echo json_encode(array('status'=>0,'message'=>'密码错误'));
			}
		}
	}else{
		echo json_encode(array('status'=>0,'message'=>'未找到此用户名'));
	}
}
?>