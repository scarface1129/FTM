<?php

if(isset($_POST['change'])){
    session_start();
include_once 'functions.php';
include_once 'dbconnection.php';

$oldPwd = $_POST['oldpwd'];
$newPwd = $_POST['newpwd'];
$rePwd = $_POST['repwd'];

if(empty($oldPwd) || empty($newPwd) || empty($rePwd)){
    header("location: ../change-password.php?error=emptyinput");
    exit();
}

$pwdHashed = userExists($conn, $_SESSION['userid']);
    $pwdHashed = $pwdHashed['UserPwd'];


    // $checkPwd = password_verify($oldPwd, $pwdHashed);
    $checkPwd = md5($oldPwd);
if($checkPwd === $pwdHashed){
    if($newPwd === $rePwd){
        $email = $_SESSION['userid'];
        $HashedPwd = md5($newPwd);
        $sql = "UPDATE Users SET UserPwd = ? WHERE Email = ?";
         $stmt = mysqli_stmt_init($conn);
         if (!mysqli_stmt_prepare($stmt, $sql)){
           header("Location: ../password-changed.php?stmtfailed");
           exit();
         }
    
         mysqli_stmt_bind_param($stmt, "ss", $HashedPwd, $email);
         mysqli_execute($stmt);
         header("Location: ../password-changed.php");
         exit();
    }
    else{
        header('location: ../change-password.php?error=passwordmismatch');
    }
}
else{
    header('location: ../change-password.php?error=wrongpassword');
}

}
