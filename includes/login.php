<?php 	

if(isset($_POST['submit'])) {
	session_start();
	$email = $_SESSION['email'] = $_POST["email"];
	$pwd = $_SESSION['pwd']= $_POST["pwd"];

	require_once 'dbconnection.php';
	require_once 'functions.php';

	if (emptyInputLogin($email, $pwd) !== false) {
		header("location: ../login.php?error=emptyinput");
		exit();
	}

	loginUser($conn, $email, $pwd);
}
else {
	header("location: ../login.php");
	exit();
}
