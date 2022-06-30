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
        $convertedDepositAmount = round($_POST['scar'], 3);
        
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
                <!-- <div class="moon-pay">
                    <p>For easy transaction. Simply copy our wallet address and proceed to buy BTC. When processing
                        transaction, input our wallet address to make a direct deposit to our wallet and hasten deposit
                        confirmation.</p>
                    <div class="moonpay-modal" id="moonpay-modal">
                        <div class="moonpay-iframe">
                            <iframe allow="accelerometer; autoplay; camera; encrypted-media; gyroscope; payment"
                                class="max-w-full max-h-screen w-96 h-128" id="buy-widget"
                                src="https://buy.moonpay.com/?defaultCurrencyCode=btc" title="Buy Crypto"></iframe>
                        </div>
                    </div>
                    <div class="moon-pay-area">
                    <p>Click here to buy BTC</p>
                    <div class="moonpay-logo" id="moonpay-logo">
                        <svg width="268" height="81" viewBox="0 0 268 81" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M88.3159 62.5271H93.8954V41.5857L102.489 62.5271H106.989L115.538 41.5857V62.5271H121.117V30.9344H114.278L104.739 54.2679L95.2007 30.9344H88.3159V62.5271Z"
                                fill="white" />
                            <path
                                d="M136.383 62.8881C143.267 62.8881 148.216 57.9236 148.216 51.1537C148.216 44.3839 143.267 39.4193 136.383 39.4193C129.454 39.4193 124.504 44.3839 124.504 51.1537C124.504 57.9236 129.454 62.8881 136.383 62.8881ZM136.383 58.1041C132.603 58.1041 130.084 55.2607 130.084 51.1537C130.084 47.0467 132.603 44.2033 136.383 44.2033C140.118 44.2033 142.637 47.0467 142.637 51.1537C142.637 55.2607 140.118 58.1041 136.383 58.1041Z"
                                fill="white" />
                            <path
                                d="M161.715 62.8881C168.599 62.8881 173.548 57.9236 173.548 51.1537C173.548 44.3839 168.599 39.4193 161.715 39.4193C154.786 39.4193 149.837 44.3839 149.837 51.1537C149.837 57.9236 154.786 62.8881 161.715 62.8881ZM161.715 58.1041C157.935 58.1041 155.416 55.2607 155.416 51.1537C155.416 47.0467 157.935 44.2033 161.715 44.2033C165.45 44.2033 167.969 47.0467 167.969 51.1537C167.969 55.2607 165.45 58.1041 161.715 58.1041Z"
                                fill="white" />
                            <path
                                d="M176.383 62.5271H181.918V50.1157C181.918 46.7759 184.078 44.3387 187.182 44.3387C190.017 44.3387 191.907 46.5051 191.907 49.6193V62.5271H197.441V48.4458C197.441 43.1202 194.111 39.4193 188.982 39.4193C185.743 39.4193 183.178 40.8184 181.918 43.3007V39.7803H176.383V62.5271Z"
                                fill="white" />
                            <path
                                d="M202.036 62.5271H208.02V50.5219H214.68C221.249 50.5219 225.163 46.46 225.163 40.7282C225.163 34.9964 221.249 30.9344 214.68 30.9344H202.036V62.5271ZM208.02 45.5122V35.9441H214.409C217.919 35.9441 219.359 38.2008 219.359 40.7282C219.359 43.2556 217.919 45.5122 214.409 45.5122H208.02Z"
                                fill="white" />
                            <path
                                d="M235.788 39.4193C229.894 39.4193 226.07 42.9397 225.799 47.4528H230.749C230.839 45.4219 232.594 43.5715 235.518 43.5715C238.443 43.5715 240.153 45.1511 240.153 47.3626C240.153 48.2652 239.613 48.8971 238.488 48.8971H234.304C229.219 48.8971 225.799 51.6502 225.799 56.0731C225.799 59.9996 228.859 62.8881 233.359 62.8881C236.599 62.8881 239.208 61.3988 240.153 59.1421V62.5271H245.597V47.9042C245.597 42.7591 241.547 39.4193 235.788 39.4193ZM234.663 58.7811C232.594 58.7811 231.154 57.6077 231.154 55.8475C231.154 53.8617 232.729 52.5529 235.068 52.5529H240.153V52.9139C240.153 56.344 238.128 58.7811 234.663 58.7811Z"
                                fill="white" />
                            <path
                                d="M268 39.7804H262.33L257.111 55.3962L251.847 39.7804H246.223L254.501 62.5271L251.307 71.7341H256.571L260.081 61.444L268 39.7804Z"
                                fill="white" />
                            <path
                                d="M65.6166 47.9531C65.6166 66.1282 50.9278 80.8621 32.8084 80.8621C14.6888 80.8621 0 66.1282 0 47.9531C0 29.778 14.6888 15.0441 32.8084 15.0441C50.9278 15.0441 65.6166 29.778 65.6166 47.9531Z"
                                fill="white" />
                            <path
                                d="M85.3019 11.7532C85.3019 18.2443 80.0558 23.5064 73.5845 23.5064C67.1132 23.5064 61.8672 18.2443 61.8672 11.7532C61.8672 5.26209 67.1132 0 73.5845 0C80.0558 0 85.3019 5.26209 85.3019 11.7532Z"
                                fill="white" />
                        </svg>

                    </div>
                    </div>
                </div> -->
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