<?php

session_start();
  // To logout a user who is not logged in

 if (!isset($_SESSION['userid'])) {
  header("Location: logout.php");
  exit();
}

if($_SESSION['verified'] == 'Not Verified'){
  echo 'Hello there';
  header('Location: verify.php');
}


include_once 'includes/dbconnection.php';
include_once 'includes/functions.php';


$email = $_SESSION['userid'];


$stmt = $conn->prepare('SELECT * FROM Users WHERE Email=?');
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
       

        $stmt->close();


        if($row['VerificationStatus'] == 'Not Verified'){
            $_SESSION['verified'] = 'Not Verified';
            header('location: verify.php');
            }

    $stmt2 = $conn->prepare('SELECT * FROM InvestmentActive WHERE Email=?');
        $stmt2->bind_param("s", $email);
        $stmt2->execute();
        $result2 = $stmt2->get_result();
        $row2 = $result2->fetch_assoc();
        $stmt2->close();


        $sql3 = "SELECT * FROM Transactions WHERE Email = ? ORDER BY NoId DESC LIMIT 6;";
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

        
    // $stmt5 = $conn->prepare('SELECT VerificationStatus FROM Users WHERE email=?');
    // $stmt5->bind_param("s", $_SESSION['userid']);
    // $stmt5->execute();
    // $result5 = $stmt5->get_result();
    // $row5 = $result5->fetch_assoc();
    // if($row5['VerificationStatus'] == 'Not Verified'){
    // header('location: verify.php');
    // }



?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FTM - The world's leading investing platform</title>
    <script src="https://kit.fontawesome.com/a312657ba2.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="assets/css/styles.css">
    <link rel="stylesheet" href="assets/css/queries.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.6.0/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
</head>

