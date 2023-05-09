<?php

  session_start();
  // To logout a user who is not logged in

  if (!isset($_SESSION['userid'])) {
    header("Location: logout.php");
    exit();
  }

  include_once('includes/functions.php');
  include_once('includes/dbconnection.php');

    if (isset($_POST['deposit'])) {

        $depositAmount = $_SESSION['depositAmount'] = $_POST['depositAmount'];


        if (emptyAmountOrWalletAddress($depositAmount) !== false) {
          header("Location: deposit.php?error=emptydepositfields");
          exit();
        }

        if (invalidAmount($depositAmount) !== false) {
          header("Location: deposit.php?error=invalidAmount");
          exit();
        }
        $convertedDepositAmount = round($_POST['price'], 3);
        
    } else {
        header("Location: deposit.php");
        exit();
    }

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

<body class="deposit-others" id="make-payment-overflow-disable">
    <section class="nav-section">
        <nav class="navbar navbar-mobile nav-txt-colored" role="navigation">
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
    <section class="desktop-format">
        <section class="desktop-format-inner">
            <section class="pad-account pad-pay">
                <div class="page-info-other make-payment-info">
                    <p>Make Payment</p>
                </div>
                <div class="happy-wag">
                    <p>Pay</p>
                    <p><?php echo $convertedDepositAmount ?><span>BTC</span></p>
                </div>
            </section>
            <section class="content chip-display">
                <div class="chip-qr-display">
                    <img src="assets/img/BTC.jpeg" alt="">
                </div>
                <div class="chip-address-display">
                    <p>Wallet Address</p>
                    <p>bc1q92m40gxmhkfr55qymcaqk7edme3gq29jqxg0pu </p>
                    <input type="text" id="inputArea" value="bc1q92m40gxmhkfr55qymcaqk7edme3gq29jqxg0pu" class="hide-input">
                </div>
                <div class="wag-wag">
                    <button class="btn wag-roll wag-roll-again" id="copy-link-aff">Copy wallet address</button>
                </div>
                
                <form action="includes/deposit.php">
                </form>
                <div class="throw-kibble">
                    <p>Transaction Hash</p>
                    <form action="includes/deposit.php" method="POST">
                        <input type="text" required placeholder="Hash" class="number-input" name="transactionHash"
                            id="manual-input">
                </div>
                <div class="woof-woof">
                    <p>By inputting the transaction hash, we’ll be able to confirm your deposits faster. A transaction
                        hash is usually provided after each transaction on your cryptocurrency wallet.</p>
                </div>
                <div class="wag-wag wag-wag-again">
                    <button class="btn wag-roll" type="submit" name="confirm">Confirm Deposit</button>
                </div>
                </form>
            </section>
        </section>
    </section>

    <?php include('./footer.php');?>
    <script>
        var inputedArea = document.getElementById( 'inputArea' );
var copyLink = document.getElementById( 'copy-link-aff' );

        copyLink.addEventListener('click', function(){
  inputedArea.select();
   if ( document.execCommand( 'copy' ) ) {
      copyLink.textContent = 'Copied';
      copyLink.classList.add( 'Copied' );   

      setInterval( function(){
        copyLink.textContent = 'Copy wallet address';
      copyLink.classList.remove( 'copied' );
      }, 900 );
  }
});
      </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="assets/js/other-nav.js"></script>
    <script src="assets/js/input-handle.js"></script>
    <script src="assets/js/moonpay-handle.js"></script>
    <script src="assets/js/d3.js"></script>
</body>

</html>