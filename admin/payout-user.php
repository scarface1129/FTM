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

   $sql = "SELECT * FROM InvestmentActive WHERE userId = ?";
   $stmt = mysqli_stmt_init($conn);
   if (!mysqli_stmt_prepare($stmt, $sql)) {
       header("Location: admin.php?msg=stmtfailed");
       exit();
   }

   mysqli_stmt_bind_param($stmt, "s", $user['userId']);
   mysqli_execute($stmt);
   $result = mysqli_stmt_get_result($stmt);
   

   if (!$investment = mysqli_fetch_assoc($result)) {
       header("Location: admin.php?msg=investmentDoesNotExist");
       exit();
   }

   mysqli_stmt_close($stmt);
?>


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
    <section class="set-display-payout">
        <section class="compass admin-compass user-main-compass payout-main-compass">
            <div class="admin-page-title user-main-title">
                <h1 class="user-main-title"><?php echo $user['FirstName'] . ' ' . $user['LastName']; ?></h1>
            </div>
            <div class="quick-tasks user-quick-task-desktop-flex">
                <div class="quick-tasks-sub-flex-change admin-payout-sub-flex">
                    <div class="quick-tasks-sub">
                        <p>Payout User</p>
                    </div>
                </div>
                <div class="account-showinv-quick-task-flex payout-showinv-quick-task-flex">
                    <div class="show-investment-active payout-admin-user-activate">
                        <p>Active Investment</p>
                        <p><?php echo $investment['InvestmentType']; ?></p>
                    </div>
                </div>
                <div class="payout-admin-wrap">
                    <div class="inv-fund-earn inv-fund-earn-payout">
                        <div class="fund-earn fund-earn-payout fund-earn-payout-1">
                            <div class="payout-earn-wrap">
                                <p>Funded</p>
                                <h1><?php echo $investment['Amount_Funded']; ?></h1>
                            </div>
                        </div>
                        <div class="fund-earn fund-earn-mg1 fund-earn-payout fund-earn-payout-2">
                            <div class="payout-earn-wrap">
                                <p>Earned</p>
                                <h1><?php echo $investment['Amount_Earned']; ?></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="button-admin-area">
                    <form action="includes/payout-user.inc.php" method="POST">
                    <input type="hidden" name="amtFunded" value="<?php echo $investment['Amount_Funded']; ?>">
                <input type="hidden" name="amtEarned" value="<?php echo $investment['Amount_Earned']; ?>">
            <input type="hidden" name="id" value="<?php echo $user['userId']; ?>">
                    <button class="inv-btn payout-btn" type="submit" name="payout-btn" value="Payout">
                        Allow
                    </button>
                    </form>
                </div>
            </div>
        </section>
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
    <script src="../assets/js/script.js"></script>
    <script src="../assets/js/error-display.js"></script>
</body>

</html>