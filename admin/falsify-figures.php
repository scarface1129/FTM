<?php
    include_once('../includes/dbconnection.php');
    include_once('../includes/functions.php');
    
    session_start();
    if (!isset($_SESSION['admin'])) {
        header("Location: ../logout.php");
        exit();
    }
    
    if (isset($_GET['msg'])) {
        $userId = $_SESSION['id'];
         $msg = $_GET['msg'];
         if ($msg == "AmountToFalsifyIsInvalid") {
            $msg = "That falsification amount is invalid";
         } else if ($msg == "inactiveinvestmentcannotbefunded") {
            $msg = "An inactive investment cannot be funded";
         } else if ($msg == "inactiveinvestmentcannotcauseearnings") {
            $msg = "An inactive investment cannot raise earnings";
         } else if ($msg == "activeplanmustbefunded") {
            $msg = "An active plan must be funded";
         } else if ($msg == "PlanAndAmtToFundDoNotMatch") {
             $msg = "You cannot activate that investment plan with that amount";
         }
     } else {
         $userId = mysqli_real_escape_string($conn, $_GET['id']);
         $msg = "";
     }


    if (adminGetSpecificUser($conn, $userId) == false && !isset($_GET['msg'])) {
        header("Location: admin.php?msg=userDoesNotExist");
        exit();
    }

    $user = adminGetSpecificUser($conn, $userId);
    $investment = getInvestment($conn, $userId);
    $amtFunded = $investment['Amount_Funded'];
    $plan = $investment['InvestmentType'];
    $earned_today = $investment['Amount_Earned_Today'];
    $amtEarned = $investment['Amount_Earned'];

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
                    <li><a class="menuItem" href="index.php">Home</a></li>
                    <li><a class="menuItem" href="admin.php">Admin Dashboard</a></li>
                    <li><a class="menuItem" href="confirm-deposits.php">Confirm Deposits</a></li>
                    <li><a class="menuItem" href="confirm-withdrawals.php">Confirm Withdrawals</a></li>
                    <li><a class="menuItem" href="show-all-users.php">All Users</a></li>
                    <li><a class="menuItem" href="../logout.php">Logout</a></li>
                </ul>

            </div>
            <div id="desktop-links">
                <ul class="desktop-menu">
                <li><a class="menuItem" href="index.php">Home</a></li>
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
    <?php echo $msg; ?>

        <form action="includes/falsify-figures.inc.php" method="POST">
            <div class="admin-page-title user-main-title">
                <h1 class="user-main-title"><?php echo $user['FirstName'] .' '. $user['LastName'];?></h1>
            </div>
            <div class="quick-tasks user-quick-task-desktop-flex">
                <div class="account-showinv-quick-task-flex">
                    <div class="account-balance">
                        <h1>$<?php echo number_format($user['AccountBalance'], 2); ?></h1>
                        <p>Account Balance</p>
                    </div>
                </div>
                <div class="quick-tasks-sub-flex-change">
                    <div class="quick-tasks-sub">
                        <p class="tab-title">Falsify Figures</p>
                    </div>
                    <div class="value-withdraw-deposit">
                        <div class="manual-input-it">
                            <div class="input-accept falsify-reset">
                                <p>Funded</p>
                                <input type="number" class="input-accept-main falsify-reset-input"
                                    placeholder="How much to fund a plan?" name="funded"
                                    value="<?php echo $amtFunded; ?>">
                            </div>
                            <div class="input-accept falsify-reset">
                                <p>Earned</p>
                                <input type="number" class="input-accept-main falsify-reset-input"
                                    placeholder="Fund the plan" name="amtEarned" value="<?php echo $amtEarned; ?>"
                                    name="amtEarned">
                            </div>
                            <div class="input-accept falsify-reset">
                                <p>Earned Today</p>
                                <input type="number" class="input-accept-main falsify-reset-input"
                                    placeholder="Earned Today" name="earned_today" value="<?php echo $earned_today; ?>">
                            </div>
                        </div>
                        <input type="hidden" name="id" value="<?php echo $user['userId']; ?>">
                        <input type="hidden" name="acctbal" value="<?php echo $user['AccountBalance']; ?>">
                        <div class="button-admin-area">
                            <button class="inv-btn payout-btn" name="falsify" value="Falsify" type="submit">
                                Falsify
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </form>
    </section>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="../assets/js/script.js"></script>
    <script src="../assets/js/error-display.js"></script>
</body>

</html>