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

<body class="body-target">
    <section class="nav-section">
        <nav class="navbar navbar-mobile" role="navigation">
            <div class="logo-container abt-faq-logo-cont">
            <img src="./assets/img/FTMblack.png" alt="FTM" class="alt-color-show" style="margin: 0px;" width="40%" height="40%"></img>
                <img src="./assets/img/FTMletterblack.png" alt="FTM" class="alt-color-show" style="margin-left: -32px;" width="40%" height="40%"></img>
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
                    <li><a class="menuItem" href="signup.php">Sign Up</a></li>
                    <li><a class="menuItem" href="login.php">Login</a></li>
                </ul>
            </div>
            <div id="desktop-links">
                <ul class="desktop-menu">
                    <li><a class="menuItem" href="index.php">Home</a></li>
                    <li><a class="menuItem" href="aboutus.php">About Us</a></li>
                    <li><a class="menuItem" href="faq.php">F.A.Q</a></li>
                    <li><a class="menuItem" href="signup.php">Sign Up</a></li>
                    <li><a class="menuItem" href="login.php">Login</a></li>
                </ul>
            </div>
        </nav>
    </section>
    <section class="content page-about-banner faq-page">
        <div class="page-about-banner-main faq-banner-main">
            <p class="page-about-banner-head">F.A.Q</p>
            <p>Frequently Asked Questions</p>
        </div>
    </section>
    <section class="content tab-switch">
        <div class="tab-buttons">
            <button class="switch-btn switch-btn-1" onclick="tablc(event, 'GeneralTab');"
                id="tab_focus">General</button>
            <button class="switch-btn" onclick="tablc(event, 'InvestmentTab');" id="tab_focus">Investments</button>
            <button class="switch-btn" onclick="tablc(event, 'CompanyTab');" id="tab_focus">Company</button>
        </div>
        <div class="tabs-main">
            <div id="GeneralTab" class="tabs-link" style="display: block">
                <div class="tabs-name">General Questions</div>
                <div class="tabs-content">
                    <div class="accordion">
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">How often can I change my password</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    Users can always change their passwords when they feel that their accounts has been
                                    compromised. We do recommend they write it down if possible and make it handy and
                                    accessible.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">Can I update some wrong personal information?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    Yes! You can do change some wrong informations. Simply send an email to <a
                                        href="mailto:support@FTM.com"> support@FTM.com </a> together with the
                                    information needed to be updated.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">How to check my balance?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    Balance are always portrayed on the dashboard.
                                    <br>Note! Investments are always deducted from the wallet balance.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">Can I make deposits directly from my local bank accounts?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    As we are crypto based, with sole focus on BTC, only accepted means of transaction
                                    is Bitcoin.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">Can I have multiple accounts with FTM?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    Each user is assigned one User ID and can only have one account under FTM.
                                    
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">How long does it take for my deposits to reflect?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    Deposits are processed within 1 hour. Do ensure to send transaction ID, User ID and
                                    an image of confirmed transaction to <a
                                        href="mailto:deposit@FTM.com">deposit@FTM.com</a> if after 24 hours
                                    and it's yet to be processed.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">How long does it take for my withdrawals to be processed?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    Withdrawals are processed within 24 hour. Do ensure to send transaction ID, User ID
                                    and an image of confirmed transaction to <a
                                        href="mailto:withdrawal@FTM.com">withdrawal@FTM.com</a> if after 24
                                    hours and it's yet to be processed.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">Can I withdraw profits immediately?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    Yes! Investors can withdraw profits at any time, so long investments have matured
                                    and funds have been automatically moved to the USD Wallet.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">Is there any maximum deposit?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    No. Investors can choose to deposit any amount. There are only limits to what one
                                    can invest which are stated in each investment prospect.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="InvestmentTab" class="tabs-link" style="display: none">
                <div class="tabs-name">Investment Questions</div>
                <div class="tabs-content">
                    <div class="accordion">
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">Who can become an investor in FTM?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    Any adult and legally competent can invest in FTM. Individuals that are
                                    politically exposed are required to submit proper regulations ensuring they do not
                                    use public funds for individual investments.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">How long does it take to withdraw investments?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    Invested funds with it's returns are moved automatically to the USD Wallet upon
                                    maturity. Investors can then proceed to withdraw funds to their BTC wallet.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">What is the minimum amount I can withdraw from my investments?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    All invested funds are moved automatically to USD Wallet, upon which an investor can
                                    choose to re-invest all or part of the funds back into the system
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">Can I invest repeatedly?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    All Investors can only have 1 active investments at a time. One can choose to
                                    steadily re-invest when their investments have matured and funds moved to USD
                                    Wallet.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">How often is profit accrued?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    As investing involves a certain percentage of risk, we try to protect investors
                                    capital while securing their profits. With our experience, we have always been
                                    delivering for investors.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">Can the invested amount be refunded?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    Invested funds are moved to USD wallets upon maturity. 
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">Is there any commission on investments?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    There are no commissions charged on investments.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">Must I invest all the deposited funds in my USD Wallet?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    No! Investors can choose to invest part of their total funds.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="CompanyTab" class="tabs-link" style="display: none">
                <div class="tabs-name">About Company</div>
                <div class="tabs-content">
                    <div class="accordion">
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">What is FTM?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    FTM is an exceptional investment company that targets and profits from trading
                                    Bitcoin. We have continued to deliver excellent service to over 10,000 users
                                    and counting, helping them manage their investments with simplicity and
                                    transparency. Combined, our users invest millions of dollars every month that they
                                    would have spent.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">How long has FTM been operative?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    FTM has been active for 4 years and more. Our over four years of experience in
                                    the trading world puts us over the edge against most investment companies.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">Does FTM have a physical office?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    Yes! We are located at,<br>
                                    111 Somerset Road, #11 -21 MISG Inv Pte Ltd. Singapore, 238164.<br>
                                    Please do feel free to drop by.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">Does FTM have a partnership program for Investors?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    Not yet. But we hope to publish one soon, with proper guidance and friendly T&C.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">Who manages the funds at FTM?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    Funds are moved into single general account, whereas trading decisions are based on
                                    different advice from our veteran analysts, to increase the efficiency of individual
                                    trades.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">How does FTM generate profits for investors?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    We trade with the help of advice from our veteran analysts with focus on Bitcoin.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="accordion-txt-svg">
                                <p class="text">How long does FTM intend to stay?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div class="hidden-box">
                                <p>
                                    As cryptocurrency is here to stay, so is FTM.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="content end-box-missing">
        <div class="missing-box">
            <div>
                <p>Can't find your question?</p>
                <p>Have any more questions?</p>
            </div>
            <button class="send-btn" onclick="location.href='mailto:support@FTM.com'">
                Send Email
            </button>
        </div>
    </section>
    <?php include('./footer.php');?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="assets/js/script.js"></script>
    <script src="assets/js/navbar-home.js"></script>
</body>

</html>