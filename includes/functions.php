<?php

function emptyInputSignup($firstname, $middlename, $lastname, $country, $state, $city, $postalcode, $email, $pwd, $pwdRepeat) {
	$result = '';
	if (empty($firstname) || empty($middlename) || empty($lastname) || empty($country) || empty($state) || empty($city) || empty($postalcode) || empty($email) || empty($pwd) || empty($pwdRepeat)) {
		$result = true;
	}
	else {
		$result = false;
	}
	return $result;
}

function invalidEmail($email) {
	$result = '';
	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		$result = true;
	}
	else {
		$result = false;
	}
	return $result;
}

function pwdMatch($pwd, $pwdRepeat) {
	$result = '';
	if ($pwd !== $pwdRepeat) {
		$result = true;
	}
	else {
		$result = false;
	}
	return $result;
}

function emailExists($conn, $email) {
	$sql = "SELECT * FROM Users WHERE Email = ?;";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)) {
		header("location: ../signup.php?error=stmtfailed");
		exit();
	}

	mysqli_stmt_bind_param($stmt, "s", $email);
	mysqli_stmt_execute($stmt);

	$resultData = mysqli_stmt_get_result($stmt);

	if ($row = mysqli_fetch_assoc($resultData)) {
		return $row;
	}
	else {
		$result = false;
		return $result;
	}

	mysqli_stmt_close($stmt);
}
function getUsdPrice($conn) {
	$sql = "SELECT * FROM price WHERE id = 1";
	$result = mysqli_query($conn, $sql);
	$price = mysqli_fetch_assoc($result);
	mysqli_free_result($result);
	mysqli_close($conn);
	return $price['usd_price'];
}

function userExists($conn, $email) {
	$sql = "SELECT * FROM Users WHERE Email = ?;";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)) {
		header("Location: logout.php?error=stmtfailed");
		exit();
	}

	mysqli_stmt_bind_param($stmt, "s", $email);
	mysqli_stmt_execute($stmt);

	$resultData = mysqli_stmt_get_result($stmt);

	if ($row = mysqli_fetch_assoc($resultData)) {
		return $row;

	}
	else {
		$result = false;
		return $result;
	}

	mysqli_stmt_close($stmt);
}

function codeGen(){
	$code = rand(1000, 9999);
	return $code;
}

function VerificationMail($code, $email){
		
	#Mail
	$to = $email;
	$subject = 'Verification Code';
	$from = 'no-reply@FTM.com';
	 
	// To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	 
	// Create email headers
	$headers .= 'From: '.$from."\r\n".
		'Reply-To: '.$from."\r\n" .
		'X-Mailer: PHP/' . phpversion();
	 
	$message = '<html lang="en-US"><head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <title>Reset Password Email Template</title>
    <meta name="description" content="Reset Password Email Template.">
    <style type="text/css">
        a:hover {text-decoration: underline !important;}
    </style>
</head>

<body style="margin: 0px; background-color: #f2f3f8;" topmargin="0" marginwidth="0" marginheight="0" leftmargin="0">
    <!--100% body table-->
    <table style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: \'Open Sans\', sans-serif;" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#f2f3f8">
        <tbody><tr>
            <td>
                <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                    <tbody><tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                          <a href="https://Luna-bond.com" title="logo" target="_blank">
                            <img src="https://Luna-bond.com/assets/img/icon-small.png" title="logo" alt="logo" width="60">
                          </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <table style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);" width="95%" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tbody><tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="padding:0 35px;">
                                        <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:\'Rubik\',sans-serif;">Verify your account.</h1>
                                        <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                        <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                            To verify your email address, please use the following Code:
                                        </p>
                                        <h1 style="color:#1e1e2d; font-weight:500;margin:0px;margin-top:40px;font-size:32px;font-family:\'Rubik\',sans-serif;">';	$message .= $code;
										$message .= '</h1>
                                                                                <span style="display:inline-block; vertical-align:middle; margin:9px 0 26px;width:100px;"></span>
                                                                                    <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">Do not share this OTP with anyone. Luna-bond takes your account security very seriously. Luna-bond Customer Service will never ask you to disclose or verify your Luna-bond password, OTP, credit card, or banking account number. If you receive a suspicious email with a link to update your account information, do not click on the link—instead, report the email to Luna-bond for investigation.</p>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td style="height:62px;">&nbsp;</td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr><tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                            <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">© <strong>www.Luna-bond.com</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                </tbody></table>
            </td>
        </tr>
    </tbody></table>
    <!--/100% body table-->




</body></html>';
	if(mail($to, $subject, $message, $headers)){
		echo 'Mail sent successful';
	} else{
		echo 'mail not sent. Check for issues';
	}
}

function InvestmentActivate($conn, $email){
	$sql = "INSERT INTO InvestmentActive (userId, Email) VALUES(?, ?);";
	$stmt = mysqli_stmt_init($conn);
	if(!mysqli_stmt_prepare($stmt, $sql)){
		header('location: ../logout.php?error=stmtfailed');
		exit();
	}
	$userExists = userExists($conn, $email);
	$userid = $userExists['userId'];

	mysqli_stmt_bind_param($stmt, "ss", $userid, $email);
	mysqli_stmt_execute($stmt);
	mysqli_stmt_close($stmt);
}

