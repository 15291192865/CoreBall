<?php
//商品操作
require('sql.php');
$sql = new Sqlcon;

//主页商品的查询 横向
function sel(){
	global $sql;
	$res = $sql->con->query('select * from goodlist'); 
	if($res->num_rows>0)	{//如果查询返回的数据条目大于0 说明有商品信息
		$arr = [];
		foreach($res as $thisval) {
			array_push($arr,$thisval);
		}
		$endArr = array('status'=>1,'data'=>$arr);
		echo json_encode($endArr);
	}else{
		echo json_encode(array('status'=>0,'message'=>'无此信息'));
	}
}
//主页商品数据的增加
function ins() {
	global $sql;
	$img = $_POST['img'];
	$price = $_POST['price'];
	$intro = $_POST['intro'];
	$res = $sql->con->query("insert into goodlist(img,price,intro) values('$img','$price','$intro')");
	if($res){
		$resID = $sql->con->query('select * from goodlist order by ID desc limit 1');			//根据添加成功了的数据之后的结果 查询最后一个id的全部数据
		$idArr=[];
		foreach($resID as $thisval){
			array_push($idArr,$thisval);
		}
		//添加数据成功
		echo json_encode(array('status'=>1,'data'=>$idArr));
	}else {
		//添加失败
		echo json_encode(array('status'=>0,'message'=>'添加商品失败'));
	}
}
//主页商品信息的修改 横向 修改的时候需要提交修改的元素的信息
function mod() {
	global $sql;
	$upid = $_POST['id'];
	$img = $_POST['img'];
	$price = $_POST['price'];
	$intro = $_POST['intro'];
	$res = $sql->con->query("update goodlist set img='$img',price='$price',intro='$intro' where ID='$upid'");
	if($res) {
		//如果update成功  根据这条id去查询更新的数据 并且返回
		$resId = $sql->con->query("select * from goodlist where id = '$upid'");
		$idArr = [];
		foreach($resId as $thisval){
			array_push($idArr,$thisval);
		}
		echo json_encode(array('status'=>1,'data'=>$idArr));
	}else {
		echo json_encode(array('status'=>0,'message'=>'修改商品信息失败'));
	}
}
//首页商品的删除
function del() {
	global $sql;
	$id = $_POST['id']; //删除的时候需要发送删除的元素的id
	$res = $sql->con->query("delete from goodlist where ID ='$id'");
	if($res){
		echo json_encode(array('status'=>1,'message'=>'删除信息成功'));
	}else{
		echo json_encode(array('status'=>0,'message'=>'删除信息失败'));
	}
}
?>