<?php 
  session_start();
  // To logout a user who is not logged in

  if (!isset($_SESSION['admin'])) {
    header("Location: logout.php");
    exit();
  }
?>

<html lang="en">

<head>
  <meta charset="UTF-8  ">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../assets/css/style.css">
  <link rel="stylesheet" href="../assets/css/queries.css">
  <script src="https://kit.fontawesome.com/a312657ba2.js" crossorigin="anonymous"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet">
  <title>Luna-bond - The world's leading investment platform.</title>
</head>

<body>
<header>
        <nav class="topNav create-nav transparent-nav topnav-blue">
            <div class="menuFlex">

                <a href="admin.php">
                    <div class="logo">
                    <img src="../assets/img/FTMblack.png" alt="FTM" class="alt-color-show" style="margin: 0px;cursor: pointer;" width="40%" height="40%"  onclick="location.href='index.php'" ></img>
                <img src="../assets/img/FTMletterblack.png" alt="FTM" class="alt-color-show" style="margin-left: -32px;cursor: pointer;" width="40%" height="40%"  onclick="location.href='index.php'" ></img>
                    </div>
                </a>

                <div class="menu-toggle">
                    <a href="#" class="tke-blue"><i class="fas fa-bars"></i></a>
                </div>
                <div class="menuDeskTop">
                    <ul>
                        <li><a href="admin.php" class="tke-blue">Home</a></li>
                        <li><a href="allusers.php" class="tke-blue">Users</a></li>
                        <li><a href="confirmdeposits.php" class="tke-blue">Deposits</a></li>
                        <li><a href="confirmwithdrawals.php" class="tke-blue">Withdrawals</a></li>
                        <li><a href="allowpayouts.php" class="tke-blue">Payouts</a></li>
                        <li><a href="sendemail.php" class="tke-blue">Email</a></li>


                        <form action="../logout.php" class="nav-form">
                            <button class="login-btn">Logout</button>
                        </form>
                    </ul>
                </div>
            </div>
            <div class="menu">
                <!--Mobile Dropdown Menu-->
                <ul>
                    <a href="admin.php" class="tke-blue">
                        <li>Home</li>
                    </a>
                    <a href="allusers.php" class="tke-blue">
                        <li>Users</li>
                    </a>
                    <a href="confirm-deposits.php" class="tke-blue">
                        <li>Deposits</li>
                    </a>
                    <a href="confirmw-ithdrawals.php" class="tke-blue">
                        <li>Withdrawals</li>
                    </a>
                    <a href="allowpayouts.php" class="tke-blue">
                        <li>Payouts</li>
                    </a>
                    <a href="sendemail.php" class="tke-blue">
                        <li>Email</li>
                    </a>
                </ul>
                <form action="../logout.php" class="nav-form">
                    <button class="login-btn">Logout</button>
                </form>
            </div>
        </nav>
    </header>
  <div class="clip-circle clip-login-circle complete-clip-login-circle"></div>
  <div class="clip-circle-2 clip-login-circle-2 complete-clip-login-circle"></div>
  <div
    class="clip-circle-3 clip-login-circle-3 complete-clip-login-circle complete-clip-login-circle-2 success-circles-2">
  </div>
  <div class="clip-circle-3 clip-login-circle-4 success-circles-4"></div>

  <div class="page-intro page-intro-2">
    <h1>Successful Transaction</h1>
  </div>
  <section class="compass compass-invest compass-invest-reset">
    <form action="admin.php" method="POST" class="form-compass success-center">
      <div class="success-box">
        <lord-icon src="https://cdn.lordicon.com/lupuorrc.json" trigger="loop"
          colors="primary:#233163,secondary:#233163" style="width:120px;height:120px">
        </lord-icon>
      </div>
      <div class="message-display message-payout-display success-message-center">
        <h1>The withdrawal confirmation was successful. An email was sent to the user regarding the details of the
          transaction</h1>
      </div>
      <div class="btn-area btn-area-margin-bt withdraw-btn-area-margin-bt payout-btn-area">
        <button class="inv-btn payout-btn">
          Go to dashboard
        </button>
      </div>
    </form>

  </section>
  <footer>
    <div class="footer-intro">
      <h1>It’s safe. It’s easy.<br>
        It’s Luna-bond.</h1>
    </div>
    <div class="footer-outro">
      <div class="footer-logo">Luna-bond</div>
      <div class="quick-links">
        <a href="admin.php">Home</a>
        <a href="aboutus.php">About Us</a>
        <a href="faq.php">F.A.Q</a>
        <a href="login.php">Login</a>
        <a href="create.php">Sign Up</a>
      </div>
    </div>
  </footer>
  <!--Start of Tawk.to Script-->
  <script type="text/javascript">
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/61636858157d100a41abba8c/1fhm4v6sr';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  </script>
  <!--End of Tawk.to Script-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
  <script src="assets/js/script.js"></script>
</body>

</html>