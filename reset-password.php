<?php
    $error = '';
    if (isset($_GET['error'])) {
        if ($_GET['error'] == "emptyinput") {
        $error = "Some fields were left empty.";
        } else if ($_GET['error'] == "passwordMismatch") {
            $error = "Passwords do not match.";
        }
    }
    $selector = $_GET['selector'];
    $validator = $_GET['validator'];
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

<body class="body-target body-sign">
    <nav class="navbar navbar-mobile navbar-desktop-create" role="navigation">
        <div class="logo-container">
        <img src="./assets/img/FTMblack.png" alt="FTM" class="alt-color-show" style="margin: 0px;" width="100%" height="40%"></img>
        </div>
        <div id="hamburger-icon" class="hamburger hamburger-signs">
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
        </div>
    </nav>
    <section class="encompass">
        <section class="content signup-area">
            <div class="signup-page-container">
                <div class="signup-logo-main">
                <img src="./assets/img/FTMblack.png" alt="FTM" class="alt-color-show" style="margin: 0px;" width="100%" height="40%"></img>
                </div>
                <h1>Reset<br>Password</h1>
            </div>
            <div class="signup-page-container-main"></div>
        </section>
        <section class="content sigup-section">
        <?php     if (empty($selector) || empty($validator)) {header("Location: something-wrong.php");exit();?>
            <?php
                    } else {
                        if (ctype_xdigit($selector) !== false && ctype_xdigit($validator) !== false) {
                            ?>
            
            <form action="includes/create-new.php" class="form-main reset-token-form" method="POST">
                <input type="hidden" name="selector" value="<?php echo $selector; ?>">
                <input type="hidden" name="validator" value="<?php echo $validator; ?>">
                <div class="div-input">
                    <p>New Password</p>
                    <input type="Password" name="newPassword">
                </div>
                <div class="div-input">
                    <p>Retype Password</p>
                    <input type="Password" name="confNewPassword">
                </div>
                <div class="button-signup reset-btn">
                    <button class="btn btn-alt create-btn" type="submit" name="new-password-submit">Reset Password</button>
                </div>
            </form>
            <?php
            }
        }
    ?> 
        </section>
    </section>
    <?php include('./footer.php');?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="assets/js/script.js"></script>
</body>

</html>