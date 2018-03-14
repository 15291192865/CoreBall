<?php
	//获取文件数据
	$formdata = $_FILES['file'];

	//定义文件上传目标路径
	$uploadurl = '../img/';
	//根据文件的错误机制（php提供切自己定义好的错误类型，我们可以直接使用）$formdata['error']
	switch ($formdata['error']) {
		case 1:
			//php.ini配置文件中有一项upload_max_filesize(示例：upload_max_filesize=200M)的设置，如果你选择的文件比php.ini的这个预设值要大的话，那么$formdata['error']会返回数字1
			$info = '你选择的文件超出了php的预设文件大小';
			break;
		case 2:
			/* 如果我们上传的文件大小超过了这个设置值，$formdata['error']会返回2
			 * */
			$info = '你选择的文件超过了html中MAX_FILE_SIZE中的预设值';
			break;
		case 3:
			$info = '文件只上传了部分';
			break;
		case 4:
			$info = '选择了空文件';
			break;
		case 6:
			$info = '找不到临时文件夹';
			break;
		case 7:
			$info = '文件写入失败';
			break;
		//die函数，向页面输出该函数参数里的信息，并结束当前脚本
		die('上传文件错误，原因:'.$info);
	}
	//自己设置文件大小限制 $formdata['size']是php为我们提供的获取文件大小的方法
	if($formdata['size'] > 50000000) {
		die('上传文件大小超出限制');
	}
	//定义能接收的数据类型，如果不进行定义，那么就是什么文件都可以接收，下面就是只定义了能接收各种格式的图片
	$typelist = array("image/jpeg","image/jpg","image/png","image/gif");
	//如果当前文件的类型不在我们提前定义好的类型数组之中
	if(!in_array($formdata['type'],$typelist)) {
		die('您的文件类型上传格式超出预期');
	}
	 //为新上传的文件设置一个新的自定义的文件名称
	 $filename = $formdata['name']; //解析文件当前的名字
	 /* pathinfo() 函数规定以关联数组的形式返回文件的路径信息 dirname，basename，extension
	 * 示例代码：img/login.png 
	 * dirname(文件所在的文件夹的目录):img
	 * basename(文件的全程): login.png
	 * extension(文件的后缀名): png 
	 * */
	 $ext = pathinfo($filename)['extension']; //获取文件的后缀名(如果你的文件在本地是.png，那么上传到服务器时，它的后缀依旧是.png)
	 do{
	 	/* date()方法生成获取当前的时间，在这里参数串了YmdHis指: year,month,date,hour,minite(m与month重复，所以用i表示),second
		 * rand()方法接收两个参数，返回一个这两个参数之间的随机数
		 */
	 	$newname = date('YmdHis').rand(0, 100).'.'.$ext;
	 }while(file_exists($uploadurl.$newname)); //file_exists() 函数检查文件或目录是否存在(如果你的文件夹里已经有一个1.png格式的文件，那么就不能再有一个相同的，所以在这里判断是否这个文件已经存在，file_exists()返回的是一个布尔类型的值，如果文件目录已经存在，返回true，否则返回false)。当这个文件名已经存在，那么就要去生成新的文件名，直到file_exists()返回的值为false，证明这个文件名是可用的，跳出while循环。
	 /* 当前端把文件上传到服务器的某个目标文件夹前，服务器先接收到这个文件，将它存储在一个临时文件夹里，用来进行上面的一系列操作、判断，当这些操作和判断完成之后，再将这个文件移动到目标文件夹，tmp_name是这个文件在临时文件夹存储的临时文件名称 */
	 //判断这个文件是否是一个上传的文件
	 if(is_uploaded_file($formdata['tmp_name'])) {
	 	//将这个文件移动到服务器上的目标文件夹，move_uploaded_file()接收两个参数，一个是临时名称，一个是成功之后应该给文件设置的文件名称，该方法返回一个布尔类型的值，true为文件从临时文件夹移动到目标文件夹移动成功，false为移动失败
	 	$bol = move_uploaded_file($formdata['tmp_name'], $uploadurl.$newname);
		if($bol) {
			echo $uploadurl.$newname; //如果移动成功，那么返回这个文件上传之后的路径，可自行添加目录(../../....)
		}else {
			die('文件上传失败');
		}
	 }else {
	 	die('不是一个上传的文件');
	 }
?>