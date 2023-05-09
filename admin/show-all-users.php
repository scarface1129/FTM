<?php
    session_start();
    if (!isset($_SESSION['admin'])) {
        header("Location: ../logout.php");
        exit();
    }

    include_once("../includes/dbconnection.php");
    include_once("../includes/functions.php");

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
  <title>FTM - The world's leading investing platform</title>
  <script src="https://kit.fontawesome.com/a312657ba2.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="../assets/css/styles.css">
  <link rel="stylesheet" href="assets/style.css">
  <link rel="stylesheet" href="assets/query.css">
  <link rel="stylesheet" href="../assets/css/queries.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.6.0/chart.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
  <style>
    .table-responsive td,
.table-responsive th {
    padding: 10px 15px;
    border: 1px solid var(--border-color);
}

.table-responsive tr:nth-child(even) {
    background: #f5f5f5;
}

.table-responsive th {
    background: rgb(0 0 0 / 70%);
    color: #fff;
}

table td i {
    padding-right: 10px;
}

.table-responsive table {
    margin: auto;
    max-width: 900px;
    width: 100%;
}
    /* .table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media (max-width:575.98px){.table-responsive-sm{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:767.98px){.table-responsive-md{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:991.98px){.table-responsive-lg{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1199.98px){.table-responsive-xl{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1399.98px){.table-responsive-xxl{overflow-x:auto;-webkit-overflow-scrolling:touch}} */
  </style>
</head>

<body>
  <section class="nav-section">
  <nav class="navbar navbar-mobile nav-txt-colored" role="navigation">
            <div class="logo-container">
                <img src="../assets/img/FTMblack.png" alt="FTM" class="alt-color-show" style="margin: 0px;cursor: pointer;" width="40%" height="40%"  onclick="location.href='../index.php'" ></img>
                <img src="../assets/img/FTMletterblack.png" alt="FTM" class="alt-color-show" style="margin-left: -32px;cursor: pointer;" width="40%" height="40%"  onclick="location.href='../index.php'" ></img>
            </div>
            <div id="hamburger-icon" class="hamburger desk-dash-scroll">
                <i id="icon-switch" class="fas fa-bars menuIcon"></i>
                <i id="icon-switch" class="fas fa-times closeIcon"></i>
            </div>
            <div id="hamburger-show-mobile">
                <ul class="menu alt-menu desktop-menu">
                    <li><a class="menuItem" href="../index.php">Home</a></li>
                    <li><a class="menuItem" href="admin.php">Admin Dashboard</a></li>
                    <li><a class="menuItem" href="confirm-deposits.php">Confirm Deposits</a></li>
                    <li><a class="menuItem" href="confirm-withdrawals.php">Confirm Withdrawals</a></li>
                    <li><a class="menuItem" href="show-all-users.php">All Users</a></li>
                    <li><a class="menuItem" href="../logout.php">Logout</a></li>
                </ul>

            </div>
            <div id="desktop-links">
                <ul class="desktop-menu">
                <li><a class="menuItem" href="../index.php">Home</a></li>
                    <li><a class="menuItem" href="admin.php">Admin Dashboard</a></li>
                    <li><a class="menuItem" href="confirm-deposits.php">Confirm Deposits</a></li>
                    <li><a class="menuItem" href="confirm-withdrawals.php">Confirm Withdrawals</a></li>
                    <li><a class="menuItem" href="show-all-users.php">All Users</a></li>
                    <button class="btn logout-btn" onclick="window.location = '../logout.php'">Log Out</button>
                </ul>
            </div>
        </nav>
  </section>
  <section style="width: auto; height: auto;" class="compass admin-compass user-compass">
    <div class="admin-page-title">
      <h1>All Users</h1>
    </div>
    <div class="">
      <?php
    if (adminGetAllUsers($conn) === false) {
        echo "No registered users";
        ?>
      <div class="no-user-contain">
        <div class="no-user-icon">
        </div>
        <p>
          No user yet.
        </p>
      </div>
      <?php
    } else {
        $row = adminGetAllUsers($conn);    
    ?>
      
        <div class="">
        <div class="table-responsive">
				<table>
					<tbody>
          <tr>
						<th>Name</th>
						<th>Account Balance</th>
						<th>Amount Funded</th>
						<th>Verification Status</th>
					</tr>
          <?php foreach($row as $users) {?>
          
					<tr>
          
						<td><a href="user_info.php?id=<?php echo $users['userId'];?>" style='color:black;'><?php echo $users['FirstName'] . ' ' . $users['LastName']; ?> </a></td>
         

						<td><a href="user_info.php?id=<?php echo $users['userId'];?>" style='color:black;'> $<?php echo $users['AccountBalance'] ;?> </a></td>
						<td><a href="user_info.php?id=<?php echo $users['userId'];?>" style='color:black;'><?php echo $users['TotalDeposits'] ; ?> </a></td>
						<td><a href="user_info.php?id=<?php echo $users['userId'];?>" style='color:black;'><?php echo $users['VerificationStatus']; ?> </a></td>
					</tr>
          <?php } }?>
					
				</tbody>
      </table>
			</div>
          
        </div>
     
    </div>
    
  </section>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="../assets/js/dash-script.js"></script>
    <script src="../assets/js/error-handle.js"></script>
</body>

</html>