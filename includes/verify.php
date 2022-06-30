<?php 

include_once('dbconnection.php');


    if (isset($_POST['verify'])) {
        session_start();
        $email = $_SESSION['email'] = $_SESSION['userid'];

        $sql3 = "SELECT * FROM VerificationCodes WHERE Email =?;";
        $stmt3 = mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt3, $sql3)){
            header('location: ../verify.php?Somethingwentwrong');
            exit();
        }
        mysqli_stmt_bind_param($stmt3, 's', $email);
        mysqli_stmt_execute($stmt3);
        $result = mysqli_stmt_get_result($stmt3);
        $codeRow = mysqli_fetch_assoc($result);
        mysqli_stmt_close($stmt3);
        $code = $codeRow['VerificationCode'];
        
        $first_digit = $_POST['digit1'];
        $second_digit = $_POST['digit2'];
        $third_digit = $_POST['digit3'];
        $fourth_digit = $_POST['digit4'];
        $typed_code = $first_digit . $second_digit . $third_digit . $fourth_digit;
        echo "code = $code";
        echo "typed code = $typed_code";

        if ($typed_code != $code) {
            header("Location: ../verify.php?error=wrongcode");
            exit();


        } else if ($typed_code == $code) {
            $newVerificationStatus = 'Verified';

            
            $sql = "SELECT userId FROM Users WHERE Email = ?;";
            $stmt = mysqli_stmt_init($conn);
            if (!mysqli_stmt_prepare($stmt, $sql)) {
                header("Location: ../verify.php?error=stmtfailed");
                exit();
            }
            mysqli_stmt_bind_param($stmt, "s", $email);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            $userIdRow = mysqli_fetch_assoc($result);
            $userId = $userIdRow['userId'];

            // to Set verification status to verified in the users table
            $sql1 = "UPDATE Users SET VerificationStatus = ? WHERE userId = ?";
            $stmt1 = mysqli_stmt_init($conn);
            if (!mysqli_stmt_prepare($stmt1, $sql1)){
                header("Location: ../verify.php?stmtfailed");
                exit();
            }
        
            mysqli_stmt_bind_param($stmt1, "ss", $newVerificationStatus, $userId);
            mysqli_stmt_execute($stmt1);
            mysqli_stmt_close($stmt1);

            // to Set verification status to verified in the VerificationCodes table
            $sql2 = "UPDATE VerificationCodes SET VerificationStatus = ? WHERE userId = ?";
            $stmt2 = mysqli_stmt_init($conn);
            if (!mysqli_stmt_prepare($stmt2, $sql2)){
                header("Location: ../verify.php?stmtfailed");
                exit();
            }
        
            mysqli_stmt_bind_param($stmt2, "ss", $newVerificationStatus, $userId);
            mysqli_stmt_execute($stmt2);
            mysqli_stmt_close($stmt2);
            $_SESSION['verified'] = 'Verified';
            header('location: ../verificationcomplete.php');

        }
    } else {
            header("Location: ../verify.php");
            exit();
        }
?>