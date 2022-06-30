<?php
    include_once('../../includes/dbconnection.php');
    include_once('../../includes/functions.php');
    
    session_start();
    if (!isset($_SESSION['admin'])) {
        header("Location: ../../logout.php");
        exit();
    }

    if (!isset($_POST['send-email-btn'])) {
        header("Location: ../admin.php");
        exit();
    }

    $userId = $_POST['userId'];


    if (adminGetSpecificUserInIncludes($conn, $userId) == false) {
        header("Location: ../admin.php?msg=userDoesNotExist");
        exit();
    }

   $user = adminGetSpecificUserInIncludes($conn, $userId);
   $email = $user['Email'];
   $message = $_POST['message'];
   $subject = $_POST['subject'];
   

   if (empty($message) || empty($subject)) {
       header("Location: ../admin.php?msg=emptyinput");
       exit();
   }


   include_once('admin_email_functions.php');
   sendEmailToUSer($email, $message, $subject);
   header("Location: ../admin.php?emailsentsuccessfully");