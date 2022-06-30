<?php
   include_once('../includes/dbconnection.php');
   include_once('../includes/functions.php');

   session_start();
   if (!isset($_SESSION['admin'])){
       header("Location: ../logout.php");
       exit();
   }

   if (!isset($_GET['id'])){
       if (!isset($_GET['msg'])) {
       header("Location: admin.php");
       exit();
        }
    }

   $userId = $_GET['id'];
   $deposit_status = "Unconfirmed";
   if (UnconfirmedDeposits($conn, $userId, $deposit_status) !== false) {
    $UnconfirmedDeposits = UnconfirmedDeposits($conn, $userId, $deposit_status);
    $UnconfirmedDepositsExist = true;
   } else {
       $UnconfirmedDepositsExist = false;
   }

   $stmt = $conn->prepare('SELECT * FROM Users WHERE userId = ?');
   $stmt->bind_param('s', $userId);
   $stmt->execute();
   $result = $stmt->get_result();
   $row = $result->fetch_assoc();
   $depositName = $row['FirstName'] .' '. $row['LastName'];

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
  <section class="compass admin-compass user-compass">
    <div class="admin-page-title">
      <h1><?php echo $depositName; ?></h1>
    </div>
    <div class="users-main">



    <?php if ($UnconfirmedDepositsExist == true) {?>
        <?php foreach($UnconfirmedDeposits as $deposit) { ?>
      <a href="confirm-chosen-deposit.php?depositId=<?php echo $deposit['NoId']; ?>">
        <div class="user">
          <div class="user-details-spread">
            <p>$<?php echo $deposit['depositAmt'];?></p>
          </div>
        </div>
      </a>
      <?php } ?>
      <?php } else { ?>
      <div class="no-user-contain">
        <div class="no-user-icon">

        </div>
        <p>
          No Deposit Request yet.
        </p>
      </div>
      <?php } ?>

    </div>
  </section>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="../assets/js/dash-script.js"></script>
    <script src="../assets/js/error-handle.js"></script>
</body>

</html>


 