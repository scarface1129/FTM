<?php
   include_once('../includes/dbconnection.php');
   include_once('../includes/functions.php');

   session_start();
   if (!isset($_SESSION['admin'])){
       header("Location: ../logout.php");
       exit();
   }

   if (!isset($_GET['allow-deposit'])) {
       header("Location: admin.php");
       exit();
   }

   $depositId = $_GET['depositId'];
   $depositAmt =  $_GET['amt'];
   if (getSpecificDeposit($conn, $depositId) == false) {
    header("Location: confirm-chosen-deposit.php?msg=depositDoesNotExist");
    exit();
   } 

   $deposit = getSpecificDeposit($conn, $depositId);
   $userId = $deposit['userId'];
   $depositCurrency = $deposit['depositCurrency'];

   if (adminGetSpecificUser($conn, $userId) == false) {
    header("Location: confirm-chosen-deposit.php?msg=userDoesNotExist");
    exit();
   }

   $user = adminGetSpecificUser($conn, $userId);
   $accountBalance = $user['AccountBalance'];
   $new_transaction_status = $new_deposit_status = "Confirmed";
   $NoId = $deposit['NoId'];
   $email = $user['Email'];

   creditAccountBalancewithDeposit($conn, $depositAmt, $accountBalance, $userId);
   updateDepositsWithDeposit($conn, $new_deposit_status, $NoId);
   updateTransactionsWithDeposit($conn, $new_transaction_status, $NoId);
   sendConfirmDepositMail($email, $depositAmt, $depositCurrency);
   updateTotalDeposited($conn, $userId, $depositAmt);

   header("Location: admin.php?depositConfirmSuccessful");
   exit();