function verificationCodeSet($conn, $email, $code){
	$sql = "SELECT userId FROM Users WHERE Email = ?;";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)) {
		header("Location: ../verify.php?error=stmtfailed");
		exit();
	}
	mysqli_stmt_bind_param($stmt, "s", $email);
	mysqli_stmt_execute($stmt);
	$result = mysqli_stmt_get_result($stmt);

	if (!$row = mysqli_fetch_assoc($result)) {
		header("Location: ../verify.php?error");
		exit();
	}
	mysqli_stmt_close($stmt);

	// To populate the verificationCodes table
	$userId = $row['userId'];
	$verificationStatus = 'Not Verified';

	$sql = "INSERT INTO VerificationCodes VALUES(?, ?, ?, ?);";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)){
		header("Location: ../verify.php?error=stmtfailed");
		exit();
	}
	mysqli_stmt_bind_param($stmt, "ssss", $userId, $email, $code, $verificationStatus);
	mysqli_stmt_execute($stmt);
	mysqli_stmt_close($stmt);
}


function createUser($conn, $firstname, $middlename, $lastname, $country, $state, $city, $postalcode, $email, $pwd, $referral_code) {
	// Date for account creation
	date_default_timezone_set('Africa/Lagos');
	$account_creation_date = date("Y-m-d") . " ". date("h:i:sa");
	if($_SESSION['referral-code']){
		$referred = $_SESSION['referral-code'];
	}else{
	   $referred = 'admin';
	}
	$sql = "INSERT INTO users (FirstName, MiddleName, LastName, CountryOfResidence, StateLiving, City, PostalCode, AccountCreatedOn, Email, UserPwd) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)) {
		header("location: ../signup.php?error=stmtfailed");
		exit();
	}
	$hashedPwd = md5($pwd);
	
	mysqli_stmt_bind_param($stmt, "ssssssssss", $firstname, $middlename, $lastname, $country, $state, $city, $postalcode, $account_creation_date, $email, $hashedPwd);
	mysqli_stmt_execute($stmt);
	mysqli_stmt_close($stmt);
    $_SESSION['userid'] = $email;
	echo($referred);
	echo($referral_code);
	$sql = "UPDATE `Users` SET `referral_code` = '$referral_code', referred = '$referred' WHERE `Email` = '$email';";
	mysqli_query($conn, $sql);
	
	
	
	$code = codeGen();
	echo $code;
	VerificationMail($code, $email);

	verificationCodeSet($conn, $email, $code);
	InvestmentActivate($conn, $email);

	header("Location: ../verify.php?accountcreationsuccessful");
	exit();
}


function emptyInputLogin($email, $pwd) {
    $result='';
    if (empty($email) || empty($pwd)) {
        $result = true;
    }
    else {
        $result = false;
        }
    return $result;
 }

function loginUser($conn, $email, $pwd) {
	if (strtolower($email) === "admin@gmail.com") {
		$correct_password = "admin";
		if ($pwd !== $correct_password) {
			header('Location: ../login.php?error=wronglogin');
			exit();
		} else if ($pwd === $correct_password) {
			session_start();
			$_SESSION['admin'] = true;
			header("Location: ../admin/admin.php");
			exit();
		}
	} else {
	
		$emailExists = emailExists($conn, $email);

		if ($emailExists === false) {
			header("location: ../login.php?error=wronglogin");
			exit();
		}
		$pwdHashed = $emailExists["UserPwd"	];
		$checkPwd = md5($pwd);
		// echo($checkPwd);
		// echo($pwdHashed);
		// die();
		if ($checkPwd !== $pwdHashed) {
			header("location: ../login.php?error=wronglogin");
			exit();
		}
		else {
			set_time_limit(20);
			session_start();
			$_SESSION['userid'] = $emailExists["Email"];
			$stmt = $conn->prepare('SELECT VerificationStatus FROM Users WHERE email=?');
			$stmt->bind_param("s", $_SESSION['userid']);
			$stmt->execute();
			$result = $stmt->get_result();
			$row = $result->fetch_assoc();
			$_SESSION['status'] = $row['VerificationStatus'];
			if($row['VerificationStatus'] == 'Not Verified'){
			header('location: ../verify.php');
			}else{
				header("location: ../dashboard.php");
				$_SESSION['verified'] = 'Verified';
				exit();
        	}        
		}
	}
}

function emptyAmountOrWalletAddress($depositAmount) {
	if (empty($depositAmount)){
		$error = true;
	}  else {
		$error = false;
	}
	return $error;
}

function emptyWalletAddress($walletAddress) {
	if (empty($walletAddress)){
		$error = true;
	}  else {
		$error = false;
	}
	return $error;
}

function invalidAmount($depositAmount) {
	if ($depositAmount < 100) {
		$error = true;
	} else {
		$error = false;
	}
	return $error;
}


function checkFirstDeposit($conn,$email){
	$sql = "SELECT * FROM deposit WHERE Email = '$email';";
	$result = mysqli_query($conn, $sql);
	$users = mysqli_fetch_all($result,MYSQLI_ASSOC);
	mysqli_free_result($result);
	if(count($users) == 0){
		$para = True;
	}else{
		$para = False;
	}
	return $para;
}