<body class="body-target">
<section class="nav-section">
<div class='handle error-handle dash-display' id="catch-handle">
                    <div class='inner-handle hideaway-blue'>
                        <p id="catch-message">Payout Successful.</p>
                    </div>
                </div>
    <nav class="navbar navbar-mobile" role="navigation">
        <div class="logo-container logo-dash-switch">
        <img src="./assets/img/FTMblack.png" alt="FTM" class="alt-color-show" style="margin: 0px;cursor: pointer;" width="40%" height="40%"  onclick="location.href='index.php'" ></img>
                <img src="./assets/img/FTMletterblack.png" alt="FTM" class="alt-color-show" style="margin-left: -32px;cursor: pointer;" width="40%" height="40%"  onclick="location.href='index.php'" ></img>
        </div>
        <div id="hamburger-icon" class="hamburger ham-for-dash">
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
            <ul class="desktop-menu desk-dash-menu desk-scroll-dash">
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
    <section class="content account-overview">
        <p class="account-balance-txt">Account Balance</p>
        <p class="account-balance-fig">$<?php echo number_format($row['AccountBalance'], 2); ?></p>
        <p class="account-balance-update">Updated <span></span></p>
    </section>
    <section class="tabs">
        <div class="push-back-ab">
        <div id="modal-recommit" class="modal-recommit">
            <div class="close-btn-recommit" id="modal-btn-close">
            <i class="fas fa-times"></i>
            </div>
            <div class="recommit-info">
                <div class="img-box"></div>
                <div class="recommit-text-btn">
                <p>recommitment enables enough funds to be in the system. Ensuring balanced circulation of funds within the system. All investors recommit 100% of their initial investments and can choose to upgrade when recommitting. This enables us manage the investors funds effectively</p>
                <button class="btn recommit-btn-main" id="recommit-brn" onclick="location.href='recommit.php'">Recommit</button>
                </div>
            </div>
        </div>
        </div>
        <section class="tab tab-main-overview">
            <p class="section-tab-title" style="color:white;">Overview</p>
            <div class="scroll-invs overview-scroll">
                <?php if ($row2['InvestmentType'] !== "None") {?>
                <div class="box inv-active inv-active-now">
                    <div>
                        <p class="box-title box-plan-reset">Investment Active</p>
                        <p class="plan-active">$<span><?php echo number_format($row2['Amount_Funded'], 2); ?></span></p>
                        <p class="selected-plan"><?php echo $row2['InvestmentType']; ?></p>
                        <input type="hidden" id="amtFunded" value="<?php echo $row2['Amount_Funded']?>" hidden>
                    </div>
                    <div class="btn-contain-box rem-time-avail">
                        <p class="remaining-time" id="rem-time-append"></p>
                        <?php 
                        
                        if(getRecommitStatus($conn, $email) == 'FIRST'){
                        if($row2['InvestmentDuration'] <= date('Y-m-d')){
                        ?>
                                <button class="btn inv-btn-small recommit-btn" id="recommit-btn">Recommit</button>
                        <?php }}else{if($row2['InvestmentDuration'] <= date('Y-m-d')){
                        ?>
                            <button class="btn inv-btn-small recommit-btn" id="payout-btn"><span id=
                            "loader">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
</circle>
<!-- [ldio] generated by https://loading.io/ --></svg></span></button>
                        <?php }}?>
                    </div>
                </div>
                <div class="box inv-active inv-detailed">
                    <div class="inv-detailed-main">
                        <p class="box-title">Investment Active</p>
                    </div>
                    <div class="box-details">
                        <div class="ab-a">
                            <p>Earned Today</p>
                            <p>$<?php echo number_format($row2['Amount_Earned_Today'], 2); ?></p>
                            
                        </div>
                        <div class="ab-a ab-b">
                            <p>Total Earned</p>
                            <p>$<span><?php echo number_format($row2['Amount_Earned'], 2); ?></span></p>
                            <input type="hidden" id="amtEarned" value="<?php echo $row2['Amount_Earned']?>" hidden>
                        </div>
                    </div>
                </div>
                <?php } else {?>
                <div class="box inv-active">
                    <div>
                        <p class="box-title">Investment Active</p>
                        <p class="no-inv-active">No Investment<br>Active</p>
                    </div>
                    <div class="btn-contain-box">
                        <button class="btn inv-btn-small" onclick="location.href='invest.php'">Invest</button>
                    </div>
                </div>

                <div class="box inv-active inv-detailed inv-active-now-sub">
                    <div class="inv-detailed-main">
                        <p class="box-title">Investments</p>
                    </div>
                    <div class="box-details">
                        <div class="ab-a">
                            <p>Last Investment</p>
                            <p>$<?php
                            if($lastinv = getLastInvestment($conn, $email)){
                                echo number_format($lastinv['Amount'], 2);
                            }else{
                                echo '0.00';
                            }
                            ;?></p>
                        </div>
                        <div class="ab-a ab-b">
                            <p>Previous Earnings</p>
                            <p>$<?php echo number_format($row['TotalEarned'], 2);?></p>
                        </div>
                    </div>
                </div>
                <?php }?>
            </div>
        </section>
        <section class="tab tab-main-tasks">
            <p class="section-tab-title" style="color: white;">Quick Tasks</p>
            <div class="quick-tasks-dash">
                <a href="deposit.php">
                    <div class="quick-task-main">
                        <div class="quick-task-icon">
                            <i class="fas fa-dollar-sign"></i>
                        </div>
                        <p style="color: white;">Deposit</p>
                    </div>
                </a>
                <a href="invest.php">
                    <div class="quick-task-main">
                        <div class="quick-task-icon">
                            <i class="fas fa-funnel-dollar"></i>
                        </div>
                        <p style="color: white;">Invest</p>
                    </div>
                </a>
                <a href="withdraw.php">
                    <div class="quick-task-main">
                        <div class="quick-task-icon">
                            <i class="fas fa-donate"></i>
                        </div>
                        <p style="color: white;">Withdraw</p>
                    </div>
                </a>
                <a href="transactions.php">
                    <div class="quick-task-main">
                        <div class="quick-task-icon">
                            <i class="fas fa-receipt"></i>
                        </div>
                        <p style="color: white;">Transactions</p>
                    </div>
                </a>
            </div>
        </section>
        <section class="tab tabs-overview tab-main-graph">
            <input type="hidden" id="earning-transfer" value="<?php echo $row2['Amount_Earned'];?>">
            <input type="hidden" id="username" value="<?php echo $_SESSION['userid'];?>">
            <p class="price-chart" style="color: white;">Price Chart</p>
            <!-- <div class="price-chart-main"> -->
                <!-- <div id="override"class="btcwdgt-chart" bw-theme="light"></div> -->
                <!-- TradingView Widget BEGIN -->
                <div  class="tradingview-widget-container" style="width:100%;height:70%; ">
                    <div id="tradingview_ce89a"style="width:100%;height:100%; "></div>
                    <!-- <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BTCUSDT/?exchange=BINANCE" rel="noopener" target="_blank"><span class="blue-text">BTCUSDT Chart</span></a> by TradingView</div> -->
                    <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
                    <script type="text/javascript">
                    new TradingView.widget(
                    {
                    "autosize": true,
                    "symbol": "BINANCE:BTCUSDT",
                    "interval": "D",
                    "timezone": "Etc/UTC",
                    "theme": "dark",
                    "style": "1",
                    "locale": "en",
                    "toolbar_bg": "#f1f3f6",
                    "enable_publishing": false,
                    "allow_symbol_change": true,
                    "calendar": true,
                    "container_id": "tradingview_ce89a"
                    }
                    );
                    </script>
                </div>
