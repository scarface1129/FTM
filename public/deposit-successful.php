 <!DOCTYPE html>
 <html lang="en">

 <head>
     <meta charset="UTF-8">
     <link rel="icon" type="image/png" href="assets/images/FTM.png">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>FTM - The world's leading investing platform</title>
     <script src="https://kit.fontawesome.com/a312657ba2.js" crossorigin="anonymous"></script>
     <link rel="stylesheet" href="assets/css/styles.css">
     <link rel="stylesheet" href="assets/css/queries.css">
     <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
 </head>

 <body class="body-target body-sign deposit-others">
 <section class="nav-section">
        <nav class="navbar navbar-mobile nav-txt-colored" role="navigation">
            <div class="logo-container">
            <img src="./assets/img/FTMblack.png" alt="FTM" class="alt-color-show" style="margin: 0px;cursor: pointer;" width="40%" height="40%"  onclick="location.href='index.php'" ></img>
                <img src="./assets/img/FTMletterblack.png" alt="FTM" class="alt-color-show" style="margin-left: -32px;cursor: pointer;" width="40%" height="40%"  onclick="location.href='index.php'" ></img>
            </div>
            <div id="hamburger-icon" class="hamburger desk-dash-scroll">
                <i id="icon-switch" class="fas fa-bars menuIcon"></i>
                <i id="icon-switch" class="fas fa-times closeIcon"></i>
            </div>
            <div id="hamburger-show-mobile">
                <ul class="menu alt-menu desktop-menu">
                    <li><a class="menuItem" href="index.php">Home</a></li>
                    <li><a class="menuItem" href="dashboard.php">Dashboard</a></li>
                    <li><a class="menuItem" href="deposit.php">Deposit</a></li>
                    <li><a class="menuItem" href="withdraw.php">Withdraw</a></li>
                    <li><a class="menuItem" href="invest.php">Invest</a></li>
                    <li><a class="menuItem" href="profile.php">Profile</a></li>
                    <li><a class="menuItem" href="transactions.php">Transactions</a></li>
                    <li><a class="menuItem" href="logout.php">Logout</a></li>
                </ul>

            </div>
            <div id="desktop-links">
                <ul class="desktop-menu">
                <li><a class="menuItem" href="index.php">Home</a></li>
                <li><a class="menuItem" href="dashboard.php">Dashboard</a></li>
                <li><a class="menuItem" href="deposit.php">Deposit</a></li>
                    <li><a class="menuItem" href="withdraw.php">Withdraw</a></li>
                    <li><a class="menuItem" href="invest.php">Invest</a></li>
                    <li><a class="menuItem" href="profile.php">Profile</a></li>
                    <li><a class="menuItem" href="transactions.php">Transactions</a></li>
                    <button class="btn logout-btn" onclick="window.location = 'logout.php'">Log Out</button>
                </ul>
            </div>
        </nav>
    </section>
     <section class="content verify-icon-others deposit-icon-others">
         <div class="container-img deposit-container-img">
             <img src="assets/img/Piggy.png" alt="">
         </div>
         <h1>Deposit Request<br>Received</h1>
         <p>We’ve received your deposit request and it’s being processed. This might take up to 15 minutes to confirm.
             If after 15 minutes and your account balance is yet to be updated, please send us an email via&nbsp;<a
                 href="mailto:deposit@FTM.com">deposit@FTM.com</a></p>
     </section>
     <section class="content verify-input">
         <div class="button-signup">
             <button class="btn btn-alt create-btn external-dash-btn deposit-successful-btn" onclick="location.href='dashboard.php'">Back to Dashboard</button>
         </div>
     </section>
     <?php include('./footer.php');?>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
     <script src="assets/js/other-nav.js"></script>
     <script src="assets/js/input-handle.js"></script>
 </body>

 </html>