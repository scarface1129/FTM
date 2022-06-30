<?php
   include_once('../includes/dbconnection.php');
   include_once('../includes/functions.php');

   session_start();
   if (!isset($_SESSION['admin'])){
       header("Location: ../logout.php");
       exit();
   }

   if (!isset($_GET['allow-withdrawal'])) {
       header("Location: admin.php");
       exit();
   }

   $withdrawalId = $_GET['withdrawalId'];
   $withdrawalAmt =  $_GET['amt'];
   $walletAddress = $_GET['withdrawalWallet'];

   if (empty($withdrawalAmt)) {
    header("Location: confirm-chosen-withdrawal.php?msg=emptyinput");
    exit();
   }

   if (invalidWithdrawalAmount($withdrawalAmt) !== false) {
    header("Location: confirm-chosen-withdrawal.php?msg=invalidAmount");
    exit();
   }


   if (getSpecificWithdrawal($conn, $withdrawalId) == false) {
    header("Location: confirm-chosen-withdrawal.php?msg=withdrawalDoesNotExist");
    exit();
   } 

   $withdrawal = getSpecificWithdrawal($conn, $withdrawalId);
   $userId = $withdrawal['userId'];

   if (adminGetSpecificUser($conn, $userId) == false) {
    header("Location: confirm-chosen-withdrawal.php?msg=userDoesNotExist");
    exit();
   }

   $user = adminGetSpecificUser($conn, $userId);
   $email = $user['Email'];
   $accountBalance = $user['AccountBalance'];
   $new_transaction_status = $new_withdrawal_status = "Confirmed";
   $NoId = $withdrawal['NoId'];
   $totalWithdrawals = $user['TotalWithdrawals'];

   debitAccountBalancewithWithdrawal($conn, $withdrawalAmt, $accountBalance, $userId);
   updateWithdrawalsWithWithdrawal($conn, $new_withdrawal_status, $NoId);
   updateTransactionsWithWithdrawal($conn, $new_transaction_status, $NoId);
   updateUsersTableTotalWithdrawals($conn, $userId, $withdrawalAmt, $totalWithdrawals);
   sendConfirmWithdrawalMail($email, $withdrawalAmt, $walletAddress);
   updateTotalWithdrawals($conn, $userId, $withdrawalAmt);


   header("Location: admin.php?withdrawalConfirmSuccessful");
   exit();