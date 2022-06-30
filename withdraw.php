<?php
  session_start();
  // To logout a user who is not logged in

 if (!isset($_SESSION['userid'])) {
  header("Location: logout.php");
  exit();
}

  include_once('includes/functions.php');
  include_once('includes/dbconnection.php');

  $email = $_SESSION['userid'];
  $userExists = userExists($conn, $email);
  $accountBalance = $userExists['AccountBalance'];
  $walletAddress = $userExists['WalletAddress'];

  if (isset($_SESSION['withdrawalAmount'])) {
    $withdrawalAmount = $_SESSION['withdrawalAmount'];
   } else {
    $withdrawalAmount = "";
  }

  if (isset($_GET['error'])) {
    if ($_GET['error'] == 'oneornofilledisfilled') {
      $error = 'Pick a payment method and fill in all the fields';
    } else if ($_GET['error'] == 'emptypaymentmethod') {
      $error = 'Pick a payment method';
    } else if ($_GET['error'] == 'emptydepositfields') {
      $error = 'Fill in all the fields';
    } else if ($_GET['error'] == 'invalidWithdrawalAmount') {
      $error = 'Enter a valid amount to withdraw';
    } else if ($_GET['error'] == 'insufficientfunds') {
      $error = 'Insufficient Account Balance';
    }
  } else {
    $error = '';
  }

  $userId = $userExists['userId'];

  
?>
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.6.0/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
</head>

<body class="deposit-others">
    <section class="nav-section">
    <?php if(isset($_GET['error'])){?>
        <div class='handle error-handle other-page-handle'>
            <div class='inner-handle'>
                <p><?php echo $error ?></p>
            </div>
        </div>
        <?php ;}?>
    <nav class="navbar navbar-mobile nav-txt-colored navbar-pushed" role="navigation">
        <div class="logo-container">
        <img src="./assets/img/FTMblack.png" alt="FTM" class="alt-color-show" style="margin: 0px;" width="40%" height="40%"></img>
                <img src="./assets/img/FTMletterblack.png" alt="FTM" class="alt-color-show" style="margin-left: -32px;" width="40%" height="40%"></img>
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
                <li><a class="menuItem" href="logout.php">Logout</a></li></ul>

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
    <section class="pad-account pad-withdraw">
        <div class="other-account-display">
            <p>Account Balance</p>
            <p>$<?php echo number_format($accountBalance, 2); ?><span></span></p>
        </div>
        <div class="page-info-other">
            <p>Withdraw</p>
            <p>How much do you want to withdraw?</p>
        </div>
    </section>
    <section class="content section-deposit section-withdraw">
        <form action="includes/withdraw.php" method="POST">
            <div class="throw-kibble">
                <input type="number" placeholder="Amount" value="<?php echo $withdrawalAmount;?>" class="number-input"
                    name="withdrawalAmount" id="manual-input">
            </div>
            <div class="throw-kibble wallet-display">
                <p>Withdraw to</p>
                <?php
                if(!$walletAddress == ''){
                ?>
                <input type="disabled" class="number-input wallet-input-display" value="<?php echo $walletAddress;?>"
                    name="walletAddress" id="wallet-display" disabled>
                <input type="hidden" class="number-input wallet-input-display" value="<?php echo $walletAddress;?>"
                    name="walletAddress" id="wallet-display" </div> <div
                    class="woof-woof woof-woof-cutie you-short-dog">
                <div class="attack-then-woof">
                    <div></div>
                </div>
                <p>This is the wallet address registered under your account. If you intend on using another wallet
                    address, update it from the profile page.</p>
                <?php } else{?>
                <input type="text" placeholder="Wallet Address" class="number-input" name="walletAddress"
                    id="wallet-display">
            </div>
            <div class="woof-woof woof-woof-cutie you-short-dog">
                <div class="attack-then-woof">
                    <div></div>
                </div>
                <p>The wallet address inputted will be stored as the default wallet for your transactions. If you intend
                    on using another wallet address later, update it from the profile page.</p>
                <?php }?>
            </div>
            <div class="woof-woof woof-woof-cutie">
                <div class="attack-then-woof">
                    <div></div>
                </div>
                <p>Withdrawals are available from USD wallets only. To withdraw invested funds, do ensure they are
                    matured before processing transaction.</p>
            </div>
    </section>
    <section class="content digest-kibble digest-kibble-again">
        <div class="wag-wag">
            <button class="btn wag-roll" name="withdraw" type="submit">Withdraw</button>
        </div>
        </form>
    </section>
    <?php include('./footer.php');?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="assets/js/other-nav.js"></script>
    <script src="assets/js/input-handle.js"></script>
    <script src="assets/js/d3.js"></script>
    <script src="assets/js/error-handle.js"></script>
</body>

</html>