<?php
    include_once('dbconnection.php');
    include_once 'functions.php';
    if (isset($_POST['confirm'])){
        session_start();
        
        $email = $_SESSION['userid'];
        $payment_method = 'Bitcoin';
        $depositAmount = $_SESSION['depositAmount'];
        if(!$_POST['transactionHash']){
            $transactionHash = 'None';
        }else{
            $transactionHash = $_POST['transactionHash'];
        };
        date_default_timezone_set('Africa/Lagos');   
        $depositDate = date("Y-m-d");

        //To get the userId from the users table
        $sql = "SELECT userId from Users WHERE Email = ?;";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            header("Location: ../dashboard.php?error=stmtfailed");
            exit();
        }
        mysqli_stmt_bind_param($stmt, "s", $email);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);

        if (!$row = mysqli_fetch_assoc($result)) {
            header("Location: ../dashboard.php?error");
            exit();
        }
        mysqli_stmt_close($stmt);
        $userId = $row['userId'];
        $email = $_SESSION['userid'];
       
        if(checkFirstDeposit($conn,$email) == True){
            //fetch id of the person that referred this user.
            $sql = "SELECT referred FROM users WHERE Email = '$email';";
            $result = mysqli_query($conn, $sql);
            $users = mysqli_fetch_all($result,MYSQLI_ASSOC);
            mysqli_free_result($result);
            $referred = $users[0]['referred'];
            $sql = "SELECT * FROM users WHERE referral_code = '$referred';";
            $result = mysqli_query($conn, $sql);
            $users = mysqli_fetch_all($result,MYSQLI_ASSOC);
            $id_ = $users[0]['userId'];
            $email_ = $users[0]['Email'];
            $AccountBalance = $users[0]['AccountBalance'];
            mysqli_free_result($result);
            $sql = "SELECT * FROM investmentactive WHERE userId = '$id_';";
            $result = mysqli_query($conn, $sql);
            $users = mysqli_fetch_all($result,MYSQLI_ASSOC);
            mysqli_free_result($result);
            $investments = $users[0];
            if($investments['InvestmentActive'] == 'YES'){
                if($investments['InvestmentType'] == 'Starter'){
                    $bonus = 0.03;
                }
                if($investments['InvestmentType'] == 'Regular'){
                    $bonus = 0.07;
                    }
                if($investments['InvestmentType'] == 'Business'){
                    $bonus = 0.1;
                    }
                if($investments['InvestmentType'] == 'Executive'){
                    $bonus = 0.15;
                    }
                if($investments['InvestmentType'] == 'Apex'){
                    $bonus = 0.25;
                    }
                $referralbonus = $bonus * $depositAmount;
                $updatedAccountBalance = $AccountBalance + $referralbonus;
                $sql = "UPDATE `users` SET `AccountBalance` = '$updatedAccountBalance' WHERE userId = '$id_';";
                mysqli_query($conn, $sql);
                $transaction_type = "Referral_Bonus";
                $transaction_status = "Confirmed";
                $sql = "INSERT INTO Transactions(NoId, userId, Email, transaction_type, Amount, transaction_status, transaction_date) VALUES ('', '$id_', '$email_','$transaction_type','$referralbonus','$transaction_status', '$depositDate')";
                mysqli_query($conn, $sql);
            }

        }

        // To populate the deposit table
        $sql2 = "INSERT INTO Deposit(userId, Email, depositAmt, depositCurrency, depositDate, transactionHash) VALUES(?, ?, ?, ?, ?, ?);";
        $stmt2 = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt2, $sql2)){
            header("Location: ../dashboard.php?error=stmtfailed");
            exit();
        }
        mysqli_stmt_bind_param($stmt2, "ssssss", $userId, $email, $depositAmount, $payment_method, $depositDate, $transactionHash);
        mysqli_stmt_execute($stmt2);
        mysqli_stmt_close($stmt2);


        // To get the NoId from the deposit table
        $sql = "SELECT NoId FROM Deposit ORDER BY NoId DESC LIMIT 1;";
        $result = mysqli_query($conn, $sql);
        $value = mysqli_fetch_assoc($result);
        $NoId = $value['NoId'];


        // To populate the transaction table
        $transaction_type = "Deposit";
        $transaction_status = "Pending";
        $sql3 = "INSERT INTO Transactions(NoId, userId, Email, transaction_type, Amount, transaction_status, transaction_date) VALUES(?, ?, ?, ?, ?, ?, ?);";
        $stmt3 = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt3, $sql3)){
            header("Location: ../dashboard.php?error=stmtfailed");
            exit();
        }
        mysqli_stmt_bind_param($stmt3, "sssssss", $NoId, $userId, $email, $transaction_type, $depositAmount, $transaction_status, $depositDate);
        mysqli_stmt_execute($stmt3);
        mysqli_stmt_close($stmt3);

        sendDepositRequestMail($email, $depositAmount);


        header("Location: ../deposit-successful.php");
        exit();

    } else {
        header("Location: ../deposit.php");
        exit();
   }


?>