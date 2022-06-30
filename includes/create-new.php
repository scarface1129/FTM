<?php
    session_start();
    if (isset($_POST['new-password-submit'])) {
        $selector = $_POST['selector'];
        $validator = $_POST['validator'];
        $newPassword = $_POST['newPassword'];
        $confNewPassword = $_POST['confNewPassword'];

        if (empty($newPassword) || empty($confNewPassword)) {
            header("Location: ../reset-password.php?error=emptyinput&selector=$selector&validator=$validator");
            exit();
        }

        if ($newPassword !== $confNewPassword) {
            header("Location: ../reset-password.php?error=passwordMismatch&selector=$selector&validator=$validator");
            exit();
        }

        date_default_timezone_set('Africa/Lagos');
        $currentDate = date("Y-m-d H:i:s");

        require_once('dbconnection.php');
        $sql = "SELECT * FROM pwdreset WHERE pwdResetSelector = ? AND pwdResetExpires >= ?;";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            header("Location: ../reset-password.php?error=stmtfailed");
            exit();
        }

        mysqli_stmt_bind_param($stmt, "ss", $selector, $currentDate);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        mysqli_stmt_close($stmt);

        if (!$row = mysqli_fetch_assoc($result)) {
            header("Location: ../forgot-password.php?error=tokenMayHaveExpired");
            exit();
        } else {
            $tokenBin = hex2bin($validator);
            $tokenCheck = password_verify($tokenBin, $row['pwdResetToken']);
            if ($tokenCheck === false) {
                header("Location: ../forgot-password.php?error=tokenMismatch");
                exit();
            } else if ($tokenCheck === true) {
                $tokenEmail = $row['pwdResetEmail'];

                $sql = "SELECT * FROM Users WHERE Email = ?;";
                $stmt = mysqli_stmt_init($conn);

                if (!mysqli_stmt_prepare($stmt, $sql)) {
                    header("Location: ../reset-password.php?error=stmtfailed");
                    exit();
                } 

                mysqli_stmt_bind_param($stmt, "s", $tokenEmail);
                mysqli_stmt_execute($stmt);
                $result = mysqli_stmt_get_result($stmt);

                if (!$row = mysqli_fetch_assoc($result)) {
                    header("Location: ../reset-password.php?error=somethingwentwrong");
                    exit();
                } else {
                    $sql = "UPDATE Users SET UserPwd = ? WHERE Email = ?;";
                    $stmt = mysqli_stmt_init($conn);
                    if (!mysqli_stmt_prepare($stmt, $sql)) {
                        header("Location: ../reset-password.php?error=stmtfailed");
                        exit();
                    }

                    $hashedNewPassword = password_hash($newPassword, PASSWORD_DEFAULT);
                    // $hashedNewPassword = md5($newPassword);
                    mysqli_stmt_bind_param($stmt, "ss", $hashedNewPassword, $tokenEmail);
                    mysqli_stmt_execute($stmt);

                    mysqli_stmt_close($stmt);
                    

                    $sql = "DELETE FROM pwdreset WHERE pwdResetEmail = ?;";
                    $stmt = mysqli_stmt_init($conn);

                    if (!mysqli_stmt_prepare($stmt, $sql)) {
                        header("Location: ../reset-password.php?error=stmtfailed");
                        exit();
                    }

                    mysqli_stmt_bind_param($stmt, "s", $tokenEmail);
                    mysqli_stmt_execute($stmt);
                    mysqli_stmt_close($stmt);

                    $_SESSION['reset'] = true;

                    header("Location: ../reset-successful.php");
                    exit();
                }

                mysqli_stmt_close($stmt);
            }
        }

        mysqli_stmt_close($stmt);

    } else {
        header("Location: ../index.php");
        exit();
    }