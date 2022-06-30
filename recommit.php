<?php

session_start();

include_once 'includes/functions.php';
include_once 'includes/dbconnection.php';

$email = $_SESSION['userid'];
$userExists = userExists($conn, $email);
$accountBalance = $userExists['AccountBalance'];
$userNoId = $userExists['userId'];
$previous = getInvestment($conn,$userNoId);
$previous = $previous['Amount_Earned'] + $previous['Amount_Funded'];
$newBalance = $accountBalance + $previous;

if (isset($_GET['error']))  {
    $error = $_GET['error'];
    if ($error == 'emptyinput'){
      $error = "Provide the amount you wish to invest";
    } else if ($error == 'invalidAmount') {
      $error = "Please enter a valid amount to invest";
    } else if ($error == 'insufficientfunds') {
      $error = "You do not have this much in your account to invest";
    } else if($error == 'amountlessthansupportedforregularplan'){
        $error = "Please enter a value between 0.05 to 0.5";
    }else if($error == 'amountlessthansupportedforbusinessplan'){
        $error = "Please enter a value between 0.5 to 1.9";
    }else if($error == 'amountlessthansupportedforexecutiveplan'){
        $error = "Please enter a value between 0.5 to 1.9";
    }else if($error == 'amountlessthansupportedforapexplan'){
        $error = "Please enter a value between 0.5 to 1.9";
    }
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

<body class="deposit-others">
<section class="nav-section">
<?php if(isset($_GET['error'])){?>
        <div class='handle error-handle other-page-handle'>
            <div class='inner-handle'>
                <p><?php echo $error ?></p>
            </div>
        </div>
        <?php ;}?>
        <nav class="navbar navbar-mobile nav-txt-colored" role="navigation">
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
            <p>$<?php echo number_format($accountBalance, 2); ?><span class="recommit-bln"> +$<?php echo number_format($previous, 2); ?></span><span class="recommit-bln-txt">Pending</span></p>
        </div>
        <div class="page-info-other invest-page-info-other">
            <p>Recommit</p>
        </div>
    </section>
    <section class="desktop-switch-invest">
        <section class="invest-main">
            <form action="includes/invest.php" method="POST">
                <div class="invest-scroll">
                    <div class="invest-item">
                        <label>
                            <input type="radio" class="card-input-element-2" value="Starter" name="plan">
                            <div class="invest-plan">
                                <p>Starter</p>
                                <div>
                                    <p>$100<span>min</span></p>
                                    <p>$300<span>max</span></p>
                                </div>
                                <div>
                                    <p>Not Renewable</p>
                                </div>
                                <div>
                                    <p>240 hours Contract</p>
                                    <p>2% Daily ROI</p>
                                    <p>3% Referral commission</p>
                                    <p></p>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class="invest-item">
                        <label>
                            <input type="radio" class="card-input-element-2" value="Regular" name="plan">
                            <div class="invest-plan">
                                <p>Regular</p>
                                <div>
                                    <p>$500<span>min</span></p>
                                    <p>$4999<span>max</span></p>
                                </div>
                                <div>
                                    <p>Renewable</p>
                                </div>
                                <div>
                                    <p>120 hours Contract</p>
                                    <p>4% Daily ROI</p>
                                    <p>7% Referral commission</p>
                                    <p></p>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class="invest-item">
                        <label>
                            <input type="radio" class="card-input-element-2" value="Business" name="plan">
                            <div class="invest-plan">
                                <p>Business</p>
                                <div>
                                    <p>$5000<span>min</span></p>
                                    <p>$14999<span>max</span></p>
                                </div>
                                <div>
                                    <p>Renewable</p>
                                </div>
                                <div>
                                    <p>120 hours Contract</p>
                                    <p>7% Daily ROI</p>
                                    <p>10% Referral commission</p>
                                    <p></p>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class="invest-item">
                        <label>
                            <input type="radio" class="card-input-element-2" value="Executive" name="plan">
                            <div class="invest-plan">
                                <p>Executive</p>
                                <div>
                                    <p>$15000<span>min</span></p>
                                    <p>$24999<span>max</span></p>
                                </div>
                                <div>
                                    <p>Renewable</p>
                                </div>
                                <div>
                                    <p>240 hours Contract</p>
                                    <p>10% Daily ROI</p>
                                    <p>15% Referral commission</p>
                                    <p></p>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class="invest-item">
                        <label>
                            <input type="radio" class="card-input-element-2" value="Apex" name="plan">
                            <div class="invest-plan">
                                <p>Apex</p>
                                <div>
                                    <p>$25000<span>min</span></p>
                                    
                                </div>
                                <div>
                                    <p>Renewable</p>
                                </div>
                                <div>
                                    <p>240 hours Contract</p>
                                    <p>15% Daily ROI</p>
                                    <p>25% Referral commission</p>
                                    <p></p>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
        </section>
        <section class="invest-other">
            <section class="content section-deposit section-invest">
                <div class="throw-kibble">
                    <p>How much to invest?</p>
                    <input type="number" step="0.01" placeholder="Amount in $" class="number-input" name="amount"
                        id="invest-input">
                    <div class="protein-convert">
                        <div class="protein-walls">
                            <p>BTC Equivalent</p>
                        </div>
                        <p id="equivalent">0.00</p>
                    </div>
                    <div class="div-tick-box inv-tick-box">
                        <input type="checkbox" class="checkbox" required>
                        <p>Investing in crypto product is risky, do you agree?</p>
                    </div>
                </div>
            </section>
            <section class="content digest-kibble digest-kibble-again">
                <div class="wag-wag">
                    <button class="btn wag-roll" type="submit" name="invest">Invest</button>
                </div>
            </section>
            </form>
        </section>
    </section>
    <?php include('./footer.php');?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="assets/js/other-nav.js"></script>
    <script>
        let global = 0;
        async function getCoinPrice() {
        let response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=true');
        let data = await response.json();
        data = data['bitcoin']['usd'];
        return data

}
        
        let input = document.getElementById('invest-input');
        let equivalent = document.getElementById('equivalent');

        input.addEventListener('input', function() {
            const price = () => {
                    getCoinPrice().then((a) => {
                        const send = (d)=>{
                            return global=d;
                        }
                        send(a)
                    return a;
                    });
                };    
                price();
            window.usdVal = input.value / global;
            // window.usdVal = input.value / ;
            equivalent.innerHTML = usdVal.toLocaleString(undefined, { minimumFractionDigits: 2});
        });

    </script>
    <script src="assets/js/error-handle.js"></script>
    <script src="assets/js/d3.js"></script>
</body>

</html>