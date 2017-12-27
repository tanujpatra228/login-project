<?php
	session_start();
# Values coming from signup_form.html
	$username=$_POST['username'];
	$password=$_POST['password'];
#------------------------------------

# Connection with DB
	$conn=mysqli_connect('localhost','root');
	mysqli_select_db($conn,'db1');
	$q="select * from users where username=$username and password=$password";
	$result=mysqli_query($conn,$q);
	$num=mysqli_num_rows($result);

# Connection close
	mysqli_close($conn);

	if($num==1)
	{
		$_session['username']=$username;
		header('location:http://localhost/app/test/user_home.php');	
	}
	else
	{
		header('location:http://localhost/app/test/login_form.html');
	}
?>