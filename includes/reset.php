<?php
    session_start();
    
    if (isset($_POST['reset-request-submit'])) {
        if (empty($_POST['email'])) {
        header("Location: ../forgot-password.php?error=emptyinput");
        exit();
        }

        // to avoid timing attacks, we use two tokens

        $selector = bin2hex(random_bytes(8)); // token that will go into the database
        $token = random_bytes(32); // regular token for user authentication

        $url = "www.Luna-bond.com/reset-password.php?selector=" . $selector . "&validator=" . bin2hex($token);
        date_default_timezone_set('Africa/Lagos');
        $expires = date("Y-m-d H:i:s", time() + 300);

        require("dbconnection.php");
        require("functions.php");

        $userEmail = $_POST['email'];

        if(!emailExists($conn, $userEmail) == false){
            $sql = "DELETE FROM pwdreset WHERE pwdResetEmail = ?;";
            $stmt = mysqli_stmt_init($conn);

            if (!mysqli_stmt_prepare($stmt, $sql)) {
                header("Location: ../reset-password.php?error=stmtfailed");
                exit();
            }

            mysqli_stmt_bind_param($stmt, "s", $userEmail);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_close($stmt);
            

            // inserts the email,the two tokens and token expiration date into the database

            $sql = "INSERT INTO pwdreset(pwdResetEmail, pwdResetSelector, pwdResetToken, pwdResetExpires) VALUES(?, ?, ?, ?);";
            $stmt = mysqli_stmt_init($conn);

            if (!mysqli_stmt_prepare($stmt, $sql)) {
                header("Location: ../login.php?error=stmtfailed");
                exit();
            }

            $hashedToken = password_hash($token, PASSWORD_DEFAULT);
            mysqli_stmt_bind_param($stmt, "ssss", $userEmail, $selector, $hashedToken, $expires);

            mysqli_stmt_execute($stmt);

            mysqli_stmt_close($stmt);
            


            $to = $userEmail;
	$subject = 'Password Reset';
	$from = 'reset-password@Luna-bond.com';
	 
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
                                            <h1 style="color: #0d60d8;font-weight:500;margin:0;font-size:32px;font-family:\'Rubik\',sans-serif;">Reset Your Password</h1>
                                            <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                            <p style="color: #606364;font-size:15px;line-height:24px;margin:0;margin-bottom: 52px;">We received a password reset request. The link to reset your password is below. If you did not make this request, you can ignore this email.</p>
                                                                                    <p style="color: #0d60d8;font-size:15px;line-height:24px;margin:0;margin-bottom: 20px;"> '; $message .= $url; $message .= ' </p><span style="display:inline-block; vertical-align:middle; margin:9px 0 26px;width:100px;"></span>
                                                                                        <p style="color: #8d969b;font-size:15px;line-height:24px;margin:0;">If you don\'t recognize this activity, please reach out to us immediately on our online support channel or via support@Luna-bond.com</p>
                                            
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
            header("Location: ../link-sent.php?reset=success");
            } else{
                header("Location: ../link-sent.php?reset=success");
            }
    } else {
        header("Location: ../index.php");
        exit();
    }