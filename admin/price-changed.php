<!DOCTYPE html>
 <html lang="en">

 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>FTM - The world's leading investing platform</title>
     <script src="https://kit.fontawesome.com/a312657ba2.js" crossorigin="anonymous"></script>
     <link rel="stylesheet" href="../assets/css/styles.css">
     <link rel="stylesheet" href="../assets/css/queries.css">
     <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
 </head>

 <body class="body-target body-sign deposit-others">
 <nav class="navbar navbar-mobile nav-txt-colored" role="navigation">
 <div class="logo-container">
                <img src="../assets/img/FTMblack.png" alt="FTM" class="alt-color-show" style="margin: 0px;cursor: pointer;" width="40%" height="40%"  onclick="location.href='../index.php'" ></img>
                <img src="../assets/img/FTMletterblack.png" alt="FTM" class="alt-color-show" style="margin-left: -32px;cursor: pointer;" width="40%" height="40%"  onclick="location.href='../index.php'" ></img>
            </div>
            <div id="hamburger-icon" class="hamburger desk-dash-scroll">
                <i id="icon-switch" class="fas fa-bars menuIcon"></i>
                <i id="icon-switch" class="fas fa-times closeIcon"></i>
            </div>
            <div id="hamburger-show-mobile">
                <ul class="menu alt-menu desktop-menu">
                    <li><a class="menuItem" href="../index.php">Home</a></li>
                    <li><a class="menuItem" href="admin.php">Admin Dashboard</a></li>
                    <li><a class="menuItem" href="confirm-deposits.php">Confirm Deposits</a></li>
                    <li><a class="menuItem" href="confirm-withdrawals.php">Confirm Withdrawals</a></li>
                    <li><a class="menuItem" href="show-all-users.php">All Users</a></li>
                    <li><a class="menuItem" href="../logout.php">Logout</a></li>
                </ul>

            </div>
            <div id="desktop-links">
                <ul class="desktop-menu">
                <li><a class="menuItem" href="../index.php">Home</a></li>
                    <li><a class="menuItem" href="admin.php">Admin Dashboard</a></li>
                    <li><a class="menuItem" href="confirm-deposits.php">Confirm Deposits</a></li>
                    <li><a class="menuItem" href="confirm-withdrawals.php">Confirm Withdrawals</a></li>
                    <li><a class="menuItem" href="show-all-users.php">All Users</a></li>
                    <button class="btn logout-btn" onclick="window.location = '../logout.php'">Log Out</button>
                </ul>
            </div>
        </nav>
     <section class="content verify-icon-others verify-icon-reset">
         <div class="container-img deposit-container-img">
             <lord-icon src="https://cdn.lordicon.com/lupuorrc.json" trigger="loop"
                 colors="primary:#121331,secondary:#0d60d8" style="width:150px;height:150px">
             </lord-icon>
         </div>
         <h1>Price Changed</h1>
         <p>Your USD price to BTC has been changed successfully.</p>
     </section>
     <section class="content verify-input">
         <div class="button-signup">
             <button
                 class="btn btn-alt create-btn external-dash-btn deposit-successful-btn link-sent-btn" onclick="location.href='admin.php'">Go to Dashboard</button>
         </div>
     </section>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
     <script src="../assets/js/other-nav.js"></script>
     <script src="../assets/js/input-handle.js"></script>
 </body>

 </html>