<?php

include_once 'includes/dbconnection.php';

session_start();

// To logout a user who is not logged in

if (!isset($_SESSION['userid'])) {
    header("Location: logout.php");
    exit();
}

$email = $_SESSION['userid'];

include_once('includes/functions.php');

$userExists = userExists($conn, $email);
$accountBalance = $userExists['AccountBalance'];

if (isset($_SESSION['depositAmount'])) {
    $depositAmount = $_SESSION['depositAmount'];
} else {
    $depositAmount = $walletAddress = "";
}

if (isset($_GET['error'])) {
    if ($_GET['error'] == 'oneornofilledisfilled') {
        $error = 'Pick a payment method and fill in all the fields';
    } else if ($_GET['error'] == 'emptypaymentmethod') {
        $error = 'Pick a payment method';
    } else if ($_GET['error'] == 'emptydepositfields') {
        $error = 'Fill in all the fields';
    } else if ($_GET['error'] == 'invalidAmount') {
        $error = 'Enter a valid amount starting from $300 to deposit';
    }
} else {
    $error = '';
}

$stmt2 = $conn->prepare('SELECT * FROM InvestmentActive WHERE Email=?');
$stmt2->bind_param("s", $email);
$stmt2->execute();
$result2 = $stmt2->get_result();
$row2 = $result2->fetch_assoc();
$stmt2->close();

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="assets/images/FTM.png">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Luna-bond - The world's leading investing platform</title>
    <script src="https://kit.fontawesome.com/a312657ba2.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="assets/css/styles.css">
    <link rel="stylesheet" href="assets/css/queries.css">
</head>

<body class="deposit-others">
    <section class="nav-section">
        <?php if (isset($_GET['error'])) { ?>
            <div class='handle error-handle other-page-handle'>
                <div class='inner-handle'>
                    <p><?php echo $error ?></p>
                </div>
            </div>
        <?php;
        } ?>
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
                    <li><a class="menuItem" href="logout.php">Logout</a></li>
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

    <section class="pad-account">
        <div class="other-account-display">
            <p>Account Balance</p>
            <p>$<?php echo number_format($accountBalance, 2) ?></p>
        </div>
        <div class="page-info-other">
            <p>Deposit</p>
            <p>How much do you want to deposit?</p>
            <p>Double click to see conversion below</p>
        </div>
    </section>
    <section class="content section-deposit">
        <div class="tippity-tap" id="tippy-tap">
            <div class="tap">
                <label>
                    <input type="radio" name="product" class="card-input-element" value="500" id="bnb-checker" />
                    <div class="tap-tap">
                        <p>$500</p>
                    </div>
                </label>
            </div>
            <div class="tap">
                <label>
                    <input type="radio" name="product" class="card-input-element" value="1000" id="bnb-checker" />
                    <div class="tap-tap">
                        <p>$,1000</p>
                    </div>
                </label>
            </div>
            <div class="tap">
                <label>
                    <input type="radio" name="product" class="card-input-element" value="1500" id="bnb-checker" />
                    <div class="tap-tap">
                        <p>$1,500</p>
                    </div>
                </label>
            </div>
            <div class="tap">
                <label>
                    <input type="radio" name="product" class="card-input-element" value="2000" id="bnb-checker" />
                    <div class="tap-tap">
                        <p>$2,000</p>
                    </div>
                </label>
            </div>
            <div class="tap">
                <label>
                    <input type="radio" name="product" class="card-input-element" value="3000" id="bnb-checker" />
                    <div class="tap-tap">
                        <p>$3,000</p>
                    </div>
                </label>
            </div>
            <div class="tap">
                <label>
                    <input type="radio" name="product" class="card-input-element" value="5000" id="bnb-checker" />
                    <div class="tap-tap">
                        <p>$5,000</p>
                    </div>
                </label>
            </div>

        </div>
        <div class="throw-kibble">
            <p>Enter Manually</p>
            <form action="make-payment.php" method="POST">
                <input type="hidden" id='equi' name='price'>
                <input type="number" step="0.1" placeholder="Amount" class="number-input" name="depositAmount"
                    id="manual-input">
                <div class="protein-convert">
                    <div class="protein-walls">
                        <p>BTC Equivalent</p>
                    </div>
                    <p id="equivalent">0.00 BTC</p>
                </div>
        </div>
    </section>
    <section class="content digest-kibble">
        <div class="wag-wag">
            <button class="btn wag-roll" type="deposit" name="deposit">Deposit</button>
        </div>
        </form>
        <div class="woof-woof">
            <p>By Clicking on deposit, you’ll be taken to our payment processor where you’ll get instructions on how to
                make payments.</p>
        </div>
    </section>
    <?php include('./footer.php'); ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="assets/js/dash-script.js"></script>
    <script src="assets/js/input-handle.js"></script>
    <script src="assets/js/d3.js"></script>
    <script src="assets/js/error-handle.js"></script>
</body>

</html>