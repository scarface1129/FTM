<?php

    include_once('../../includes/dbconnection.php');
    include_once('../../includes/functions.php');
    
    session_start();
    if (!isset($_SESSION['admin'])) {
        header("Location: ../../logout.php");
        exit();
    }


    if (!isset($_POST['falsify'])) {
        header("Location: ../admin.php");
        exit();
    }

    

    $userId = $_POST['id'];
    $acctBalance = $_POST['acctbal'];
    // $investmentPlan = $_POST['investment-plan'];
    $amtToFund = $_POST['funded'];
    $earned_today = $_POST['earned_today'];
    $amtEarned = $_POST['amtEarned'];

    if (invalidWithdrawalAmount($amtToFund) !== false || invalidWithdrawalAmount($earned_today) !== false || invalidWithdrawalAmount($amtEarned) !== false) {
        $_SESSION['id'] = $_POST['id'];
        header("Location: ../falsify-figures.php?msg=AmountToFalsifyIsInvalid");
        exit();
    }

    // if ($amtEarned > 0 || $earned_today > 0) {
    //     $_SESSION['id'] = $_POST['id'];
    //     header("Location: ../falsify-figures.php?msg=inactiveinvestmentcannotcauseearnings");
    //     exit();
    // }

    if ($amtToFund == 0 && $investmentPlan !== "None") {
        $_SESSION['id'] = $_POST['id'];
        header("Location: ../falsify-figures.php?msg=activeplanmustbefunded");
        exit();
    }
    


    

    $investmentActive = "YES";
    $payOut = "No";
    $new_amtEarned = $amtEarned + $earned_today;
    $sql2 = "UPDATE InvestmentActive SET InvestmentActive = ?, Amount_Funded = ?, Amount_Earned = ?, Amount_Earned_Today = ?, Payout = ? WHERE userId = ?;";
	$stmt2 = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt2, $sql2)){
		header("Location: admin.php?stmtfailed");
		exit();
	}
	mysqli_stmt_bind_param($stmt2, "ssssss", $investmentActive, $amtToFund, $new_amtEarned, $earned_today, $payOut, $userId);
	mysqli_stmt_execute($stmt2);
	mysqli_stmt_close($stmt2);

    updateTotalEarnings($conn, $userId, $earned_today);

    header("Location: ../falsify-figures.php?id=$userId&a=falsificationsuccessful");