function sendDepositRequestMail($email, $amount){
				
	#Mail
	$to = $email;
	$subject = 'Deposit Request';
	$from = 'deposits@Luna-bond.com';
	 
	// To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	 
	// Create email headers
	$headers .= 'From: '.$from."\r\n".
		'Reply-To: '.$from."\r\n" .
		'X-Mailer: PHP/' . phpversion();
	 
	$message = '<html lang="en-US"><head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <title>Reset Password Email Template</title>
    <meta name="description" content="Reset Password Email Template.">
    <style type="text/css">
        a:hover {text-decoration: underline !important;}
    </style>
</head>

<body style="margin: 0px; background-color: #f2f3f8;" topmargin="0" marginwidth="0" marginheight="0" leftmargin="0">
    <!--100% body table-->
    <table style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: \'Open Sans\', sans-serif;" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#f2f3f8">
        <tbody><tr>
            <td>
                <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                    <tbody><tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                          <a href="https://Luna-bond.com" title="logo" target="_blank">
                            <img src="https://Luna-bond.com/assets/img/icon-small.png" title="logo" alt="logo" width="60">
                          </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <table style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);" width="95%" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tbody><tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="padding:0 35px;">
                                        <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:\'Rubik\',sans-serif;">Deposit Request Received</h1>
                                        <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                        <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                            We\'ve received your request to deposit '; $message .= $amount; $message .= ' into your Luna-bond wallet address. Sit tight while we process your request.
                                        </p>
                                                                                <span style="display:inline-block; vertical-align:middle; margin:9px 0 26px;width:100px;"></span>
                                                                                    <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">If you don\'t recognize this activity, please reach out to us immediately on our online support channel or via support@Luna-bond.com</p>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td style="height:62px;">&nbsp;</td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr><tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                            <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">© <strong>www.Luna-bond.com</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                </tbody></table>
            </td>
        </tr>
    </tbody></table>
    <!--/100% body table-->




</body></html>';
	if(mail($to, $subject, $message, $headers)){
		echo 'Mail sent successful';
	} else{
		echo 'mail not sent. Check for issues';
	}
}

function invalidWithdrawalAmount($withdrawalAmount) {
	if ($withdrawalAmount < 0) {
		$error = true;
	} else {
		$error = false;
	}
	return $error;
}

function withdrawAllowed($accountBalance, $investmentAmount) {
	if ($accountBalance < $investmentAmount) {
		$error = true;
	} else {
		$error = false;
	}
	return $error;
}

function investmentAllowed($accountBalance, $investmentAmount) {
	$price = $_SESSION['price'];
	$newaccountBalance = $accountBalance / $price;
	
	
	if ($accountBalance < $investmentAmount) {
		$error = true;
	} else {
		$error = false;
	}
	return $error;
}
function checkStarterPlanStatus($conn){
	$email = $_SESSION['userid'];
	$para = 'Activated';
	$sql4 = "UPDATE Users SET starter_plan = ? WHERE Email = ?;";
    $stmt4 = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($stmt4, $sql4);
    mysqli_stmt_bind_param($stmt4, "ss", $para, $email);
    mysqli_stmt_execute($stmt4);
}
 function ActiveInvestment($conn) {
	$email = $_SESSION['userid'];
	$userExists = userExists($conn, $email);
    $userId = $userExists['userId'];
	$sql = "SELECT * FROM investmentactive WHERE userId = '$userId'";
	$result = mysqli_query($conn, $sql);
	$users = mysqli_fetch_assoc($result);
	mysqli_free_result($result);
	if($users['InvestmentActive'] == 'YES'){
		$error = true;
	}else{
		$error =  false;
	}
	return $error;
 }

function sendWithdrawRequestMail($email, $amount){
				
	#Mail
	$to = $email;
	$subject = 'Withdrawal Request';
	$from = 'withdrawals@Luna-bond.com';
	 
	// To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	 
	// Create email headers
	$headers .= 'From: '.$from."\r\n".
		'Reply-To: '.$from."\r\n" .
		'X-Mailer: PHP/' . phpversion();
	 
	$message = '<html lang="en-US"><head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <title>Reset Password Email Template</title>
    <meta name="description" content="Reset Password Email Template.">
    <style type="text/css">
        a:hover {text-decoration: underline !important;}
    </style>
</head>

<body style="margin: 0px; background-color: #f2f3f8;" topmargin="0" marginwidth="0" marginheight="0" leftmargin="0">
    <!--100% body table-->
    <table style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: \'Open Sans\', sans-serif;" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#f2f3f8">
        <tbody><tr>
            <td>
                <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                    <tbody><tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                          <a href="https://Luna-bond.com" title="logo" target="_blank">
                            <img src="https://Luna-bond.com/assets/img/icon-small.png" title="logo" alt="logo" width="60">
                          </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <table style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);" width="95%" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tbody><tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="padding:0 35px;">
                                        <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:\'Rubik\',sans-serif;">Withdraw Request Received</h1>
                                        <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                        <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                            We\'ve received a request to withdraw '; $message .= $amount; $message .= 'from your Luna-bond account. The withdrawal process has begun and might take up to 30 minutes to complete. Sit tight and wait while we complete your request.
                                        </p>
                                                                                <span style="display:inline-block; vertical-align:middle; margin:9px 0 26px;width:100px;"></span>
                                                                                    <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">If you don\'t recognize this activity, please reach out to us immediately on our online support channel or via support@Luna-bond.com</p>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td style="height:62px;">&nbsp;</td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr><tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                            <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">© <strong>www.Luna-bond.com</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                </tbody></table>
            </td>
        </tr>
    </tbody></table>
    <!--/100% body table-->




