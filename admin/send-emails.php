<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../assets/css/style.css">
  <link rel="stylesheet" href="../assets/css/queries.css">
  <script src="https://kit.fontawesome.com/a312657ba2.js" crossorigin="anonymous"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
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
            <li><a href="show-all-users.php" class="tke-blue">Users</a></li>
            <li><a href="confirm-deposits.php" class="tke-blue">Deposits</a></li>
            <li><a href="confirm-withdrawals.php" class="tke-blue">Withdrawals</a></li>
            <li><a href="allow-payouts.php" class="tke-blue">Payouts</a></li>
            <li><a href="send-emails.php" class="tke-blue">Email</a></li>


            <form action="logout.php" class="nav-form">
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
          <a href="show-all-users.php" class="tke-blue">
            <li>Users</li>
          </a>
          <a href="confirm-deposits.php" class="tke-blue">
            <li>Deposits</li>
          </a>
          <a href="confirm-withdrawals.php" class="tke-blue">
            <li>Withdrawals</li>
          </a>
          <a href="allow-payouts.php" class="tke-blue">
            <li>Payouts</li>
          </a>
          <a href="send-emails.php" class="tke-blue">
            <li>Email</li>
          </a>
        </ul>
        <form action="logout.php" class="nav-form">
          <button class="login-btn">Logout</button>
        </form>
      </div>
    </nav>
  </header>
  <section class="compass admin-compass user-compass">
    <div class="admin-page-title">
      <h1>Send Emails</h1>
    </div>
    <div class="users-main">

      <a href="user.html">
                   <div class="user">
                  <div class="user-icon"></div>
                  <p>Olivia Rodriguez</p>
              </div>
              </a>
              <a href="user.html">
                <div class="user">
               <div class="user-icon"></div>
               <p>Olivia Rodriguez</p>
           </div>
           </a>

      <!-- <div class="no-user-contain">
        <div class="no-user-icon">

        </div>
        <p>
          No user yet.
        </p>
      </div> -->

    </div>
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
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="../assets/js/dash-script.js"></script>
    <script src="../assets/js/error-handle.js"></script>
</body>

</html>