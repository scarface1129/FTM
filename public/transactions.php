<?php

include_once 'includes/dbconnection.php';
include_once 'includes/functions.php';

session_start();
if (!isset($_SESSION['userid'])) {
    header("Location: logout.php");
    exit();}

$email = $_SESSION['userid'];

if($_SESSION['userid']){

$sql3 = "SELECT * FROM Transactions WHERE Email = ?";
$stmt3 = mysqli_stmt_init($conn);
if (!mysqli_stmt_prepare($stmt3, $sql3)) {
  header("location: ../dashboard.php?error=stmtfailed");
  exit();
}

mysqli_stmt_bind_param($stmt3, "s", $email);
mysqli_stmt_execute($stmt3);

$result3 = mysqli_stmt_get_result($stmt3);

if (!$row3 = mysqli_fetch_all($result3, MYSQLI_ASSOC)) {
  $row3 = false;
}

mysqli_stmt_close($stmt3);

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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.6.0/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
</head>

<body class="deposit-others">
    <section class="nav-section">
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
    <section class="desktop-format">
        <section class="desktop-format-inner">
        <?php if ($row3 !== false){?>
            <section>
                <section class="pad-account pad-pay">
                    <div class="page-info-other transaction-info-other">
                        <p>Transactions</p>
                    </div>
                </section>
                <section class="content transactions-dsp">
                <?php foreach ($row3 as $transaction){?>
                    <div>
                        <p><?php echo $transaction['transaction_date']; ?> - $<?php echo $transaction['Amount']; ?> <?php echo $transaction['transaction_type']; ?></p>
                        <p><?php echo $transaction['transaction_status']; ?></p>
                    </div>
                    <?php }?>
                </section>
            </section>
            <?php } else if ($row3 === false){?>
            <section>
                <section class="content verify-icon-others transaction-icon-other">
                    <div class="container-img deposit-container-img no-transaction-img">
                        <img src="assets/img/Nothing.png" alt="">
                    </div>
                    <h1>No Transaction yet.</h1>
                </section>
                <section class="content verify-input">
                    <div class="button-signup">
                        <button class="btn btn-alt create-btn external-dash-btn deposit-successful-btn" onclick="location.href='deposit.php'">Deposit</button>
                    </div>
                </section>
            </section>
            <?php }?>
        </section>
    </section>

    <?php include('./footer.php');?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="assets/js/other-nav.js"></script>
    <script src="assets/js/input-handle.js"></script>
    <script src="assets/js/d3.js"></script>
</body>

</html>

<?php }?>