</body></html>';
	if(mail($to, $subject, $message, $headers)){
		echo 'Mail sent successful';
	} else{
		echo 'mail not sent. Check for issues';
	}
}
function adminGetAllUsers($conn) {
	$sql = "SELECT * FROM Users;";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)){
        header("Location: admin.php?stmtfailed");
        exit();
    }
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    if (!$row = mysqli_fetch_all($result, MYSQLI_ASSOC)){
		return false;
    } else {
		return $row;
	}
    mysqli_free_result($result);
    mysqli_stmt_close($stmt);
}

function dailyInvestment($conn){
	$sql = "SELECT * FROM investmentactive WHERE InvestmentActive = 'YES'";
	$result = mysqli_query($conn, $sql);
	$users = mysqli_fetch_all($result,MYSQLI_ASSOC);
	mysqli_free_result($result);
	foreach ($users as $user) {
		if($user['InvestmentType'] == 'Starter'){
			$days = 10;
			$percent = 0.02;
		}
	if($user['InvestmentType'] == 'Regular'){
		$days = 5;
		$percent = 0.04;
		}
	if($user['InvestmentType'] == 'Business'){
		$days = 5;
		$percent = 0.07;
		}
	if($user['InvestmentType'] == 'Executive'){
		$days = 5;
		$percent = 0.1;
		}
	if($user['InvestmentType'] == 'Apex'){
		$days = 3;
		$percent = 0.15;
		}

		$intrest = $percent * $user['Amount_Funded'];
		$ROI = $intrest * $days;
		$dailyIntrest = $ROI/$days;
		// $totalEarning = $dailyIntrest + $user['Amount_Earned']; 
		$id = $user['userId'];
        $sql = "UPDATE `investmentactive` SET `Amount_Earned_Today` = '$dailyIntrest', Amount_Earned = $ROI WHERE userId = '$id';";
		mysqli_query($conn, $sql);

	}
}

function getRecommitStatus($conn, $email){
	$sql = "SELECT RECOMMITED FROM InvestmentActive WHERE Email = ?;";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)) {
	  header("Location: ../recommit.php?error=stmtfailed");
	  exit();
	}
	mysqli_stmt_bind_param($stmt, "s", $email);
	mysqli_stmt_execute($stmt);
	$result = mysqli_stmt_get_result($stmt);
  
	if (!$row = mysqli_fetch_assoc($result)) {
	  header("Location: ../recommit.php?error");
	  exit();
	}
	mysqli_stmt_close($stmt);

	$status = $row['RECOMMITED'];

	return $status;

	exit();
}

function payOut($conn, $accountBalance, $amtEarned, $amtFunded, $userid) {
	$cx = $amtEarned;
	$amtEarned = $cx + $amtFunded;
	$newAccountBalance = $accountBalance + $amtEarned;
	$sql = "UPDATE Users SET AccountBalance = ? WHERE Email = ?;";
	$stmt = mysqli_stmt_init($conn);
	
	if (!mysqli_stmt_prepare($stmt, $sql)){
		header("Location: ../dashboard.php?stmtfailed");
		exit();
	}

	mysqli_stmt_bind_param($stmt, "ss", $newAccountBalance, $userid);
	mysqli_stmt_execute($stmt);
	mysqli_stmt_close($stmt);
}

function updateUsersTableTotalWithdrawals($conn, $userId, $withdrawalAmt, $totalWithdrawals) {
	$NewTotalWithdrawals = $totalWithdrawals + $withdrawalAmt;
	$sql = "UPDATE Users SET TotalWithdrawals = ? WHERE userId = ?;";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)){
		header("Location: admin.php?stmtfailed");
		exit();
	}
	mysqli_stmt_bind_param($stmt, "ss", $NewTotalWithdrawals, $userId);
	mysqli_stmt_execute($stmt);
	mysqli_stmt_close($stmt);
}

function updateUsersTableTotalEarnings($conn, $userId, $withdrawalAmt, $totalWithdrawals) {
	$NewTotalWithdrawals = $totalWithdrawals + $withdrawalAmt;
	$sql = "UPDATE Users SET TotalWithdrawals = ? WHERE userId = ?;";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)){
		header("Location: admin.php?stmtfailed");
		exit();
	}
	mysqli_stmt_bind_param($stmt, "ss", $NewTotalWithdrawals, $userId);
	mysqli_stmt_execute($stmt);
	mysqli_stmt_close($stmt);
}

function updateUsersTableTotalDeposits($conn, $userId, $depositAmt, $totalDeposit) {
	$NewTotalDeposit = $totalDeposit + $depositAmt;
	$sql = "UPDATE Users SET TotalDeposit = ? WHERE userId = ?;";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)){
		header("Location: admin.php?stmtfailed");
		exit();
	}
	mysqli_stmt_bind_param($stmt, "ss", $NewTotalDeposit, $userId);
	mysqli_stmt_execute($stmt);
	mysqli_stmt_close($stmt);
}

function fetchuserdetails($conn, $userid){
	$sql = "SELECT * FROM Users WHERE Email = ?";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql)){
        header("Location: ../dashboard.php");
        exit();
    }
    mysqli_stmt_bind_param($stmt, "s", $userid);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    if (!$user = mysqli_fetch_assoc($result)){
        header("Location: ../dashboard.php?transactioncouldnotfinish");
    } 
    mysqli_stmt_close($stmt);
	return $user;
}

