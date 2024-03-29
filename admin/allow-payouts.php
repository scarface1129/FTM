<?php 

include_once '../includes/functions.php';
include_once '../includes/dbconnection.php';

if (isset($_GET['msg'])) {
  if ($_GET['msg'] == 'depositConfirmSuccessful') {
    $msg = 'Deposit Confirmation Successful';
  } else if ($_GET['msg'] == 'userdoesnotexist') {
    $msg = 'User does not exist.';
  } else if ($_GET['msg'] == 'userDoesNotExist') {
    $msg = 'User does not exist.';
  } else if ($_GET['msg'] == 'noLatestWithdrawal') {
    $msg = 'No latest withdrawal';
  } else if ($_GET['msg'] == 'invalidAmount') {
      $msg = 'Invalid Amount';
    } else if ($_GET['msg'] == 'withdrawalDoesNotExist') {
      $msg = 'Withdrawal does not exist';
    } else if ($_GET['msg'] == 'userDoesNotExist') {
      $msg = 'No latest withdrawal';
    } else if ($_GET['msg'] == 'withdrawalConfirmSuccessful') {
      $msg = 'Withdrawal Confirmation Successful';
    }else if ($_GET['msg'] == 'depositDoesNotExist') {
      $msg = 'Deposit does not exist.';
    }else if ($_GET['msg'] == 'AmountToFalsifyIsInvalid') {
      $msg = 'Amount to falsify is invalid';
    }else if ($_GET['msg'] == 'emptyinput') {
      $msg = 'Empty Input';
    }else if ($_GET['msg'] == 'fundusersuccessful') {
      $msg = 'User funding successful';
    }else if ($_GET['msg'] == 'payoutsuccessful') {
      $msg = 'Payout successful';
    }
} else {
  $msg = '';
}



?>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../assets/css/style.css">
  <link rel="stylesheet" href="../assets/css/queries.css">
  <script src="https://kit.fontawesome.com/a312657ba2.js" crossorigin="anonymous"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet">
  <title>Luna-bond - The world's leading investment platform.</title>
</head>

