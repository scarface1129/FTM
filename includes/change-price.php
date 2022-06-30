<?php

if(isset($_POST['change'])){
    session_start();
include_once 'functions.php';
include_once 'dbconnection.php';

$price = $_POST['price'];
if(empty($price)){
    header("location: ../change-price.php?error=emptyinput");
    exit();
}else{
        $price = $_POST['price'];
        $id = 1;
         $sql = "UPDATE price SET usd_price = ? WHERE id = ?";
         $stmt = mysqli_stmt_init($conn);
         if (!mysqli_stmt_prepare($stmt, $sql)){
           header("Location: ../admin/price-changed.php?stmtfailed");
           exit();
         }
    
         mysqli_stmt_bind_param($stmt, "ss", $price, $id);
         mysqli_execute($stmt);
         header("Location: ../admin/price-changed.php");
         exit();
}
}