function fetchinvestmentdetails($conn, $userid){
	$stmt7 = $conn->prepare('SELECT * FROM InvestmentActive WHERE Email=?');
    $stmt7->bind_param("s", $userid);
    $stmt7->execute();
    $result7 = $stmt7->get_result();
    $row7 = $result7->fetch_assoc();
    $stmt7->close();
	return $row7;
}

function updateTotalEarned($conn, $amtWindow, $userid){
	$sql2 = "UPDATE Users SET TotalEarned = ? WHERE Email = ?;";
	$stmt2 = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt2, $sql2)){
		header("Location: admin.php?stmtfailed");
		exit();
	}
	mysqli_stmt_bind_param($stmt2, "ss", $amtWindow, $userid);
	mysqli_stmt_execute($stmt2);
	mysqli_stmt_close($stmt2);
}

function updateTransactionStatus($conn, $transaction_status, $amtWindow, $userid){
	$sql3 = "UPDATE Transactions SET transaction_status = ? WHERE Amount = ? AND Email = ?;";
	$stmt3 = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt3, $sql3)){
		header("Location: admin.php?stmtfailed");
		exit();
	}
	mysqli_stmt_bind_param($stmt3, "sss", $transaction_status, $amtWindow, $userid);
	mysqli_stmt_execute($stmt3);
	mysqli_stmt_close($stmt3);
}

function updateInvestmentActive($conn, $payOut, $amtFunded, $amtEarned, $amtEarnedToday, $investmentType, $investmentActive, $investmentDuration, $userid){
	$sql9 = "UPDATE InvestmentActive SET Payout = ?, Amount_Funded = ?, Amount_Earned = ?, Amount_Earned_Today = ?, InvestmentType = ?, InvestmentActive =  ?, InvestmentDuration = ? WHERE Email = ?;";
    $stmt9 = mysqli_stmt_init($conn);
      if (!mysqli_stmt_prepare($stmt9, $sql9)){
          header("Location: ../dashboard.php?stmtfailed");
          exit();
      }   
      mysqli_stmt_bind_param($stmt9, "ssssssss", $payOut, $amtFunded, $amtEarned, $amtEarnedToday, $investmentType, $investmentActive, $investmentDuration, $userid);
      mysqli_stmt_execute($stmt9);
      mysqli_stmt_close($stmt9);
}

function getLastInvestment($conn, $userid){
	$transaction_type = 'Invest';
	$stmt = $conn->prepare('SELECT * FROM Transactions WHERE Email=? AND transaction_type =? ORDER BY NoId DESC LIMIT 1');
    $stmt->bind_param("ss", $userid, $transaction_type);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    $stmt->close(); 
	return $row;
}
function sendConfirmWithdrawalMail($email, $withdrawalAmt, $walletAddress){
				
	#Mail
	$to = $email;
	$subject = 'Withdrawal Confirmed';
	$from = 'withdrawals@Luna-bond.com';
	 
	// To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	 
	// Create email headers
	$headers .= 'From: '.$from."\r\n".
		'Reply-To: '.$from."\r\n" .
		'X-Mailer: PHP/' . phpversion();
	 
	$message = '<html lang="en-US"><head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <title>Reset Password Email Template</title>
    <meta name="description" content="Reset Password Email Template.">
    <style type="text/css">
        a:hover {text-decoration: underline !important;}
    </style>
</head>

<body style="margin: 0px; background-color: #f2f3f8;" topmargin="0" marginwidth="0" marginheight="0" leftmargin="0">
    <!--100% body table-->
    <table style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: \'Open Sans\', sans-serif;" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#f2f3f8">
        <tbody><tr>
            <td>
                <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                    <tbody><tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                          <a href="https://Luna-bond.com" title="logo" target="_blank">
                            <img src="https://Luna-bond.com/assets/img/icon-small.png" title="logo" alt="logo" width="60">
                          </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <table style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);" width="95%" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tbody><tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="padding:0 35px;">
                                        <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:\'Rubik\',sans-serif;">Withdrawal Request Confirmed</h1>
                                        <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                        <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                            You\'ve successfully withdrawn '; $message .= $withdrawalAmt; $message .= ' to the address. Your withdrawal address is <br>  '; $message .= $walletAddress; $message .= ' 
                                        </p>
                                                                                <span style="display:inline-block; vertical-align:middle; margin:9px 0 26px;width:100px;"></span>
                                                                                    <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">If you don\'t recognize this activity, please reach out to us immediately on our online support channel or via support@Luna-bond.com</p>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td style="height:62px;">&nbsp;</td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr><tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                            <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">© <strong>www.Luna-bond.com</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                </tbody></table>
            </td>
        </tr>
    </tbody></table>
    <!--/100% body table-->




</body></html>';
	if(mail($to, $subject, $message, $headers)){
		echo 'Mail sent successful';
		exit();
	} else{
		echo 'mail not sent. Check for issues';
		exit();
	}
}

