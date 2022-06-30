<?php 

require_once 'dbconnection.php';
require_once 'functions.php';

session_start();

if (isset($_POST['submit'])){
	
	$firstname = $_SESSION['firstname'] = $_POST["fname"];
	$middlename = $_SESSION['middlename'] = $_POST["mname"];
    $lastname = $_SESSION['lastname'] = $_POST["lname"];
    $country = $_SESSION['country'] = $_POST["country"];
    $state = $_SESSION['state'] = $_POST["state"];
    $city = $_SESSION['city'] = $_POST["city"];
    $postalcode = $_SESSION['postalcode'] = $_POST["postalcode"];
	$email = $_SESSION['email'] = $_POST["email"];
	$pwd = $_POST["password"];
    $pwdRepeat = $_POST['repassword'];
	$referral_code = $firstname . strval(codeGen());


	if (emptyInputSignup($firstname, $middlename, $lastname, $country, $state, $city, $postalcode, $email, $pwd, $pwdRepeat) !== false) {
		header("location: ../signup.php?error=emptyinput");
		exit();
	}
	if (invalidEmail($email) !== false) {
		header("location: ../signup.php?error=invalidemail");
		exit();
	}
	if (pwdMatch($pwd, $pwdRepeat) !== false) {
		header("location: ../signup.php?error=passwordmismatch");
		exit();
	}
	if (emailExists($conn, $email) !== false) {
		header("location: ../signup.php?error=emailexists");
		exit();
	}

	createUser($conn, $firstname, $middlename, $lastname, $country, $state, $city, $postalcode, $email, $pwd,$referral_code);
	
} 
else {
	header("location: ../signup.php");
	exit();
}