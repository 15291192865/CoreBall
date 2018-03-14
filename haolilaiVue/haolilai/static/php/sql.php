<?php
header('Access-Control-Allow-Origin:*');
header("Content-type:text/html;charset=uft-8");
//封装sql类
class Sqlcon{
	public $con;
	private $hostname = 'localhost';
	private $user = 'wangjing';
	private $pswd = '123456';
	private $db = 'haolilai';
	function __construct(){
		$this->con = new mysqli($this->hostname,$this->user,$this->pswd,$this->db);
		if($this->con->connect_error){
			$this->con = false; //如果连接失败 $this->con =false 返回
			return;
		}
		$this->con->query('set names utf8'); //连接成功 设置编码格式
	}
}
?>
