<?php
    include_once('../includes/dbconnection.php');
    include_once('../includes/functions.php');
    
    session_start();
    if (!isset($_SESSION['admin'])) {
        header("Location: ../logout.php");
        exit();
    }


    $userId = mysqli_real_escape_string($conn, $_GET['id']);
    


    if (adminGetSpecificUser($conn, $userId) == false) {
        
        header("Location: admin.php?msg=userDoesNotExist");
        exit();
    }

   $user = adminGetSpecificUser($conn, $userId);

?>

<html>
    <?php echo $user['FirstName'] . ' ' . $user['LastName']; ?>
    <p>Send Email</p>
    <form method="POST" action="includes/send-email.inc.php">
    <input type="text" name="subject" placeholder="Enter the subject or title of the email">
        <div>
            <textarea name="message" placeholder="Type the email you want to send here"></textarea>
        </div>
        Emails might take time to deliver. Please exercise patience.
        <input type="hidden" name="userId" value="<?php echo $user['userId']; ?>">
        <div> 
            <input type="submit" name="send-email-btn" value="Send Email">
        </div>
    </form>
    
    

</html>