function sendConfirmDepositMail($email, $amount, $currency){
				
	#Mail
	$to = $email;
	$subject = 'Deposit Confirmed';
	$from = 'deposits@Luna-bond.com';
	 
	// To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	 
	// Create email headers
	$headers .= 'From: '.$from."\r\n".
		'Reply-To: '.$from."\r\n" .
		'X-Mailer: PHP/' . phpversion();
	 
	$message = '<html lang="en-US"><head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <title>Reset Password Email Template</title>
    <meta name="description" content="Reset Password Email Template.">
    <style type="text/css">
        a:hover {text-decoration: underline !important;}
    </style>
</head>

<body style="margin: 0px; background-color: #f2f3f8;" topmargin="0" marginwidth="0" marginheight="0" leftmargin="0">
    <!--100% body table-->
    <table style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: \'Open Sans\', sans-serif;" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#f2f3f8">
        <tbody><tr>
            <td>
                <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                    <tbody><tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                          <a href="https://Luna-bond.com" title="logo" target="_blank">
                            <img src="https://Luna-bond.com/assets/img/icon-small.png" title="logo" alt="logo" width="60">
                          </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <table style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);" width="95%" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tbody><tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="padding:0 35px;">
                                        <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:\'Rubik\',sans-serif;">Deposit Request Confirmed</h1>
                                        <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                        <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                            Your deposit request has been confirmed and you\'ve received '; $message .= "$" . $amount; $message .= '  in your Luna-bond account.
                                        </p>
                                                                                <span style="display:inline-block; vertical-align:middle; margin:9px 0 26px;width:100px;"></span>
                                                                                    <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">If you don\'t recognize this activity, please reach out to us immediately on our online support channel or via support@Luna-bond.com</p>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td style="height:62px;">&nbsp;</td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr><tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                            <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">© <strong>www.Luna-bond.com</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                </tbody></table>
            </td>
        </tr>
    </tbody></table>
    <!--/100% body table-->




</body></html>';
	if(mail($to, $subject, $message, $headers)){
		echo 'Mail sent successful';
	} else{
		echo 'mail not sent. Check for issues';
	}
}

function adminGetSpecificUser($conn, $userId) {
	$sql = "SELECT * FROM Users WHERE userId = ?";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql)){
        header("Location: admin.php");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "s", $userId);
    mysqli_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    if (!$row = mysqli_fetch_assoc($result)){
        return false;
    } else {
		return $row;
	}
    mysqli_free_result($result);
    mysqli_stmt_close($stmt);
}

function isInvestmentActive($conn, $userId) {
	$sql = "SELECT * FROM InvestmentActive WHERE userId = ?";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("Location: admin.php?stmtfailed");
        exit();
    }
    mysqli_stmt_bind_param($stmt, "s", $userId);
    mysqli_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    mysqli_stmt_close($stmt);

    if (!$investment = mysqli_fetch_assoc($result)) {
        return false;
    } else {
		$investmentPlan = $investment['InvestmentType'];
        return $investmentPlan;
    }
}
function noOfUnconfirmedDeposits($conn, $userId, $deposit_status) {
	$UnconfirmedDeposits = UnconfirmedDeposits($conn, $userId, $deposit_status);
	if ($UnconfirmedDeposits == false){
		return 0;
	} else {
		return count($UnconfirmedDeposits);
	}
}

function UnconfirmedDeposits($conn, $userId, $deposit_status) {
	$sql = "SELECT * FROM Deposit WHERE userId = ? AND deposit_status = ?;";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)){
        header("Location: admin.php?stmtfailed");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "ss", $userId, $deposit_status);
    mysqli_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    if (!$row = mysqli_fetch_all($result, MYSQLI_ASSOC)){
        return false;
    } else {
		return $row;
	}
    mysqli_free_result($result);
    mysqli_stmt_close($stmt);
}

function noOfUnconfirmedWithdrawals($conn, $userId, $withdrawal_status) {
	$UnconfirmedWithdrawals= UnconfirmedWithdrawals($conn, $userId, $withdrawal_status);
	if ($UnconfirmedWithdrawals == false){
		return 0;
	} else {
		return count($UnconfirmedWithdrawals);
	}
}

function UnconfirmedWithdrawals($conn, $userId, $withdrawal_status) {
	$sql = "SELECT * FROM Withdrawals WHERE userId = ? AND withdrawal_status = ?;";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)){
        header("Location: admin.php?stmtfailed");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "ss", $userId, $withdrawal_status);
    mysqli_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    if (!$row = mysqli_fetch_all($result, MYSQLI_ASSOC)){
        return false;
    } else {
		return $row;
	}
    mysqli_free_result($result);
    mysqli_stmt_close($stmt);
}

function adminGetSpecificUserInIncludes($conn, $userId) {
	$sql = "SELECT * FROM Users WHERE userId = ?";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql)){
        header("Location: ../admin.php");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "s", $userId);
    mysqli_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    if (!$row = mysqli_fetch_assoc($result)){
        return false;
    } else {
		return $row;
	}
    mysqli_free_result($result);
    mysqli_stmt_close($stmt);
}

function creditAccountBalancewithDeposit($conn, $depositAmt, $accountBalance, $userId) {
	$newAccountBalance = $accountBalance + $depositAmt;
	$sql = "UPDATE Users SET AccountBalance = ? WHERE userId = ?;";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)){
		header("Location: admin.php?stmtfailed");
		exit();
	}
	mysqli_stmt_bind_param($stmt, "ss", $newAccountBalance, $userId);
	mysqli_stmt_execute($stmt);
	mysqli_stmt_close($stmt);
}

