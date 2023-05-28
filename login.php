<?php
	session_start();

  // To redirect an already-logged-in user or admin to logout
  if (isset($_SESSION['userid']) || isset($_SESSION['admin'])) {
    header("Location: dashboard.php");
    exit();
  }

  if (isset($_SESSION['email'])) {
    $email = $_SESSION['email'];
    $pwd = $_SESSION['pwd'];
  } else {
    $email = $pwd = "";
  }
  
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="assets/images/FTM.png">
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
            <img src="./assets/img/FTMblack.png" alt="FTM" class="alt-color-show" style="margin: 0px;" width="40%" height="40%"></img>
                <img src="./assets/img/FTMletterblack.png" alt="FTM" class="alt-color-show" style="margin-left: -32px;" width="40%" height="40%"></img>
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
        <section class="content signup-area login-area">
            <div class="signup-page-container login-h1-reset">
                <div class="signup-logo-main login-logo-main" onclick="location.href='index.php'">
                <img src="./assets/img/FTMblack.png" alt="FTM" class="alt-color-show" style="margin: 0px;" width="100%" height="40%"></img>
                </div>
                <h1>Welcome Back</h1>
                <h1>Log In</h1>
            </div>
            <div class="signup-page-container-main"></div>
        </section>
        <section class="content sigup-section login-section">
            <form action="includes/login.php" class="form-main" method="POST">
                <div class="div-input">
                    <p>Email</p>
                    <input type="Email" name="email">
                </div>
                <div class="div-input">
                    <p>Password</p>
                    <input type="Password" name="pwd">
                </div>
                <div class="div-tick-box keep-ticked-box">
                    <input type="checkbox" class="checkbox keep-logged">
                    <p>Keep me logged in</p>
                </div>
                <div class="button-signup button-login">
                    <button class="btn btn-alt create-btn login-btn" name="submit" type="submit">Login</button>
                    <button class="btn btn-alt create-btn forgot-btn" onclick="location.href='forgot-password.php'; return false">Forgot Password</button>
                </div>
                <div class="already-account">
                    <p>Don't have an account?<a href="signup.php">Sign Up</a></p>
                </div>
            </form>
        </section>
    </section>
    <?php include('./footer.php');?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="assets/js/login.js"></script>
</body>

</html>