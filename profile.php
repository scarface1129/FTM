<?php

session_start();

include_once 'includes/functions.php';
include_once 'includes/dbconnection.php';

$email = $_SESSION['userid'];
$userExists = userExists($conn, $email);
$accountBalance = $userExists['AccountBalance'];
$walletAddress = $userExists['WalletAddress'];
$FirstName = $userExists['FirstName'];
$MiddleName = $userExists['MiddleName'];
$LastName = $userExists['LastName'];
$Country = $userExists['CountryOfResidence'];
$State = $userExists['StateLiving'];
$City = $userExists['City'];
$PostalCode = $userExists['PostalCode'];
$referral_code = $userExists['referral_code'];
$uri = $_SERVER['REQUEST_URI']; 
$protocol = ((!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off') || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
$url = $protocol . $_SERVER['HTTP_HOST'] ;
$query = $_SERVER['QUERY_STRING'];
$ref = $url.'/financial-trade-management/index.php?ref=';

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
</head>

<body class="body-target body-sign deposit-others">
    <section class="nav-section">
    <div class='handle error-handle' id="catch-handle">
                    <div class='inner-handle hideaway-blue'>
                        <p id="catch-message">This is your profile page.</p>
                    </div>
                </div>
                <nav class="navbar navbar-mobile nav-txt-colored navbar-pushed" role="navigation">
        <div class="logo-container">
        <img src="./assets/img/FTMblack.png" alt="FTM" class="alt-color-show" style="margin: 0px;cursor: pointer;" width="40%" height="40%"  onclick="location.href='index.php'" ></img>
                <img src="./assets/img/FTMletterblack.png" alt="FTM" class="alt-color-show" style="margin-left: -32px;cursor: pointer;" width="40%" height="40%"  onclick="location.href='index.php'" ></img>
                
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
    <div>
                        <input type="text" id="inputArea" value="<?=$ref.$referral_code ?>" class="hide-input">
                        <div class="">
                            <button class="btn" id="copy-link-aff">Copy Referral address</button>
                        </div>
                        </div>
    </section>
    <section class="desktop-format">
        <section class="desktop-format-inner">
            <section class="pad-account pad-pay">
                <div class="page-info-other transaction-info-other">
                    <p>Profile</p>
                </div>
            </section>
            <section class="content profile-display">
                <form action="#" class="form-main">
                    <div class="div-input">
                        <p>First Name</p>
                        <input type="text" name="" disabled class="wallet-input-display"
                            value="<?php echo $FirstName;?>">
                    </div>
                    <div class="div-input">
                        <p>Middle Name</p>
                        <input type="text" name="" disabled class="wallet-input-display"
                            value="<?php echo $MiddleName;?>">
                    </div>
                    <div class="div-input">
                        <p>Last Name</p>
                        <input type="text" name="" disabled class="wallet-input-display"
                            value="<?php echo $LastName;?>">
                    </div>
                    <div class="div-input">
                        <p>Country Of Residence</p>
                        <input type="text" name="" disabled class="wallet-input-display" value="<?php echo $Country;?>">
                    </div>
                    <div class="div-input">
                        <p>State</p>
                        <input type="text" name="" disabled class="wallet-input-display" value="<?php echo $State;?>">
                    </div>
                    <div class="div-input">
                        <p>City</p>
                        <input type="text" name="" disabled class="wallet-input-display" value="<?php echo $City;?>">
                    </div>
                    <div class="div-input">
                        <p>Postal Code</p>
                        <input type="number" name="" disabled class="wallet-input-display"
                            value="<?php echo $PostalCode;?>">
                    </div>
                    <div class="div-input">
                        <p>Email</p>
                        <input type="Email" name="" disabled class="wallet-input-display" value="<?php echo $email;?>">
                    </div>
                    <div class="div-input">
                        <p>Wallet Address</p>
                        <div>
                            <input type="text" class="wallet-input-display" value="<?php echo $walletAddress;?>"
                                id="wallet-area" disabled>
                            <a href="change-address.php" id="update-address">
                                <div class="edit-icon">
                                    <i class="fas fa-edit" id="icon-state"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="div-input">
                        <p>Password</p>
                        <div>
                            <input type="Password" name="" class="wallet-input-display" value="password" disabled>
                            <a href="change-password.php">
                                <div class="edit-icon">
                                    <i class="fas fa-edit"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                   
                    <div class="wag-wag wag-wag-again wag-showoff">
                        <button class="btn wag-roll" type="submit" name="update">Update Info</button>
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
    <script src="assets/js/update-address.js"></script>
    <script src="assets/js/error-handle.js"></script>
</body>

</html>