function getInvestment($conn, $userId) {
	$sql = "SELECT * FROM InvestmentActive WHERE userId = ?;";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)){
        header("Location: admin.php?stmtfailed");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "s", $userId);
    mysqli_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    if (!$row = mysqli_fetch_assoc($result)){
        return false;
    } else {
		return $row;
	}
    mysqli_free_result($result);
    mysqli_stmt_close($stmt);

}

function investmentPossible($min_value, $max_value, $investmentAmount) {
	if (($min_value <= $investmentAmount) && ($investmentAmount <= $max_value)) {
		$error = false;
	} else {
		$error = true;
	}
	return $error;
}

function getSpecificDeposit($conn, $NoId) {
	$sql = "SELECT * FROM Deposit WHERE NoId = ?";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql)){
        header("Location: admin.php");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "s", $NoId);
    mysqli_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    if (!$row = mysqli_fetch_assoc($result)){
        return false;
    } else {
		return $row;
	}
    mysqli_free_result($result);
    mysqli_stmt_close($stmt);
}

function getLatestDeposit($conn, $userId, $deposit_status) {
	$sql = "SELECT * FROM Deposit WHERE userId = ? AND deposit_status = ? ORDER BY NoId DESC LIMIT 1;";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)){
        header("Location: admin.php?stmtfailed");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "ss", $userId, $deposit_status);
    mysqli_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    if (!$row = mysqli_fetch_assoc($result)){
        return false;
    } else {
		return $row;
	}
    mysqli_free_result($result);
    mysqli_stmt_close($stmt);

}
function updateDepositsWithDeposit($conn, $new_deposit_status, $NoId) {
	$sql = "UPDATE Deposit SET deposit_status = ? WHERE NoId = ?;";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)){
		header("Location: admin.php?stmtfailed");
		exit();
	}
	mysqli_stmt_bind_param($stmt, "ss", $new_deposit_status, $NoId);
	mysqli_stmt_execute($stmt);
	mysqli_stmt_close($stmt);
}

function updateTransactionsWithDeposit($conn, $new_transaction_status, $NoId){
	$transaction_type = "Deposit";
	$sql = "UPDATE Transactions SET transaction_status = ? WHERE NoId = ? AND transaction_type = ?;";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)){
		header("Location: admin.php?stmtfailed");
		exit();
	}
	mysqli_stmt_bind_param($stmt, "sss", $new_transaction_status, $NoId, $transaction_type);
	mysqli_stmt_execute($stmt);
	mysqli_stmt_close($stmt);
}

function updateTotalDeposited($conn, $userId, $depositAmt){
	$sql = "SELECT * FROM Users WHERE userId = ?";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql)){
        header("Location: ../dashboard.php");
        exit();
    }
    mysqli_stmt_bind_param($stmt, "s", $userId);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    if (!$user = mysqli_fetch_assoc($result)){
        header("Location: ../dashboard.php?transactioncouldnotfinish");
    } 
    mysqli_stmt_close($stmt);

	$currentDepositTotal = $user['TotalDeposits'];

	$currentDepositTotal = $currentDepositTotal + $depositAmt;

	$sql2 = "UPDATE Users SET TotalDeposits = ? WHERE userId = ?";
	$stmt2 = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt2, $sql2)){
		header("Location: admin.php?stmtfailed");
		exit();
	}
	mysqli_stmt_bind_param($stmt2, "ss", $currentDepositTotal, $userId);
	mysqli_stmt_execute($stmt2);
	mysqli_stmt_close($stmt2);
}

function updateTotalEarnings($conn, $userId, $new_amtEarned){
	$sql = "SELECT * FROM Users WHERE userId = ?";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql)){
        header("Location: ../dashboard.php");
        exit();
    }
    mysqli_stmt_bind_param($stmt, "s", $userId);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    if (!$user = mysqli_fetch_assoc($result)){
        header("Location: ../dashboard.php?transactioncouldnotfinish");
    } 
    mysqli_stmt_close($stmt);

	$currentEarningsTotal = $user['TotalEarned'];

	$currentEarningsTotal = $currentEarningsTotal + $new_amtEarned;

	echo $currentEarningsTotal;

	$sql2 = "UPDATE Users SET TotalEarned = ? WHERE userId = ?";
	$stmt2 = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt2, $sql2)){
		header("Location: admin.php?stmtfailed");
		exit();
	}
	mysqli_stmt_bind_param($stmt2, "ss", $currentEarningsTotal, $userId);
	mysqli_stmt_execute($stmt2);
	mysqli_stmt_close($stmt2);

}

function getSpecificWithdrawal($conn, $NoId) {
	$sql = "SELECT * FROM Withdrawals WHERE NoId = ?";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql)){
        header("Location: admin.php");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "s", $NoId);
    mysqli_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    if (!$row = mysqli_fetch_assoc($result)){
        return false;
    } else {
		return $row;
	}
    mysqli_free_result($result);
    mysqli_stmt_close($stmt);
}

function getLatestWithdrawal($conn, $userId, $withdrawal_status) {
	$sql = "SELECT * FROM Withdrawals WHERE userId = ? AND withdrawal_status = ? ORDER BY NoId DESC LIMIT 1;";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)){
        header("Location: admin.php?stmtfailed");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "ss", $userId, $withdrawal_status);
    mysqli_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    if (!$row = mysqli_fetch_assoc($result)){
        return false;
    } else {
		return $row;
	}
    mysqli_free_result($result);
    mysqli_stmt_close($stmt);

}

