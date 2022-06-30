<?php
    include_once('../../includes/dbconnection.php');
    include_once('../../includes/functions.php');
    
    session_start();
    if (!isset($_SESSION['admin'])) {
        header("Location: ../../logout.php");
        exit();
    }

    if (!isset($_POST['payout-btn'])) {
        header("Location: ../admin.php");
        exit();
    }

    $userId = $_POST['id'];


    if (adminGetSpecificUserInIncludes($conn, $userId) == false) {
        header("Location: ../admin.php?msg=userDoesNotExist");
        exit();
    }

   $user = adminGetSpecificUserInIncludes($conn, $userId);
   $amtEarned = $_POST['amtEarned'];
   $amtFunded = $_POST['amtFunded'];
   $cx = $amtEarned + $amtFunded;
   $accountBalance = $user['AccountBalance'];
   payOutUser($conn, $accountBalance, $cx, $userId);

    $payOut = "YES";
    $amtFunded = 0.00;
    $amtEarned = 0.00;
    $amtEarnedToday = 0.00;
    $investmentType = "None";
    $investmentActive = "NO";


    $sql = "UPDATE InvestmentActive SET Payout = ?, Amount_Funded = ?, Amount_Earned = ?, Amount_Earned_Today = ?, InvestmentType = ?, InvestmentActive =  ? WHERE userId = ?;";
    $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)){
            header("Location: ../admin.php?stmtfailed");
            exit();
        }  
        mysqli_stmt_bind_param($stmt, "sssssss", $payOut, $amtFunded, $amtEarned, $amtEarnedToday, $investmentType, $investmentActive, $userId);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_close($stmt);

    header("Location: ../admin.php?msg=payoutsuccessful");
    exit();


