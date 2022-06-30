<?php
   
    include_once('dbconnection.php');
    include_once('functions.php');

    session_start();

    // if (!isset($_POST['payout'])){
    //     header("Location: ../dashboard.php?missing");
    //     exit();
    // }
    // print_r($_POST);

    $amtEarned = $_POST['amtEarned'];
    $amtFunded = $_POST['amtFunded'];
    // echo $amtFunded;
    $amtWindow = $_POST['amtFunded'];
    $userid = $_SESSION['userid'];
    

    // echo $amtEarned;
    // echo $amtFunded;
    // echo $amtWindow;

    $details = fetchuserdetails($conn, $userid);
    // print_r($details);
    // exit();

    $TotalEarnedDB = $details['TotalEarned'];
    $userId = $details["userId"]; //This one is for the user's main id not the email
    $accountBalance = $details['AccountBalance'];

    $investmentdetails = fetchinvestmentdetails($conn, $userid);
    $CurrentEarned = $investmentdetails['Amount_Earned'];

    $TotalEarnedDB = $TotalEarnedDB + $CurrentEarned;

    // echo $TotalEarnedDB;


    payOut($conn, $accountBalance, $amtEarned, $amtFunded, $userid);

    $payOut = "YES";
    $amtFunded = 0.00;
    $amtEarned = 0.00;
    $amtEarnedToday = 0.00;
    $investmentType = "None";
    $investmentActive = "NO";
    $investmentDuration = "Finished";

        updateInvestmentActive($conn, $payOut, $amtFunded, $amtEarned, $amtEarnedToday, $investmentType, $investmentActive, $investmentDuration, $userid);
    // echo $amtEarned;

      updateTotalEarned($conn, $TotalEarnedDB, $userid);

      $transaction_status = "Completed";

      updateTransactionStatus($conn, $transaction_status, $amtWindow, $userid);

    // header("Location: ../dashboard.php?payoutsuccessful");