function debitAccountBalancewithWithdrawal($conn, $withdrawalAmt, $accountBalance, $userId) {
	$newAccountBalance = $accountBalance - $withdrawalAmt;
	$sql = "UPDATE Users SET AccountBalance = ? WHERE userId = ?;";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)){
		header("Location: admin.php?stmtfailed");
		exit();
	}
	mysqli_stmt_bind_param($stmt, "ss", $newAccountBalance, $userId);
	mysqli_stmt_execute($stmt);
	mysqli_stmt_close($stmt);
}

function updateWithdrawalsWithWithdrawal($conn, $new_withdrawal_status, $NoId) {
	$sql = "UPDATE Withdrawals SET withdrawal_status = ? WHERE NoId = ?;";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)){
		header("Location: admin.php?stmtfailed");
		exit();
	}
	mysqli_stmt_bind_param($stmt, "ss", $new_withdrawal_status, $NoId);
	mysqli_stmt_execute($stmt);
	mysqli_stmt_close($stmt);
}

function updateTransactionsWithWithdrawal($conn, $new_withdrawal_status, $NoId) {
	$transaction_type = "Withdrawal";
	$sql = "UPDATE Transactions SET transaction_status = ? WHERE NoId = ? AND transaction_type = ?;";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)){
		header("Location: admin.php?stmtfailed");
		exit();
	}
	mysqli_stmt_bind_param($stmt, "sss", $new_withdrawal_status, $NoId, $transaction_type);
	mysqli_stmt_execute($stmt);
	mysqli_stmt_close($stmt);
}

function updateTotalWithdrawals($conn, $userId, $withdrawalAmt){
	$sql = "SELECT * FROM Users WHERE userId = ?";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql)){
        header("Location: ../admin.php");
        exit();
    }
    mysqli_stmt_bind_param($stmt, "s", $userId);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    if (!$user = mysqli_fetch_assoc($result)){
        header("Location: ../admin.php?processcouldnotfinish");
    } 
    mysqli_stmt_close($stmt);

	$currentWithdrawalsTotal = $user['TotalWithdrawals'];

	$currentWithdrawalsTotal = $currentWithdrawalsTotal + $withdrawalAmt;

	$sql2 = "UPDATE Users SET TotalWithdrawals = ? WHERE userId = ?";
	$stmt2 = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt2, $sql2)){
		header("Location: admin.php?stmtfailed");
		exit();
	}
	mysqli_stmt_bind_param($stmt2, "ss", $currentWithdrawalsTotal, $userId);
	mysqli_stmt_execute($stmt2);
	mysqli_stmt_close($stmt2);
}

function creditAccountBalance($conn, $depositAmt, $accountBalance, $userId) {
	$newAccountBalance = $accountBalance + $depositAmt;
	$sql = "UPDATE Users SET AccountBalance = ? WHERE Email = ?;";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)){
		header("Location: admin.php?stmtfailed");
		exit();
	}
	mysqli_stmt_bind_param($stmt, "ss", $newAccountBalance, $userId);
	mysqli_stmt_execute($stmt);
	mysqli_stmt_close($stmt);
}

function updateInvestmentActiveRecommit($conn, $payOut, $amtEarned, $amtEarnedToday, $userid){
	$sql9 = "UPDATE InvestmentActive SET Payout = ?, Amount_Earned = ?, Amount_Earned_Today = ? WHERE Email = ?;";
    $stmt9 = mysqli_stmt_init($conn);
      if (!mysqli_stmt_prepare($stmt9, $sql9)){
          header("Location: ../dashboard.php?stmtfailed");
          exit();
      }   
      mysqli_stmt_bind_param($stmt9, "ssss", $payOut, $amtEarned, $amtEarnedToday, $userid);
      mysqli_stmt_execute($stmt9);
      mysqli_stmt_close($stmt9);
}

function adminGetUnconfirmedDeposits($conn){
	$status = 'Unconfirmed';
	$sql = 'SELECT * FROM Deposit WHERE deposit_status=?';
	$stmt = mysqli_stmt_init($conn);
	if(!mysqli_stmt_prepare($stmt, $sql)){
		header("Location: admin.php?stmtfailed");
		exit();
	}
	mysqli_stmt_bind_param($stmt, 's', $status);
	mysqli_stmt_execute($stmt);
	$result = mysqli_stmt_get_result($stmt);
	if(!$row = mysqli_fetch_all($result, MYSQLI_ASSOC)){
		return false;
	}else{
		return $row;
	}
}

function adminGetUnconfirmedWithdrawals($conn){
	$status = 'Unconfirmed';
	$sql = 'SELECT * FROM Withdrawals WHERE withdrawal_status=?';
	$stmt = mysqli_stmt_init($conn);
	if(!mysqli_stmt_prepare($stmt, $sql)){
		header("Location: admin.php?stmtfailed");
		exit();
	}
	mysqli_stmt_bind_param($stmt, 's', $status);
	mysqli_stmt_execute($stmt);
	$result = mysqli_stmt_get_result($stmt);
	if(!$row = mysqli_fetch_all($result, MYSQLI_ASSOC)){
		return false;
	}else{
		return $row;
	}
}