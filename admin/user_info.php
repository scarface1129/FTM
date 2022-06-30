<?php
    include_once('../includes/dbconnection.php');
    include_once('../includes/functions.php');
    
    session_start();
    if (!isset($_SESSION['admin'])) {
        header("Location: ../logout.php");
        exit();
    }

    $userId = mysqli_real_escape_string($conn, $_GET['id']);
    if (adminGetSpecificUser($conn, $userId) === false) {
        header("Location: show-all-users.php?msg=userdoesnotexist");
        exit();
    } else {
        $users = adminGetSpecificUser($conn, $userId);
    }

    $investment_is_active = isInvestmentActive($conn, $userId);

    $deposit_status = $withdrawal_status = "Unconfirmed";

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
    <section class="compass admin-compass user-main-compass">
        <div class="admin-page-title user-main-title">
            <h1 class="user-main-title"><?php echo $users['FirstName'] . ' ' . $users['LastName']; ?></h1>
        </div>
        <div class="quick-tasks user-quick-task-desktop-flex">
            <div class="account-showinv-quick-task-flex">
                <div class="account-balance">
                    <h1>$<?php echo number_format($users['AccountBalance'], 2); ?></h1>
                    <p>Account Balance</p>
                </div>
                <?php if ($investment_is_active == false) {?>
                <div class="show-investment-active">
                    <p>Active Investment</p>
                    <p>None</p>
                </div>
                <?php } else {$investmentPlan = isInvestmentActive($conn, $userId);?>
                <div class="show-investment-active">
                    <p>Active Investment</p>
                    <p><?php echo $investmentPlan; ?></p>
                </div>
                <?php } ?>
                <div class="quick-tasks user-quick-tasks">
                    <?php 
                    $number = noOfUnconfirmedDeposits($conn, $userId, $deposit_status);?>
                    <a href="confirm-deposits.php?id=<?php echo $users['userId']; ?>">
                        <div class="quick-task quick-task-alt">
                            <div class="quick-task-title">
                                <p>Confirm<br>Deposits</p>
                            </div>
                            <div class="quick-task-metric">
                                <p><?php echo $number;?></p>
                                <div class="quick-task-link"></div>
                            </div>
                        </div>
                    </a>
                    <?php 
                        $number_two = noOfUnconfirmedWithdrawals($conn, $userId, $withdrawal_status);?>
                    <a href="confirm-withdrawal.php?id=<?php echo $users['userId']; ?>">
                        <div class="quick-task quick-task-alt">
                            <div class="quick-task-title">
                                <p>Confirm<br>Withdrawals</p>
                            </div>
                            <div class="quick-task-metric">
                                <p><?php echo $number_two;?></p>
                                <div class="quick-task-link"></div>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
            <div class="quick-tasks-sub-flex-change">
                <div class="quick-tasks-sub">
                    <p>Quick Tasks</p>
                    <div class="quick-tasks-contain">
                        <a href="fund-user.php?id=<?php echo $users['userId']; ?>">
                            <div class="quick-task-div">
                                <div class="quick-task-icon"><i class="fas fa-external-link-alt"></i></div>
                                <p>Fund User</p>
                            </div>
                        </a>
                        <a href="falsify-figures.php?id=<?php echo $users['userId']; ?>">
                            <div class="quick-task-div">
                                <div class="quick-task-icon"></div>
                                <p>Falsify Figures</p>
                            </div>
                        </a>

                    </div>
                </div>
            </div>

        </div>
    </section>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="../assets/js/script.js"></script>
    <script src="../assets/js/error-display.js"></script>
</body>

</html>