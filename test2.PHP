<?php

include_once 'includes/dbconnection.php';

$transaction_type = "Withdrawal";
$transaction_status = "Pending";
$userId = 3;
$email = "georgienwankwo@gmail.com";
$withdrawalAmount = 100;
$withdrawalDate = '10-10-2021';

$sql3 = "INSERT INTO Transactions(NoId, userId, Email, transaction_type, Amount, transaction_status, transaction_date) VALUES(?, ?, ?, ?, ?, ?, ?);";
$stmt3 = mysqli_stmt_init($conn);
if (!mysqli_stmt_prepare($stmt3, $sql3)){
    header("Location: ../withdraw.php?error=stmtfailed");
    exit();
}
mysqli_stmt_bind_param($stmt3, "sssssss", $NoId, $userId, $email, $transaction_type, $withdrawalAmount, $transaction_status, $withdrawalDate);
mysqli_stmt_execute($stmt3);
mysqli_stmt_close($stmt3);


?>