<!-- TradingView Widget END -->
            <!-- </div> -->
        </section>
        <section class="tab tab-main-stats">
            <p class="section-tab-title" style="color: white;">Statistics</p>
            <div class="scroll-invs dp-wt-scroll">
                <div class="box inv-active dp-wt-det" id="deposit-chart">
                    <div>
                        <p class="box-title" style="color: white;">Deposit</p>
                    </div>
                    <div class="box-graph">
                        <canvas id="myChart" width="400" height="400"></canvas>
                    </div>
                    <div class="box-other-details">
                        <div class="box-details-main deposit-details-color-1">
                            <p style="color: white;">Total Deposited</p>
                            <p style="color: white;">$<?php echo number_format($row['TotalDeposits'], 2); ?></p>
                            <input type="hidden" value="<?php echo $row['TotalDeposits']; ?>" id="totaldeposited">
                        </div>
                        <div class="box-details-main deposit-details-color-2">
                            <p style="color: white;">Total Earned</p>
                            <p style="color: white;">$<?php echo number_format($row['TotalEarned'], 2); ?></p>
                            <input type="hidden" value="<?php echo $row['TotalEarned']; ?>" id="totalearned">
                        </div>
                    </div>
                </div>
                <div class="box inv-active dp-wt-det" id="withdraw-chart">
                    <div>
                        <p class="box-title" style="color: white;">Withdrawals</p>
                    </div>
                    <div class="box-graph">
                        <canvas id="withdrawalChart" width="400" height="400"></canvas>
                    </div>
                    <div class="box-other-details">
                        <div class="box-details-main withdrawls-details-color-1">
                            <p style="color: white;">Total Withdrawn</p>
                            <p style="color: white;">$<?php echo number_format($row['TotalWithdrawals'], 2); ?></p>
                            <input type="hidden" value="<?php echo $row['TotalWithdrawals']; ?>" id="totalwithdrawn">
                        </div>
                        <div class="box-details-main withdrawls-details-color-2">
                            <p style="color: white;">Total Deposited</p>
                            <p style="color: white;">$<?php echo number_format($row['TotalDeposits'], 2); ?></p>
                            <input type="hidden" value="<?php echo $row['TotalDeposits']; ?>" id="totaldeposited">
                        </div>
                    </div>
                </div>
                <div class="box inv-active dp-wt-det" id="earnings-chart">
                    <div>
                        <p class="box-title" style="color: white;">Earnings</p>
                    </div>
                    <div class="box-graph">
                        <canvas id="earningsChart" width="400" height="400"></canvas>
                    </div>
                    <div class="box-other-details">
                        <div class="box-details-main earnings-color-1">
                            <p style="color: white;">Total Earned</p>
                            <p style="color: white;">$<?php echo number_format($row['TotalEarned'], 2); ?></p>
                            <input type="hidden" value="<?php echo $row['TotalEarned']; ?>" id="totalearned">
                        </div>
                        <div class="box-details-main earnings-color-2">
                            <p style="color: white;">Total Withdrawn</p>
                            <p style="color: white;">$<?php echo number_format($row['TotalWithdrawals'], 2); ?></p>
                            <input type="hidden" value="<?php echo $row['TotalDeposits']; ?>" id="totalwithdrawn">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <?php include('./footer.php');?>
    <script>
        <?php if($row2['InvestmentDuration']){
            ?>
            TargetDate = "<?php echo $row2['InvestmentDuration']?>";
BackColor = "palegreen";
ForeColor = "navy";
CountActive = true;
CountStepper = -1;
LeadingZero = true;
DisplayFormat = "%%D%%:%%H%%:%%M%%:%%S%%";
FinishMessage = "Contract Expired";

function calcage(secs, num1, num2) {
  s = ((Math.floor(secs/num1))%num2).toString();
  if (LeadingZero && s.length < 2)
    s = "0" + s;
  return "<b>" + s + "</b>";
}

function CountBack(secs) {
  if (secs < 0) {
    document.getElementById("rem-time-append").innerHTML = FinishMessage;
    return;
  }
  DisplayStr = DisplayFormat.replace(/%%D%%/g, calcage(secs,86400,100000));
  DisplayStr = DisplayStr.replace(/%%H%%/g, calcage(secs,3600,24));
  DisplayStr = DisplayStr.replace(/%%M%%/g, calcage(secs,60,60));
  DisplayStr = DisplayStr.replace(/%%S%%/g, calcage(secs,1,60));

  document.getElementById("rem-time-append").innerHTML = "Time Left: " + DisplayStr;
  if (CountActive)
    setTimeout("CountBack(" + (secs+CountStepper) + ")", SetTimeOutPeriod);
}

function putspan(backcolor, forecolor) {
 document.write("<span id='cntdwn' style='background-color:" + backcolor + 
                "; color:" + forecolor + "'></span>");
}

if (typeof(BackColor)=="undefined")
  BackColor = "white";
if (typeof(ForeColor)=="undefined")
  ForeColor= "black";
if (typeof(TargetDate)=="undefined")
  TargetDate = "12/31/2020 5:00 AM";
if (typeof(DisplayFormat)=="undefined")
  DisplayFormat = "%%D%% Days, %%H%% Hours, %%M%% Minutes, %%S%% Seconds.";
if (typeof(CountActive)=="undefined")
  CountActive = true;
if (typeof(FinishMessage)=="undefined")
  FinishMessage = "";
if (typeof(CountStepper)!="number")
  CountStepper = -1;
if (typeof(LeadingZero)=="undefined")
  LeadingZero = true;


CountStepper = Math.ceil(CountStepper);
if (CountStepper == 0)
  CountActive = false;
var SetTimeOutPeriod = (Math.abs(CountStepper)-1)*1000 + 990;
putspan(BackColor, ForeColor);
var dthen = new Date(TargetDate);
var dnow = new Date();
if(CountStepper>0)
  ddiff = new Date(dnow-dthen);
else
  ddiff = new Date(dthen-dnow);
gsecs = Math.floor(ddiff.valueOf()/1000);
CountBack(gsecs);
<?php }?>
    </script>
    <script>
  (function(b,i,t,C,O,I,N) {
    window.addEventListener('load',function() {
      if(b.getElementById(C))return;
      I=b.createElement(i),N=b.getElementsByTagName(i)[0];
      I.src=t;I.id=C;N.parentNode.insertBefore(I, N);
    },false)
  })(document,'script','https://widgets.bitcoin.com/widget.js','btcwdgt');
</script>
<!-- <script>
setInterval(function () {
    alert('scarface');
    dailyInvestment($conn);
    }, 5000)
</script> -->

    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></> -->
    <script src="assets/js/jquery-min-fallback.js"></script>
    <script src="assets/js/recommit.js"></script>
    <script src="assets/js/payout.js"></script>
    <!-- <script src="assets/js/other-nav.js"></script> -->
    <script src="assets/js/d3.js"></script>
    <script src="assets/js/dash-script.js"></script>
    <script src="assets/js/update.js"></script>
</body>

</html>