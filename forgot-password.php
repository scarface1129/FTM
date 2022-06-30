<?php

    $message = $error = '';
        if (isset($_GET['reset'])) {
            if ($_GET['reset'] == "success") {
                $message = 'Success. Check your mail!';
            }  
        }
        
        $error_message = 'Please re-submit your password reset request';
        if (isset($_GET['error'])) {
            if ($_GET['error'] == "stmtfailed") {
                $error = "Something went wrong. " . $error_message;
            } else if ($_GET['error'] == "emptyinput") {
                $error = "Provide the email you registered the account with";
            } else if ($_GET['error'] == "somethingwentwrong") {
                $error = "Something went wrong. " . $error_message;
            } else if ($_GET['error'] == "couldnotvalidate") {
                $error = "We could not validate your request. " . $error_message;
            } else if ($_GET['error'] == "tokenMismatch") {
                $error = "Something went wrong. " . $error_message;
            } else if ($_GET['error'] == "tokenMayHaveExpired") {
                $error = "The reset link may have expired. " . $error_message;
            }
        }
    ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Luna-bond - The world's leading investing platform</title>
    <script src="https://kit.fontawesome.com/a312657ba2.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="assets/css/styles.css">
    <link rel="stylesheet" href="assets/css/queries.css">
</head>

<body class="body-target body-sign">
<section class="nav-section">
<?php    
   if (isset($_GET['error'])) {
      if ($_GET['error'] =="emptyinput") {
         echo "            <div class='handle error-handle'>
         <div class='inner-handle'>
             <p>Fill every input to continue</p>
         </div>
     </div>";    
      }
      else if ($_GET['error'] == "wronglogin") {
         echo "            <div class='handle error-handle'>
         <div class='inner-handle'>
             <p>Incorrect login details</p>
         </div>
     </div>";
      }
      else if ($_GET['error'] == "passwordchanged") {
         echo "            <div class='handle error-handle success-handle'>
         <div class='inner-handle'>
             <p>Password changed successful.</p>
         </div>
     </div>";
      }
      else if ($_GET['error'] == "emailexists") {
         echo "            <div class='handle error-handle'>
         <div class='inner-handle'>
             <p>Email already exists. Try another one.</p>
         </div>
     </div>";
      }
   }
   if (isset($_GET['success'])) {
            header("location: login.php?success=registrationsuccessful");
   }

 ?>
        <nav class="navbar navbar-mobile navbar-desktop-create nav-disappear logo-shift" role="navigation">
            <div class="logo-container signup-logo">
            <img src="./assets/img/FTMblack.png" alt="FTM" class="alt-color-show" style="margin: 0px;" width="100%" height="40%"></img>
            </div>
            <div id="hamburger-icon" class="hamburger hamburger-signs ham-sign">
                <i id="icon-switch" class="fas fa-bars menuIcon"></i>
                <i id="icon-switch" class="fas fa-times closeIcon"></i>
            </div>
            <div id="hamburger-show-mobile">
                <ul class="menu desktop-menu">
                    <li><a class="menuItem" href="index.php">Home</a></li>
                    <li><a class="menuItem" href="aboutus.php">About Us</a></li>
                    <li><a class="menuItem" href="faq.php">F.A.Q</a></li>
                    <li><a class="menuItem" href="signup.php">Sign Up</a></li>
                    <li><a class="menuItem" href="login.php">Login</a></li>
                </ul>
            </div>
            <div id="desktop-links">
            </div>
        </nav>
    </section>

    <section class="encompass">
        <section class="content signup-area reset-area">
            <div class="signup-page-container">
                <div class="signup-logo-main">
                <img src="./assets/img/FTMblack.png" alt="FTM" class="alt-color-show" style="margin: 0px;" width="100%" height="40%"></img>
                </div>
                <h1>Forgot<br>Password</h1>
            </div>
            <div class="signup-page-container-main"></div>
        </section>
        <section class="content sigup-section">
            <form action="includes/reset.php" class="form-main" method="POST">
                <div class="forgot-password-explain">
                    <p>Enter the email associated with your account and we will send you a link to reset your password.
                    </p>
                </div>
                <div class="div-input">
                    <input type="email" name="email">
                </div>
                <div class="button-signup reset-btn">
                    <button class="btn btn-alt create-btn reset-btn-main" type="submit" name="reset-request-submit">Send
                        Link</button>
                </div>
                <div class="already-account">
                    <p>Remember your password?<a href="login.php">Log in</a></p>
                </div>
            </form>
        </section>
    </section>
    <?php include('./footer.php');?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="assets/js/login.js"></script>
</body>

</html>