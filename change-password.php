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
    <section class="desktop-format">
        <section class="desktop-format-inner">
            <section class="pad-account pad-confirm pad-withdraw pad-withdraw-confirm">
                <div class="logo-emb">
                    <div>
                    <img src="./assets/img/FTMblack.png" alt="FTM" class="alt-color-show" style="margin: 0px;" width="100%" height="40%"></img>
                    </div>
                </div>
                <div class="page-info-other">
                    <p>Change Password</p>
                </div>
            </section>
            <section class="content section-deposit section-withdraw section-withdraw-confirm section-change-password">
                <form action="includes/change-password.php" method="POST">
                    <div class="throw-kibble">
                        <input type="password" placeholder="Old Password" class="number-input" name="oldpwd"
                            id="manual-input">
                    </div>
                    <div class="throw-kibble">
                        <input type="password" placeholder="New Password" class="number-input" name="newpwd"
                            id="manual-input">
                    </div>
                    <div class="throw-kibble">
                        <input type="password" placeholder="Retype New Password" class="number-input" name="repwd"
                            id="manual-input">
                    </div>
            </section>
            <section
                class="content digest-kibble digest-kibble-again throw-up-urgh section-withdraw-confirm section-change-password-push-btn">
                <div class="wag-wag">
                    <button class="btn wag-roll" type="submit" name="change">Reset Password</button>
                </div>
            </section>
            </form>
        </section>
    </section>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="assets/js/dash-script.js"></script>
    <script src="assets/js/input-handle.js"></script>
    <script src="assets/js/d3.js"></script>
</body>

</html>