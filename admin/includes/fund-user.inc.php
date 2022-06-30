<?php
    include_once('../../includes/dbconnection.php');
    include_once('../../includes/functions.php');
    
    session_start();
    if (!isset($_SESSION['admin'])) {
        header("Location: ../../logout.php");
        exit();
    }

    if (!isset($_POST['fund-btn'])) {
        header("Location: ../admin.php");
        exit();
    }

    $userId = $_POST['id'];


    if (adminGetSpecificUserInIncludes($conn, $userId) == false) {
        header("Location: ../admin.php?msg=userDoesNotExist");
        exit();
    }

   $user = adminGetSpecificUserInIncludes($conn, $userId);
   $amtToFund = $_POST['fund'];
   $accountBalance = $user['AccountBalance'];

   if (empty($amtToFund)) {
        $_SESSION['id'] = $_POST['id'];
        header("Location: ../fund-user.php?msg=emptyinput");
        exit();
   }

   if (invalidWithdrawalAmount($amtToFund) !== false) {
    $_SESSION['id'] = $_POST['id'];
    header("Location: ../fund-user.php?msg=invalidAmount");
    exit();
   }

   echo $amtToFund;

   creditAccountBalancewithDeposit($conn, $amtToFund, $accountBalance, $userId);

   header("Location: ../admin.php?msg=fundusersuccessful");