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
     <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
 </head>

 <body class="body-target body-sign deposit-others">
 <section class="nav-section">
        <nav class="navbar navbar-mobile" role="navigation">
            <div class="logo-container abt-faq-logo-cont">
            <img src="./assets/img/FTMblack.png" alt="FTM" class="alt-color-show" style="margin: 0px;" width="40%" height="40%"></img>
                <img src="./assets/img/FTMletterblack.png" alt="FTM" class="alt-color-show" style="margin-left: -32px;" width="40%" height="40%"></img>
            </div>
            <div id="hamburger-icon" class="hamburger desk-dash-scroll">
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
                <ul class="desktop-menu">
                    <li><a class="menuItem" href="index.php">Home</a></li>
                    <li><a class="menuItem" href="aboutus.php">About Us</a></li>
                    <li><a class="menuItem" href="faq.php">F.A.Q</a></li>
                    <li><a class="menuItem" href="signup.php">Sign Up</a></li>
                    <li><a class="menuItem" href="login.php">Login</a></li>
                </ul>
            </div>
        </nav>
    </section>

     <section class="content verify-icon-others">
         <div class="container-img deposit-container-img no-transaction-img">
             <img src="assets/img/Nothing.png" alt="">
         </div>
         <h1>Something Went Wrong</h1>
         <p>Oops! Something went wrong and we couldn't initiate your password change request. Try again later.</p>
     </section>
     <section class="content verify-input">
         <div class="button-signup">
             <button class="btn btn-alt create-btn external-dash-btn deposit-successful-btn"
                 onclick="location.href='login.php'">Login</button>
         </div>
     </section>
     <?php include('./footer.php');?>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
     <script src="assets/js/navbar-home.js"></script>
     <script src="assets/js/input-handle.js"></script>
 </body>

 </html>