<body>
  <header>
    <nav class="topNav create-nav transparent-nav topnav-blue">
      <div class="menuFlex">

        <a href="admin.php">
          <div class="logo">
            <svg width="623" height="122" viewBox="0 0 623 122" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="logo-svg">
              <path
                d="M60.7163 121.433C94.249 121.433 121.433 94.249 121.433 60.7163C121.433 27.1836 94.249 0 60.7163 0C27.1836 0 0 27.1836 0 60.7163C0 94.249 27.1836 121.433 60.7163 121.433Z"
                fill="#2D598A" />
              <path
                d="M64.1317 86.1603C59.1226 86.1603 54.6258 85.1015 50.6413 82.984C46.6568 80.8666 43.5261 77.918 41.2493 74.1384C38.9724 70.3588 37.834 66.0783 37.834 61.2969C37.834 56.5155 38.9724 52.235 41.2493 48.4554C43.5261 44.6758 46.6568 41.7273 50.6413 39.6098C54.6258 37.4923 59.1226 36.4336 64.1317 36.4336C68.5033 36.4336 72.4423 37.2077 75.9487 38.756C79.455 40.3043 82.3694 42.5356 84.6918 45.45L76.0853 53.2368C72.9887 49.5028 69.2319 47.6358 64.8148 47.6358C62.2192 47.6358 59.9082 48.205 57.8818 49.3434C55.8554 50.4818 54.2843 52.087 53.1687 54.159C52.053 56.2309 51.4952 58.6102 51.4952 61.2969C51.4952 63.9836 52.053 66.3629 53.1687 68.4349C54.2843 70.5068 55.8554 72.112 57.8818 73.2505C59.9082 74.3889 62.2192 74.9581 64.8148 74.9581C69.2319 74.9581 72.9887 73.0911 76.0853 69.357L84.6918 77.1439C82.3694 80.0583 79.455 82.2896 75.9487 83.8379C72.4423 85.3861 68.5033 86.1603 64.1317 86.1603Z"
                fill="white" />
              <path
                d="M146.732 60.4508C146.732 56.2295 147.675 52.459 149.56 49.1393C151.487 45.7787 154.089 43.1762 157.368 41.332C160.687 39.4467 164.396 38.5041 168.495 38.5041C173.29 38.5041 177.491 39.7336 181.097 42.1926C184.704 44.6516 187.224 48.0533 188.659 52.3975H178.761C177.777 50.3483 176.384 48.8115 174.581 47.7869C172.818 46.7623 170.769 46.25 168.433 46.25C165.933 46.25 163.7 46.8443 161.732 48.0328C159.806 49.1803 158.29 50.8197 157.183 52.9508C156.118 55.0819 155.585 57.5819 155.585 60.4508C155.585 63.2786 156.118 65.7786 157.183 67.9508C158.29 70.0819 159.806 71.7417 161.732 72.9303C163.7 74.0778 165.933 74.6516 168.433 74.6516C170.769 74.6516 172.818 74.1393 174.581 73.1147C176.384 72.0491 177.777 70.4917 178.761 68.4426H188.659C187.224 72.8278 184.704 76.2499 181.097 78.7089C177.532 81.127 173.331 82.336 168.495 82.336C164.396 82.336 160.687 81.4138 157.368 79.5696C154.089 77.6843 151.487 75.0819 149.56 71.7622C147.675 68.4426 146.732 64.6721 146.732 60.4508Z"
                fill="#2D598A" />
              <path
                d="M204.616 53.1967C205.723 51.3934 207.157 49.9795 208.919 48.9549C210.723 47.9303 212.772 47.418 215.067 47.418V56.4549H212.792C210.088 56.4549 208.038 57.0901 206.645 58.3606C205.292 59.6311 204.616 61.8442 204.616 65V81.9671H196.01V47.9098H204.616V53.1967Z"
                fill="#2D598A" />
              <path
                d="M253.446 47.9098L232.36 98.0737H223.2L230.577 81.1065L216.93 47.9098H226.581L235.372 71.7008L244.286 47.9098H253.446Z"
                fill="#2D598A" />
              <path
                d="M266.692 52.8278C267.798 51.2705 269.315 49.9795 271.241 48.9549C273.208 47.8893 275.442 47.3565 277.942 47.3565C280.852 47.3565 283.475 48.0738 285.811 49.5082C288.188 50.9426 290.052 52.9918 291.405 55.6557C292.798 58.2787 293.495 61.3319 293.495 64.8155C293.495 68.2991 292.798 71.3934 291.405 74.0983C290.052 76.7622 288.188 78.8319 285.811 80.3073C283.475 81.7827 280.852 82.5204 277.942 82.5204C275.442 82.5204 273.229 82.0081 271.302 80.9835C269.417 79.9589 267.88 78.668 266.692 77.1106V98.1966H258.085V47.9098H266.692V52.8278ZM284.704 64.8155C284.704 62.7663 284.274 61.0041 283.413 59.5287C282.593 58.0123 281.487 56.8647 280.093 56.086C278.741 55.3073 277.266 54.918 275.667 54.918C274.11 54.918 272.634 55.3278 271.241 56.1475C269.889 56.9262 268.782 58.0737 267.921 59.5901C267.102 61.1065 266.692 62.8893 266.692 64.9385C266.692 66.9877 267.102 68.7704 267.921 70.2868C268.782 71.8032 269.889 72.9712 271.241 73.7909C272.634 74.5696 274.11 74.9589 275.667 74.9589C277.266 74.9589 278.741 74.5491 280.093 73.7294C281.487 72.9098 282.593 71.7417 283.413 70.2253C284.274 68.709 284.704 66.9057 284.704 64.8155Z"
                fill="#2D598A" />
              <path
                d="M309.77 54.9795V71.4549C309.77 72.6024 310.036 73.4426 310.569 73.9753C311.143 74.4671 312.085 74.713 313.397 74.713H317.393V81.9671H311.983C304.729 81.9671 301.102 78.4425 301.102 71.3934V54.9795H297.044V47.9098H301.102V39.4877H309.77V47.9098H317.393V54.9795H309.77Z"
                fill="#2D598A" />
              <path
                d="M332.189 52.8893C333.296 51.25 334.812 49.918 336.739 48.8934C338.706 47.8688 340.939 47.3565 343.439 47.3565C346.349 47.3565 348.972 48.0738 351.308 49.5082C353.685 50.9426 355.55 52.9918 356.902 55.6557C358.296 58.2787 358.993 61.3319 358.993 64.8155C358.993 68.2991 358.296 71.3934 356.902 74.0983C355.55 76.7622 353.685 78.8319 351.308 80.3073C348.972 81.7827 346.349 82.5204 343.439 82.5204C340.898 82.5204 338.665 82.0286 336.739 81.045C334.853 80.0204 333.337 78.7089 332.189 77.1106V81.9671H323.583V36.4754H332.189V52.8893ZM350.202 64.8155C350.202 62.7663 349.771 61.0041 348.911 59.5287C348.091 58.0123 346.984 56.8647 345.591 56.086C344.239 55.3073 342.763 54.918 341.165 54.918C339.607 54.918 338.132 55.3278 336.739 56.1475C335.386 56.9262 334.28 58.0737 333.419 59.5901C332.599 61.1065 332.189 62.8893 332.189 64.9385C332.189 66.9877 332.599 68.7704 333.419 70.2868C334.28 71.8032 335.386 72.9712 336.739 73.7909C338.132 74.5696 339.607 74.9589 341.165 74.9589C342.763 74.9589 344.239 74.5491 345.591 73.7294C346.984 72.9098 348.091 71.7417 348.911 70.2253C349.771 68.709 350.202 66.9057 350.202 64.8155Z"
                fill="#2D598A" />
              <path
                d="M369.612 43.8525C368.095 43.8525 366.825 43.3811 365.8 42.4385C364.816 41.4549 364.325 40.2459 364.325 38.8115C364.325 37.3771 364.816 36.1885 365.8 35.2459C366.825 34.2623 368.095 33.7705 369.612 33.7705C371.128 33.7705 372.378 34.2623 373.362 35.2459C374.386 36.1885 374.898 37.3771 374.898 38.8115C374.898 40.2459 374.386 41.4549 373.362 42.4385C372.378 43.3811 371.128 43.8525 369.612 43.8525ZM373.853 47.9098V81.9671H365.247V47.9098H373.853Z"
                fill="#2D598A" />
              <path
                d="M392.377 54.9795V71.4549C392.377 72.6024 392.643 73.4426 393.176 73.9753C393.75 74.4671 394.693 74.713 396.004 74.713H400V81.9671H394.59C387.336 81.9671 383.709 78.4425 383.709 71.3934V54.9795H379.652V47.9098H383.709V39.4877H392.377V47.9098H400V54.9795H392.377Z"
                fill="#2D598A" />
              <rect x="426.25" y="5.25" width="0.5" height="110.5" fill="#C4C4C4" stroke="#2D598A" stroke-width="0.5" />
              <path
                d="M478.428 68.94H462.62L459.708 77H454.716L467.82 40.964H473.28L486.332 77H481.34L478.428 68.94ZM477.076 65.092L470.524 46.788L463.972 65.092H477.076ZM490.275 62.648C490.275 59.736 490.864 57.188 492.043 55.004C493.222 52.7853 494.834 51.0693 496.879 49.856C498.959 48.6427 501.282 48.036 503.847 48.036C506.066 48.036 508.128 48.556 510.035 49.596C511.942 50.6013 513.398 51.936 514.403 53.6V38.52H519.187V77H514.403V71.644C513.467 73.3427 512.08 74.7467 510.243 75.856C508.406 76.9307 506.256 77.468 503.795 77.468C501.264 77.468 498.959 76.844 496.879 75.596C494.834 74.348 493.222 72.5973 492.043 70.344C490.864 68.0907 490.275 65.5253 490.275 62.648ZM514.403 62.7C514.403 60.5507 513.97 58.6787 513.103 57.084C512.236 55.4893 511.058 54.276 509.567 53.444C508.111 52.5773 506.499 52.144 504.731 52.144C502.963 52.144 501.351 52.56 499.895 53.392C498.439 54.224 497.278 55.4373 496.411 57.032C495.544 58.6267 495.111 60.4987 495.111 62.648C495.111 64.832 495.544 66.7387 496.411 68.368C497.278 69.9627 498.439 71.1933 499.895 72.06C501.351 72.892 502.963 73.308 504.731 73.308C506.499 73.308 508.111 72.892 509.567 72.06C511.058 71.1933 512.236 69.9627 513.103 68.368C513.97 66.7387 514.403 64.8493 514.403 62.7ZM561.452 47.984C563.67 47.984 565.646 48.452 567.38 49.388C569.113 50.2893 570.482 51.6587 571.488 53.496C572.493 55.3333 572.996 57.5693 572.996 60.204V77H568.316V60.88C568.316 58.0373 567.605 55.8707 566.184 54.38C564.797 52.8547 562.908 52.092 560.516 52.092C558.054 52.092 556.096 52.8893 554.64 54.484C553.184 56.044 552.456 58.3147 552.456 61.296V77H547.776V60.88C547.776 58.0373 547.065 55.8707 545.644 54.38C544.257 52.8547 542.368 52.092 539.976 52.092C537.514 52.092 535.556 52.8893 534.1 54.484C532.644 56.044 531.916 58.3147 531.916 61.296V77H527.184V48.504H531.916V52.612C532.852 51.1213 534.1 49.9773 535.66 49.18C537.254 48.3827 539.005 47.984 540.912 47.984C543.304 47.984 545.418 48.5213 547.256 49.596C549.093 50.6707 550.462 52.248 551.364 54.328C552.161 52.3173 553.478 50.7573 555.316 49.648C557.153 48.5387 559.198 47.984 561.452 47.984ZM583.202 43.876C582.301 43.876 581.538 43.564 580.914 42.94C580.29 42.316 579.978 41.5533 579.978 40.652C579.978 39.7507 580.29 38.988 580.914 38.364C581.538 37.74 582.301 37.428 583.202 37.428C584.069 37.428 584.797 37.74 585.386 38.364C586.01 38.988 586.322 39.7507 586.322 40.652C586.322 41.5533 586.01 42.316 585.386 42.94C584.797 43.564 584.069 43.876 583.202 43.876ZM585.49 48.504V77H580.758V48.504H585.49ZM607.439 47.984C610.905 47.984 613.713 49.0413 615.863 51.156C618.012 53.236 619.087 56.252 619.087 60.204V77H614.407V60.88C614.407 58.0373 613.696 55.8707 612.275 54.38C610.853 52.8547 608.912 52.092 606.451 52.092C603.955 52.092 601.961 52.872 600.471 54.432C599.015 55.992 598.287 58.2627 598.287 61.244V77H593.555V48.504H598.287V52.56C599.223 51.104 600.488 49.9773 602.083 49.18C603.712 48.3827 605.497 47.984 607.439 47.984Z"
                fill="#2D598A" />
            </svg>
          </div>
        </a>

        <div class="menu-toggle">
          <a href="#" class="tke-blue"><i class="fas fa-bars"></i></a>
        </div>
        <div class="menuDeskTop">
          <ul>
            <li><a href="admin.php" class="tke-blue">Home</a></li>
            <li><a href="show-all-users.php" class="tke-blue">Users</a></li>
            <li><a href="confirm-deposits.php" class="tke-blue">Deposits</a></li>
            <li><a href="confirm-withdrawals.php" class="tke-blue">Withdrawals</a></li>
            <li><a href="allow-payouts.php" class="tke-blue">Payouts</a></li>
            <li><a href="send-emails.php" class="tke-blue">Email</a></li>


            <form action="logout.php" class="nav-form">
              <button class="login-btn">Logout</button>
            </form>
          </ul>
        </div>
      </div>
      <div class="menu">
        <!--Mobile Dropdown Menu-->
        <ul>
          <a href="admin.php" class="tke-blue">
            <li>Home</li>
          </a>
          <a href="show-all-users.php" class="tke-blue">
            <li>Users</li>
          </a>
          <a href="confirm-deposits.php" class="tke-blue">
            <li>Deposits</li>
          </a>
          <a href="confirm-withdrawals.php" class="tke-blue">
            <li>Withdrawals</li>
          </a>
          <a href="allow-payouts.php" class="tke-blue">
            <li>Payouts</li>
          </a>
          <a href="send-emails.php" class="tke-blue">
            <li>Email</li>
          </a>
        </ul>
        <form action="logout.php" class="nav-form">
          <button class="login-btn">Logout</button>
        </form>
      </div>
    </nav>
  </header>
  <section class="compass admin-compass user-compass">
    <div class="admin-page-title">
      <h1>Allow Payouts</h1>
    </div>
    <div class="users-main">
    <?php
    if (adminGetPayoutLists($conn) === false) {
        ?>
         <div class="no-user-contain">
        <div class="no-user-icon">
        </div>
        <p>
          No investment active to payout.
        </p>
      </div>
        <?php
    } else {
        $row = adminGetPayoutLists($conn);   
    ?>
            <?php foreach($row as $users) {?>
      <a href="payout-user.php?id=<?php echo $users['userId'];?>">
                   <div class="user">
                   <div class="user-icon"></div>
                  <div class="user-details-spread">
                  <p><?php 
                      $PersonName = adminGetSpecificUser($conn, $users['userId']);
                      echo $PersonName['FirstName'] .' '. $PersonName['LastName'];
                  ?></p>
            </div>
                </div>
              </a>
              <?php } }?>


      

        </div>
      </a>

      <!-- <div class="no-user-contain">
        <div class="no-user-icon">

        </div>
        <p>
          No user yet.
        </p>
      </div> -->

    </div>

    </div>
  </section>
  <footer>
    <div class="footer-intro">
      <h1>It’s safe. It’s easy.<br>
        It’s Luna-bond.</h1>
    </div>
    <div class="footer-outro">
      <div class="footer-logo">Luna-bond</div>
      <div class="quick-links">
        <a href="admin.php">Home</a>
        <a href="aboutus.php">About Us</a>
        <a href="faq.php">F.A.Q</a>
        <a href="login.php">Login</a>
        <a href="create.php">Sign Up</a>
      </div>
    </div>
  </footer>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="../assets/js/dash-script.js"></script>
    <script src="../assets/js/error-handle.js"></script>
</body>

</html>