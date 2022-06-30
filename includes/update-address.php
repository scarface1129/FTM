<?php

session_start();

if(isset($_POST['walletAddress'])){

    include_once('dbconnection.php');

    $walletAddress = htmlspecialchars($_POST['walletAddress']);
    $userId = $_SESSION['userid'];

    $sql4 = "UPDATE Users SET WalletAddress = ? WHERE Email = ?;";
    $stmt4 = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt4, $sql4)){
        header("Location: withdrawal.php?stmtfailed");
        exit();
    }
    mysqli_stmt_bind_param($stmt4, "ss", $walletAddress, $userId);
    mysqli_stmt_execute($stmt4);
    mysqli_stmt_close($stmt4);
}






?>