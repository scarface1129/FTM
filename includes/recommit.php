<?php

// include_once 'functions.php';
// include_once 'dbconnection.php';

// if(isset($_POST['invest'])){

//     session_start();

//     $email = $_SESSION['userid'];
//     $userExists = userExists($conn, $email);
//     $accountBalance = $userExists['AccountBalance'];

//     $investmentAmount = $_POST['amount'];
//     $investmentPlan = $_POST['plan'];
//     $previous = $_POST['previous'];

//     // echo $investmentAmount;
//     // echo $investmentPlan;


//     if (empty($investmentAmount)) {
//         header("Location: ../invest.php?error=emptyinput");
//         exit();
//       }

//       if($investmentPlan == 'Regular'){
//         $duration = date('Y-m-d', strtotime(' +4 day'));
//           if($investmentAmount < 0.05 || $investmentAmount > 0.5){
//             header("Location: ../invest.php?error=amountlessthansupportedforregularplan");
//             exit();
//           }
//       }
//       if($investmentPlan == 'Business'){
//         $duration = date('Y-m-d', strtotime(' +2 day'));
//         if($investmentAmount < 0.6 || $investmentAmount > 1.9){
//           header("Location: ../invest.php?error=amountlessthansupportedforbusinessplan");
//           exit();
//         }
//     }
//     if($investmentPlan == 'Executive'){
//       $duration = date('Y-m-d', strtotime(' +1 day'));
//         if($investmentAmount < 2.0 || $investmentAmount > 10.4){
//           header("Location: ../invest.php?error=amountlessthansupportedforexecutiveplan");
//           exit();
//         }
//     }
//     if($investmentPlan == 'Apex'){
//       $duration = date('Y-m-d', strtotime(' +7 day'));
//         if($investmentAmount < 15.3 || $investmentAmount > 50){
//           header("Location: ../invest.php?error=amountlessthansupportedforapexplan");
//           exit();
//         }
//     }

//     $userExists = userExists($conn, $email);
//     $accountBalance = $userExists['AccountBalance'];

//     if (investmentAllowed($accountBalance, $investmentAmount) !== false) {
//       header("Location: ../invest.php?error=insufficientfunds");
//       exit();
//     }
//     $investmentAmountDollarEquiv = $investmentAmount * 630;
//     $investmentActive = "YES";

//     echo $investmentAmountDollarEquiv;
//     echo $investmentPlan;
//     echo $investmentActive;
//     echo $duration;
//     echo $email;

//     if(getRecommitStatus($conn, $email) == 'NO'){
//       $status = 'FIRST';
//       $sql = "UPDATE InvestmentActive SET Amount_Funded = ?, InvestmentType = ?, InvestmentActive = ?, InvestmentDuration = ?, RECOMMITED = ? WHERE Email = ?;";
//       $stmt = mysqli_stmt_init($conn);
//       if (!mysqli_stmt_prepare($stmt, $sql)){
//           header("Location: ../invest.php?stmtfailed");
//           exit();
//       }  
//       mysqli_stmt_bind_param($stmt, "ssssss", $investmentAmountDollarEquiv, $investmentPlan, $investmentActive, $duration, $status, $email);
//       mysqli_stmt_execute($stmt);
//       mysqli_stmt_close($stmt);
//     }elseif(getRecommitStatus($conn, $email) == 'FIRST'){
//       $status = 'YES';
//       $sql = "UPDATE InvestmentActive SET Amount_Funded = ?, InvestmentType = ?, InvestmentActive = ?, InvestmentDuration = ?, RECOMMITED = ? WHERE Email = ?;";
//       $stmt = mysqli_stmt_init($conn);
//       if (!mysqli_stmt_prepare($stmt, $sql)){
//           header("Location: ../invest.php?stmtfailed");
//           exit();
//       }  
//       mysqli_stmt_bind_param($stmt, "ssssss", $investmentAmountDollarEquiv, $investmentPlan, $investmentActive, $duration, $status, $email);
//       mysqli_stmt_execute($stmt);
//       mysqli_stmt_close($stmt);
//     }else{
//       $sql = "UPDATE InvestmentActive SET Amount_Funded = ?, InvestmentType = ?, InvestmentActive = ?, InvestmentDuration = ? WHERE Email = ?;";
//       $stmt = mysqli_stmt_init($conn);
//       if (!mysqli_stmt_prepare($stmt, $sql)){
//           header("Location: ../invest.php?stmtfailed");
//           exit();
//       }  
//       mysqli_stmt_bind_param($stmt, "sssss", $investmentAmountDollarEquiv, $investmentPlan, $investmentActive, $duration, $email);
//       mysqli_stmt_execute($stmt);
//       mysqli_stmt_close($stmt);
//     };


//     $newAccountBalance = $accountBalance - $investmentAmountDollarEquiv;

//     $investDate = date("Y-m-d");
//     $sql2 = "UPDATE Users SET AccountBalance = ? WHERE Email = ?";
//     $stmt2 = mysqli_stmt_init($conn);
//     if (!mysqli_stmt_prepare($stmt2, $sql2)){
//       header("Location: ../invest.php?stmtfailed");
//       exit();
//     }

//     mysqli_stmt_bind_param($stmt2, "ss", $newAccountBalance, $email);
//     mysqli_execute($stmt2);

//     header("Location: ../investment-successful.php");

//     $transaction_type = "Recommitment";
//     $transaction_status = "Active";
//     $NoId = 1;
//     $userId = $userExists['userId'];

//     $sql3 = "INSERT INTO Transactions(NoId, userId, Email, transaction_type, Amount, transaction_status, transaction_date) VALUES(?, ?, ?, ?, ?, ?, ?);";
//     $stmt3 = mysqli_stmt_init($conn);
//     if (!mysqli_stmt_prepare($stmt3, $sql3)){
//         header("Location: ../dashboard.php?error=stmtfailed");
//         exit();
//     }
//     mysqli_stmt_bind_param($stmt3, "sssssss", $NoId, $userId, $email, $transaction_type, $investmentAmountDollarEquiv, $transaction_status, $investDate);
//     mysqli_stmt_execute($stmt3);
//     mysqli_stmt_close($stmt3);

//     creditAccountBalance($conn, $previous, $accountBalance, $email);

//     $payOut = "YES";
//     $amtEarned = 0.00;
//     $amtEarnedToday = 0.00;
//     updateInvestmentActiveRecommit($conn, $payOut, $amtEarned, $amtEarnedToday, $email);

// } else{
//     header("Location: ../invest.php?investtocontinue");
// }
