<?php
    include_once("../includes/dbconnection.php");
    session_start();
    if (!isset($_SESSION['admin'])) {
        header("Location: ../logout.php");
        exit();
    }

    $sql = "SELECT COUNT(userId) FROM Users;";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    $noOfUsers = $row['COUNT(userId)'];


    $result = $conn->query('SELECT * FROM deposit WHERE deposit_status = "Unconfirmed"');
    $noOfUnconfirmedDeposits = $result->num_rows;

    $result = $conn->query('SELECT * FROM withdrawals WHERE withdrawal_status = "Unconfirmed"');
    $noOfUnconfirmedWithdrawals = $result->num_rows;

    $result = $conn->query('SELECT * FROM InvestmentActive WHERE InvestmentActive = "YES"');
    $NoOfInvestmentActive = $result->num_rows;

    $sql = "SELECT usd_price FROM price;";
    $result = mysqli_query($conn, $sql);
    $price = mysqli_fetch_assoc($result);
    mysqli_free_result($result);

    if (isset($_GET['msg'])) {
        if ($_GET['msg'] == 'depositConfirmSuccessful') {
          $msg = 'Deposit Confirmation Successful';
        } else if ($_GET['msg'] == 'userdoesnotexist') {
          $msg = 'User does not exist.';
        } else if ($_GET['msg'] == 'userDoesNotExist') {
          $msg = 'User does not exist.';
        } else if ($_GET['msg'] == 'noLatestWithdrawal') {
          $msg = 'No latest withdrawal';
        } else if ($_GET['msg'] == 'invalidAmount') {
            $msg = 'Invalid Amount';
          } else if ($_GET['msg'] == 'withdrawalDoesNotExist') {
            $msg = 'Withdrawal does not exist';
          } else if ($_GET['msg'] == 'userDoesNotExist') {
            $msg = 'No latest withdrawal';
          } else if ($_GET['msg'] == 'withdrawalConfirmSuccessful') {
            $msg = 'Withdrawal Confirmation Successful';
          }else if ($_GET['msg'] == 'depositDoesNotExist') {
            $msg = 'Deposit does not exist.';
          }else if ($_GET['msg'] == 'AmountToFalsifyIsInvalid') {
            $msg = 'Amount to falsify is invalid';
          }else if ($_GET['msg'] == 'emptyinput') {
            $msg = 'Empty Input';
          }else if ($_GET['msg'] == 'fundusersuccessful') {
            $msg = 'User funding successful';
          }else if ($_GET['msg'] == 'payoutsuccessful') {
            $msg = 'Payout successful';
          }
      } else {
        $msg = '';
      }

?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Luna-bond - The world's leading investing platform</title>
    <script src="https://kit.fontawesome.com/a312657ba2.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../assets/css/styles.css">
    <link rel="stylesheet" href="assets/style.css">
    <link rel="stylesheet" href="assets/query.css">
    <link rel="stylesheet" href="../assets/css/queries.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.6.0/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
</head>

<body>
    <section class="nav-section">
    <?php if(isset($_GET['msg'])){?>
        <div class='handle error-handle other-page-handle'>
            <div class='inner-handle msg-handle'>
                <p><?php echo $msg ?></p>
            </div>
        </div>
        <?php ;}?>
        <nav class="navbar navbar-mobile nav-txt-colored" role="navigation">
            <div class="logo-container">
            <img src="../assets/img/FTMblack.png" alt="FTM" class="alt-color-show" style="margin: 0px;cursor: pointer;" width="40%" height="40%"  onclick="location.href='index.php'" ></img>
                <img src="../assets/img/FTMletterblack.png" alt="FTM" class="alt-color-show" style="margin-left: -32px;cursor: pointer;" width="40%" height="40%"  onclick="location.href='index.php'" ></img>
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
    </section>
    <section class="compass admin-compass">
        <div class="admin-page-title">
            <h1>Quick Tasks</h1>
            <p>This is your admin dashboard. Credit Users, Initiate Withdrawals, Confirm Deposits, Confirm Withdrawals,
                Allow Payouts, Send Emails.</p>
        </div>
        <div class="quick-tasks">
            <a href="show-all-users.php">
                <div class="quick-task ">
                    <div class="quick-task-title">
                        <p class="admin-task-title-main">All Users</p>
                    </div>
                    <div class="quick-task-metric">
                        <p><?php echo $noOfUsers?></p>
                        <div class="quick-task-link">
                            <i class="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                </div>
            </a>

            <a href="confirm-deposits.php">
                <div class="quick-task quick-task-alt">
                    <div class="quick-task-title">
                        <p>Confirm<br>Deposits</p>
                    </div>
                    <div class="quick-task-metric">
                        <p><?php 
                        echo $noOfUnconfirmedDeposits;
                        ?></p>
                        <div class="quick-task-link">
                            <i class="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                </div>
            </a>

            <a href="confirm-withdrawals.php">
                <div class="quick-task quick-task-alt">
                    <div class="quick-task-title">
                        <p>Confirm<br>Withdrawals</p>
                    </div>
                    <div class="quick-task-metric">
                        <p><?php 
                        echo $noOfUnconfirmedWithdrawals;
                        ?></p>
                        <div class="quick-task-link">
                            <i class="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                </div>
            </a>
            <a href="change-price.php">
                <div class="quick-task quick-task-alt">
                        <div class="quick-task-title">
                            <p>Change USD to Dollar Price</p>
                        </div>
                        <div class="quick-task-metric">
                        <p><?php 
                        echo $price['usd_price'];
                        ?></p>
                        <div class="quick-task-link">
                            <i class="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                </div>
            </a>
            
        </div>
    </section>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="../assets/js/dash-script.js"></script>
    <script src="../assets/js/error-handle.js"></script>
</body>

</html>