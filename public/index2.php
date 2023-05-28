<?php 

session_start();
$uri = $_SERVER['REQUEST_URI']; 
$protocol = ((!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off') || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
$url = $protocol . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
$query = $_SERVER['QUERY_STRING'];
if(isset( $_GET['ref'] )) {
    $_SESSION['referral-code'] = $_GET["ref"];
    
}



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
</head>

<body>
    <section class="nav-section">
        <nav class="navbar navbar-mobile" role="navigation">
            <div class="logo-container">
               
                
                <img src="./assets/img/FTMblack.png" alt="FTM" class="alt-color-show" style="margin: 0px;cursor: pointer;" width="40%" height="40%"  onclick="location.href='index.php'" ></img>
                <img src="./assets/img/FTMletterblack.png" alt="FTM" class="alt-color-show" style="margin-left: -32px;cursor: pointer;" width="40%" height="40%"  onclick="location.href='index.php'" ></img>
                
            </div>
            <div id="hamburger-icon" class="hamburger desk-dash-scroll">
                <i id="icon-switch" class="fas fa-bars menuIcon"></i>
                <i id="icon-switch" class="fas fa-times closeIcon"></i>
            </div>
            <div id="hamburger-show-mobile">
                <ul class="menu desktop-menu">
                    <li><a class="menuItem" href="index.php">Home</a></li>
                    <li><a class="menuItem" href="aboutus.php">About Us</a></li>
                    <li><a class="menuItem" href="faq.php">F.A.Q</a></li>
                    <?php if(!isset($_SESSION['userid'])){
                        ?>
                    <li><a class="menuItem" href="signup.php">Sign Up</a></li>
                    <li><a class="menuItem" href="login.php">Login</a></li>
                    <?php } else{?>
                        <li><a class="menuItem" href="dashboard.php">Dashboard</a></li>
                        <?php }?>
                </ul>
            </div>
            <div id="desktop-links">
                <ul class="desktop-menu">
                    <li><a class="menuItem" href="index.php">Home</a></li>
                    <li><a class="menuItem" href="aboutus.php">About Us</a></li>
                    <li><a class="menuItem" href="faq.php">F.A.Q</a></li>
                    <?php if(!isset($_SESSION['userid'])){
                        ?>
                    <li><a class="menuItem" href="signup.php">Sign Up</a></li>
                    <li><a class="menuItem" href="login.php">Login</a></li>
                    <?php } else{?>
                        <button class="btn logout-btn" onclick="window.location = 'dashboard.php'">Dashboard</button>
                        <?php }?>
                </ul>
            </div>
        </nav>
    </section>
    <section class="divide">
        <section class="content glance-intro">
            <div class="divider"></div>
        </section>
        <section class="talk-glance">
            <h1 class="headline" style="margin-top: 100px;">Professionally managed finance growth</h1>
            <p class="headline">Financial Planning, Investment Planning & Wealth Management firm focused on tailoring strategies to meet our clients' individual goals.</p>
                <?php if(!isset($_SESSION['userid'])){
                        ?>
            <button class="btn btn-alt" onclick="location.href='signup.php'">Create Account</button>
                    <?php } else{?>
                        <button class="btn btn-alt" onclick="location.href='dashboard.php'">Dashboard</button>
                        <?php }?>
        </section>
    </section>
    <section class="content luna-explain luna-explain-switch">
        <div class="content luna-explain-intro luna-explain-intro-grid js-scroll slide-left">
            <h1>FTM-What?</h1>
            <p>Everyone is asking questions: What is FTM? or who is FTM?</p>
        </div>
        <div class="tweet-card js-scroll fade-in-bottom">
          
            <img src="./assets/img/tweet-cards-grouped.png" alt="tweet-cards"  width="70%" height="100%"/>
        </div>
        <div class="tweet-card-desktop js-scroll fade-in-bottom">
        <img src="./assets/img/tweet-cards-grouped.png" alt="tweet-cards"  width="70%" height="100%"/>

        </div>
        <div class="luna-explain-card js-scroll fade-in-bottom">
            <div class="luna-explain-main">
                <p class="luna-explain-main-title">So here we go: </p>
                <p class="luna-explain-main-content"> FTM is an exceptional investment company that targets and
                    profits from trading Bitcoin. Bitcoin volatility goes third in hand with the most
                    rated
                    crypto Bitcoin, which makes profiting from BTC simple and same time difficult in regards to its
                    volatility as trading involves profit and loss... <a class="link-underline" href="aboutus.php">Keep
                        Reading</a></p>
                <div class="luna-explain-icon">
                <img src="./assets/img/FTMletterblack.png" alt="FTM" class="alt-color-show"  width="7%" height="7%"></img>
                </div>
            </div>
        </div>
    </section>
    <section class="content luna-explain luna-explain-why">
        <div class="content luna-explain-intro luna-trust-intro js-scroll slide-left">
            <h1>Ok, so why trust you? </h1>
            <p>Lots of cryptocurrency investment platforms out there so time to get the wheat out of the chaff.</p>
        </div>
        <div class="trust-divs js-scroll fade-in-bottom">
            <div class="trust-div trust-1 js-scroll slide-left">
                <div class="trust-icon"><i class="fas fa-shield-alt"></i></div>
                <p>Secured Funds</p>
                <p>By using cutting edge technology, we protect your profits.</p>
            </div>
            <div class="trust-div trust-2 js-scroll slide-left">
                <div class="trust-icon"><i class="fas fa-suitcase"></i></div>
                <p>Diversified Portfolio</p>
                <p>We don't just trade cryptocurrencies. We reinvest your funds into the stock and forex markets to
                    maximize our profits.</p>
            </div>
            <div class="trust-div trust-3 js-scroll slide-left">
                <div class="trust-icon"><i class="fas fa-suitcase"></i></div>
                <p>Fast Payouts</p>
                <p>All investments are paid out as soon as they reach their expiry. Your funds are fully yours.</p>
            </div>
        </div>
    </section>
    <section class="content bch-exposure js-scroll slide-left">
        <div class="bch-hang js-scroll slide-right">
           <img src="assets/img/btc.png" alt='BTC LOGO'>
        </div>
        <div class="bch-exposure-icon bch-exposure-icon-margin">
            <h3>HOW OUR REFERRAL SYSTEM WORKS</h3>
        </div>
        <p class="luna-explain-main-content ">Our Referral system works differently. When a user refers someone using their referral codes, the system takes note of that, and the bonus will be rewarded some persentage of the first deposit made by who they referred only on certain reasons. </p>
        
            <p class='luna-explain-main-content'>The user who referred must be on an active investment, because the bonus is dependent on the active investment</p>
           
    </section>
    <section class="luna-plans js-scroll fade-in-bottom">
        <div class="content luna-explain-intro luna-trust-intro luna-desktop-intro-center js-scroll fade-in-bottom">
            <h1>Start Building Passive Income</h1>
            <p>Our Over four years of experience in the trading world puts us over the edge against most investment
                companies.</p>
        </div>
        <div class="scrolling-box">
            <a href="invest.php">
                <div class="luna-plan js-scroll fade-in-bottom">
                    <p class="luna-plan-type">Starter</p>
                    <div class="luna-plan-price-box">
                        <div class="luna-plan-price-min-div">
                            <p class="luna-plan-price-lvl">$100</p>
                            <p class="luna-plan-price-lvl-txt">Min</p>
                        </div>
                        <div class="luna-plan-price-max-div">
                            <p class="luna-plan-price-lvl">$300</p>
                            <p class="luna-plan-price-lvl-txt">Max</p>
                        </div>
                        <div class="luna-plan-contract">
                            <p class="contract-details">240 Hours Contract</p>
                            <p class="contract-details">2% Daily ROI</p>
                            <p class="contract-details">3% Referral commission</p>
                        </div>
                        <div class="external-link">
                            <i class="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                </div>
            </a>
          <a href="invest.php">
                <div class="luna-plan js-scroll fade-in-bottom">
                    <p class="luna-plan-type">Regular</p>
                    <div class="luna-plan-price-box">
                        <div class="luna-plan-price-min-div">
                            <p class="luna-plan-price-lvl">$500</p>
                            <p class="luna-plan-price-lvl-txt">Min</p>
                        </div>
                        <div class="luna-plan-price-max-div">
                            <p class="luna-plan-price-lvl">$4999</p>
                            <p class="luna-plan-price-lvl-txt">Max</p>
                        </div>
                        <div class="luna-plan-contract">
                            <p class="contract-details">120 Hours Contract</p>
                            <p class="contract-details">4% Daily ROI</p>
                            <p class="contract-details">7% Referral commission</p>
                        </div>
                        <div class="external-link">
                            <i class="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                </div>
            </a>
          <a href="invest.php">
                <div class="luna-plan js-scroll fade-in-bottom">
                    <p class="luna-plan-type">Business</p>
                    <div class="luna-plan-price-box">
                        <div class="luna-plan-price-min-div">
                            <p class="luna-plan-price-lvl">$5000</p>
                            <p class="luna-plan-price-lvl-txt">Min</p>
                        </div>
                        <div class="luna-plan-price-max-div">
                            <p class="luna-plan-price-lvl">$14999</p>
                            <p class="luna-plan-price-lvl-txt">Max</p>
                        </div>
                        <div class="luna-plan-contract">
                            <p class="contract-details">120 Hours Contract</p>
                            <p class="contract-details">7% Daily ROI</p>
                            <p class="contract-details">10% Referral commission</p>
                        </div>
                        <div class="external-link">
                            <i class="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                </div>
            </a>
          <a href="invest.php">
                <div class="luna-plan js-scroll fade-in-bottom">
                    <p class="luna-plan-type">Executive</p>
                    <div class="luna-plan-price-box">
                        <div class="luna-plan-price-min-div">
                            <p class="luna-plan-price-lvl">$15000</p>
                            <p class="luna-plan-price-lvl-txt">Min</p>
                        </div>
                        <div class="luna-plan-price-max-div">
                            <p class="luna-plan-price-lvl">$24999</p>
                            <p class="luna-plan-price-lvl-txt">Max</p>
                        </div>
                        <div class="luna-plan-contract">
                            <p class="contract-details">240 Hours Contract</p>
                            <p class="contract-details">10% Daily ROI</p>
                            <p class="contract-details">15% Referral commission</p>
                        </div>
                        <div class="external-link">
                            <i class="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                </div>
            </a>
          <a href="invest.php">
                <div class="luna-plan js-scroll fade-in-bottom">
                    <p class="luna-plan-type">Apex</p>
                    <div class="luna-plan-price-box">
                        <div class="luna-plan-price-min-div">
                            <p class="luna-plan-price-lvl">$25000</p>
                            <p class="luna-plan-price-lvl-txt">Min</p>
                        </div>
                        
                        <div class="luna-plan-contract">
                            <p class="contract-details">240 Hours Contract</p>
                            <p class="contract-details">15% Daily ROI</p>
                            <p class="contract-details">25% Referral commission</p>
                        </div>
                        <div class="external-link">
                            <i class="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                </div>
            </a>
          

        </div>
    </section>
    <section class="content luna-coming-soon">
        <div class="luna-coming-soon-main-view">
            <div class="img-backdrop"></div>
            <img src="assets/img/mobile-view.png" alt="Mobile View" class="js-scroll fade-in-bottom">
        </div>
        <div class="luna-coming-details js-scroll slide-left">
            <p class="luna-coming-head">Coming Soon:<br>
                The FTM<br>
                Mobile App.</p>
            <p class="luna-explain-main-content luna-coming-detailed">We’re working to give you a more simplified
                experience through our mobile app. To enable you understand current market conditions with the latest
                economic news updates, financial analysis and promotions. Also gives a direct access to your FTM
                profile with much ease.</p>
        </div>
    </section>
    <section class="luna-disclosure">
        <div class="content luna-explain-intro luna-trust-intro js-scroll slide-left">
            <h1>Risk Disclosure</h1>
            <p>Read an investment prospectus and speak to an advisor before investing. Investing is risky and returns
                value may change (not drastically). Investors may experience gain or loss.</p>
        </div>
    </section>
    <?php include('./footer.php');?>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script type="text/javascript">
        window.$crisp = [];
        window.CRISP_WEBSITE_ID = "10ef1f16-3a72-4366-92af-2e714baf1b15";
        (function () {
            d = document;
            s = d.createElement("script");
            s.src = "https://client.crisp.chat/l.js";
            s.async = 1;
            d.getElementsByTagName("head")[0].appendChild(s);
        })();
    </script>
    <script>



    </script>
    <script src="assets/js/jquery-min-fallback.js"></script>
    <script src="https://unpkg.com/scrollreveal"></script>
    <script src="assets/js/home.js"></script>
    <script src="assets/js/scroll.js"></script>
</body>

</html>