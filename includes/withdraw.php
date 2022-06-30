<?php
    include_once('functions.php');
    include_once('dbconnection.php');

    if(isset($_POST['withdraw'])){
        session_start();
        
        $email = $_SESSION['userid'];
        $payment_method = 'BitcoinCash';
        $walletAddress = $_POST['walletAddress'];
        $withdrawalAmount = $_SESSION['withdrawalAmount'] = $_POST['withdrawalAmount'];
        
        $walletAddress = $_POST['walletAddress'];

        date_default_timezone_set('Africa/Lagos');   
        $withdrawalDate = date("Y-m-d");

        //To get the userId from the users table
        $sql = "SELECT * from Users WHERE Email = ?;";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            header("Location: ../withdraw.php?error=stmtfailed");
            exit();
        }
        mysqli_stmt_bind_param($stmt, "s", $email);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);

        if (!$row = mysqli_fetch_assoc($result)) {
            header("Location: ../withdraw.php?error");
            exit();
        }
        mysqli_stmt_close($stmt);
        $userId = $row['userId'];

        $accountBalance = $row['AccountBalance'];
        $totalWithdrawals = $row['TotalWithdrawals'];

        if (emptyAmountOrWalletAddress($withdrawalAmount, $walletAddress) !== false) {
          header("Location: ../withdraw.php?error=emptydepositfields");
          exit();
        }

        if (emptyWalletAddress($walletAddress) !== false) {
            header("Location: ../withdraw.php?error=emptywalletaddressfield");
            exit();
          }

        if (invalidWithdrawalAmount($withdrawalAmount) !== false) {
          header("Location: ../withdraw.php?error=invalidWithdrawalAmount");
          exit();
        }


        if (withdrawAllowed($accountBalance, $withdrawalAmount) !== false) {
          header("Location: ../withdraw.php?error=insufficientfunds");
          exit();
        }



        // To populate the withdrawal table
        $sql2 = "INSERT INTO Withdrawals(userId, Email, withdrawalAmt, withdrawalCurrency, withdrawalWallet, withdrawalDate) VALUES(?, ?, ?, ?, ?, ?);";
        $stmt2 = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt2, $sql2)){
            header("Location: ../withdraw.php?error=stmtfailed");
            exit();
        }
        mysqli_stmt_bind_param($stmt2, "ssssss", $userId, $email, $withdrawalAmount, $payment_method, $walletAddress, $withdrawalDate);
        mysqli_stmt_execute($stmt2);
        mysqli_stmt_close($stmt2);


        $sql4 = "UPDATE Users SET WalletAddress = ? WHERE userId = ?;";
        $stmt4 = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt4, $sql4)){
            header("Location: withdrawal.php?stmtfailed");
            exit();
        }
        mysqli_stmt_bind_param($stmt4, "ss", $walletAddress, $userId);
        mysqli_stmt_execute($stmt4);
        mysqli_stmt_close($stmt4);


        // To get the NoId from the withdrawal table
        $sql = "SELECT NoId FROM Withdrawals ORDER BY NoId DESC LIMIT 1;";
        $result = mysqli_query($conn, $sql);
        $value = mysqli_fetch_assoc($result);
        $NoId = $value['NoId'];




        // To populate the transaction table
        $transaction_type = "Withdrawal";
        $transaction_status = "Pending";
        $sql3 = "INSERT INTO Transactions(NoId, userId, Email, transaction_type, Amount, transaction_status, transaction_date) VALUES(?, ?, ?, ?, ?, ?, ?);";
        $stmt3 = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt3, $sql3)){
            header("Location: ../withdraw.php?error=stmtfailed");
            exit();
        }
        mysqli_stmt_bind_param($stmt3, "sssssss", $NoId, $userId, $email, $transaction_type, $withdrawalAmount, $transaction_status, $withdrawalDate);
        mysqli_stmt_execute($stmt3);
        mysqli_stmt_close($stmt3);

        //for admin page

        // updateUsersTableTotalWithdrawals($conn, $userId, $withdrawalAmount, $totalWithdrawals);
        
        //

        sendWithdrawRequestMail($email, $withdrawalAmount);

        header("Location: ../withdrawal-successful.php");
        exit();
    } else {
        header("Location: ../withdraw.php");
        exit();
    }
?>