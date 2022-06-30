<?php

if(isset($_POST['change'])){
    session_start();
include_once 'functions.php';
include_once 'dbconnection.php';

$address = $_POST['address'];
$email = $_SESSION['userid'];
if(empty($address)){
    header("location: ../change-address.php?error=emptyinput");
    exit();
}else{
        $address = $_POST['address'];
        $email = $_SESSION['userid'];
         $sql = "UPDATE Users SET WalletAddress = ? WHERE Email = ?";
         $stmt = mysqli_stmt_init($conn);
         if (!mysqli_stmt_prepare($stmt, $sql)){
           header("Location: ../address-changed.php?stmtfailed");
           exit();
         }
    
         mysqli_stmt_bind_param($stmt, "ss", $address, $email);
         mysqli_execute($stmt);
         header("Location: ../address-changed.php");
         exit();
}
}
