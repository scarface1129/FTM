<?php

session_start();


if(!empty($_SESSION['userid'])){
    header('location: dashboard.php');
  }

  if (isset($_SESSION['firstname'])) {
    $firstname = $_SESSION['firstname'];
    $middlename = $_SESSION['middlename'];
    $lastname = $_SESSION['lastname'];
    $country = $_SESSION['country'];
    $state = $_SESSION['state'];
    $city = $_SESSION['city'];
    $postalcode = $_SESSION['postalcode'];
    $email = $_SESSION['email'];
  } else {
    $firstname = $lastname = $middlename = $country = $state = $city = $postalcode = $email =  "";
  }

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="assets/images/FTM.png">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FTM - The world's leading investing platform</title>
    <script src="https://kit.fontawesome.com/a312657ba2.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="assets/css/styles.css">
    <link rel="stylesheet" href="assets/css/queries.css">
</head>

<body class="body-target body-sign">
    <section class="nav-section">
    <?php    
   if (isset($_GET['error'])) {
      if ($_GET['error'] =="emptyinput") {
         echo "            <div class='handle error-handle'>
         <div class='inner-handle'>
             <p>Fill every input to register</p>
         </div>
     </div>";    
      }
      else if ($_GET['error'] == "invalidemail") {
         echo "            <div class='handle error-handle'>
         <div class='inner-handle'>
             <p>Invalid email. Enter a valid email to continue</p>
         </div>
     </div>";
      }
      else if ($_GET['error'] == "passwordmismatch") {
         echo "            <div class='handle error-handle'>
         <div class='inner-handle'>
             <p>Passwords don't match.</p>
         </div>
     </div>";
      }
      else if ($_GET['error'] == "emailexists") {
         echo "            <div class='handle error-handle'>
         <div class='inner-handle'>
             <p>Email already exists. Try another one.</p>
         </div>
     </div>";
      }
   }
   if (isset($_GET['success'])) {
            header("location: login.php?success=registrationsuccessful");
   }

 ?>
        <nav class="navbar navbar-mobile navbar-desktop-create nav-disappear logo-shift" role="navigation">
            <div class="logo-container signup-logo">
                <svg viewBox="0 0 204 46" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo-main"
                    onclick="location.href='index.php'">
                    <path class="alt-color-show"
                        d="M103.109 24.788C103.671 23.499 104.185 22.3144 104.725 21.1438C104.787 21.0044 105.006 20.9069 105.165 20.8651C107.601 20.1613 110.057 20.0777 112.507 20.7578C114.872 21.4141 116.314 23.1018 116.454 25.5225C116.586 27.7676 116.558 30.0224 116.595 32.2731C116.595 32.5755 116.602 32.8779 116.633 33.1775C116.727 34.0639 117.195 34.638 118.098 34.7997C118.872 34.939 119.644 35.0533 120.527 35.1955V34.2422C120.527 28.4588 120.527 22.6758 120.527 16.8933C120.527 15.6265 120.356 14.4378 119.337 13.4595L126.776 13.125V33.9384C126.776 34.914 126.795 34.8958 127.801 34.946C129.347 35.0227 130.752 34.7593 131.69 33.3754C132.456 32.2508 132.694 30.9673 132.65 29.6601C132.631 28.6898 132.478 27.7266 132.195 26.7976C131.678 25.1852 130.464 24.2585 128.795 23.9212C128.591 23.8794 128.39 23.8293 128.127 23.7693C128.679 22.7506 129.199 21.7723 129.746 20.8079C129.791 20.7335 129.852 20.67 129.925 20.6218C129.998 20.5736 130.081 20.542 130.167 20.5292C132.705 20.5362 135.11 20.9668 137.052 22.7799C139.16 24.7532 139.641 27.2701 139.441 29.9876C139.058 35.0241 135.374 37.6203 131.033 38.2767C128.092 38.7213 125.151 38.384 122.206 38.2614C120.273 38.1792 118.333 38.2614 116.395 38.3074C114.556 38.3548 112.859 38.0287 111.464 36.7312C110.303 35.6512 109.918 34.2813 109.918 32.7622V29.9304C109.03 30.3973 108.249 30.7471 107.529 31.2C106.715 31.7156 106.455 32.5211 106.65 33.4493C106.817 34.252 107.508 34.8094 108.465 34.9586C108.718 34.9976 108.972 35.0171 109.374 35.0617C108.866 36.1194 108.391 37.127 107.891 38.1276C107.864 38.1638 107.83 38.1939 107.791 38.2158C107.751 38.2377 107.708 38.2508 107.663 38.2544C105.516 38.4286 103.431 38.4426 101.575 37.0294C99.1119 35.1551 98.6244 30.2844 102.617 28.587C103.913 28.0296 105.349 27.8163 106.713 27.4164C107.521 27.1955 108.314 26.9251 109.088 26.6067C109.676 26.3531 110.071 25.8709 109.94 25.1601C109.81 24.4494 109.338 24.0773 108.676 23.931C107.303 23.6286 105.98 23.9449 104.666 24.2961C104.185 24.4285 103.708 24.5985 103.109 24.788Z" />
                    <path class="alt-color-show"
                        d="M195.209 21.4368C195.209 19.4858 195.292 17.5821 195.168 15.6952C195.118 14.9176 194.622 14.1622 194.342 13.4431L201.769 13.0947V13.8528C201.769 20.7038 201.769 27.5552 201.769 34.4071C201.769 35.6934 201.972 36.9058 203.001 37.9496H195.213C195.213 37.689 195.213 37.4173 195.213 37.1455C195.198 34.1966 195.196 31.2478 195.157 28.2989C195.138 27.5807 195.06 26.8652 194.922 26.1597C194.754 25.2441 194.251 24.5864 193.259 24.4177C192.267 24.2491 191.399 24.5125 190.769 25.3319C189.881 26.4858 189.707 27.8558 189.759 29.234C189.783 30.2514 189.939 31.2614 190.225 32.2386C190.755 33.9514 192.035 34.8224 193.842 34.9171C193.983 34.9241 194.123 34.938 194.356 34.9561C193.843 36.025 193.373 37.0466 192.853 38.0513C192.784 38.1907 192.506 38.2618 192.318 38.2757C187.005 38.6576 183.235 35.1331 183.185 29.8347C183.16 26.9318 183.931 24.3731 186.12 22.3594C188.508 20.1617 191.643 19.7352 194.578 21.1595C194.782 21.2557 194.99 21.3407 195.209 21.4368Z" />
                    <path class="alt-color-show"
                        d="M78.0084 37.9653H70.5617C70.4957 37.6197 70.4282 37.2685 70.3453 36.8351L69.6217 37.3214C66.9283 39.1331 63.0785 38.8544 60.9414 36.7124C59.8977 35.6847 59.3027 34.2913 59.2849 32.8326C59.2259 30.3729 59.2428 27.9104 59.254 25.4465C59.261 23.8857 59.3186 22.3249 58.0948 20.8616C59.4999 20.8616 60.7026 20.8964 61.9011 20.8518C63.0996 20.8072 64.3191 20.6846 65.6188 20.5898C65.6188 20.8686 65.6188 21.1473 65.6188 21.4149C65.6525 24.8989 65.6778 28.3829 65.734 31.8585C65.7599 32.3218 65.8546 32.7787 66.015 33.2145C66.3663 34.2834 67.0379 34.7154 68.1914 34.6792C69.2101 34.6457 69.8507 34.1538 70.091 33.064C70.2574 32.294 70.3492 31.51 70.365 30.7227C70.4043 29.0281 70.365 27.3335 70.3804 25.6375C70.3945 24.0111 70.49 22.3737 69.3126 20.9689L76.8169 20.6512V21.4204C76.8169 25.7169 76.8309 30.012 76.8071 34.3071C76.7986 35.6338 76.8717 36.9061 78.0084 37.9653Z" />
                    <path class="alt-color-show"
                        d="M170.75 37.981H161.899C163.304 36.6598 163.107 35.0029 163.105 33.3919C163.105 30.3984 163.091 27.3994 163.105 24.4087C163.114 23.1391 162.914 21.9601 161.91 20.9707L169.356 20.6557C169.396 21.0975 169.441 21.5908 169.497 22.2124C169.865 21.9699 170.129 21.7943 170.392 21.6243C172.117 20.4801 173.999 20.2683 175.966 20.7881C178.516 21.4543 180.143 23.6074 180.203 26.442C180.26 29.0633 180.251 31.6875 180.229 34.3102C180.217 35.6355 180.307 36.9051 181.429 37.9698H172.577C173.76 36.887 173.824 35.5575 173.792 34.196C173.735 31.6875 173.702 29.1887 173.618 26.6858C173.581 26.2233 173.46 25.7711 173.262 25.3508C172.914 24.5369 172.23 24.169 171.349 24.2359C170.53 24.3014 169.983 24.7097 169.803 25.6058C169.62 26.5609 169.517 27.5296 169.497 28.5017C169.455 30.6827 169.474 32.8665 169.489 35.0516C169.521 36.1233 169.838 37.1002 170.75 37.981Z" />
                    <path class="alt-color-show"
                        d="M87.4094 20.657C87.46 21.1015 87.5148 21.5977 87.5822 22.2011C87.8633 22.0143 88.0881 21.8694 88.3087 21.7175C90.0523 20.5092 91.973 20.2626 93.9962 20.7643C95.1207 21.0406 96.1295 21.66 96.8804 22.535C97.6312 23.4101 98.0864 24.4967 98.1818 25.6419C98.3125 27.14 98.29 28.6535 98.3083 30.1599C98.3265 31.7375 98.3293 33.3165 98.3083 34.8982C98.2914 36.0395 98.5724 37.0555 99.4688 37.9544H90.6649C91.8283 36.898 91.9055 35.5727 91.8746 34.207C91.8212 31.7723 91.8001 29.3377 91.7257 26.9031C91.6941 26.4172 91.585 25.9393 91.4025 25.4872C91.0639 24.5786 90.3066 24.1438 89.3624 24.2455C88.5335 24.3347 87.9574 24.8489 87.8239 25.8035C87.6671 26.8542 87.5756 27.9135 87.5499 28.9754C87.5148 31.017 87.5387 33.06 87.5682 35.1072C87.5837 36.158 87.8928 37.1196 88.7751 37.9488H79.9951C81.4423 36.5733 81.1584 34.8118 81.1669 33.12C81.1809 30.2199 81.1598 27.3184 81.1753 24.4169C81.1753 23.1501 80.9828 21.9683 79.9768 20.9747L87.4094 20.657Z" />
                    <path class="alt-color-show"
                        d="M150.854 38.566C147.622 38.5771 144.899 37.4678 142.874 34.9217C139.9 31.1813 140.593 25.625 144.486 22.6176C147.947 19.9461 151.844 19.5726 155.798 21.277C159.153 22.7249 161.044 25.416 161.123 29.1243C161.202 32.8104 159.437 35.5029 156.253 37.3006C154.65 38.205 152.972 38.5618 150.854 38.566ZM147.697 29.0519L147.848 29.0937C147.913 29.7612 147.931 30.4371 148.056 31.0935C148.169 31.7534 148.354 32.3991 148.607 33.0195C149.177 34.3378 150.075 34.8938 151.379 34.8158C152.683 34.7378 153.436 33.9476 153.852 32.7853C154.406 31.2356 154.383 29.633 154.168 28.0471C154.041 27.1814 153.794 26.3373 153.435 25.5386C152.988 24.5255 152.135 23.9778 150.981 24.0056C149.828 24.0335 148.903 24.5714 148.528 25.6417C148.153 26.712 147.966 27.9133 147.697 29.0519V29.0519Z" />
                    <path class="blue-show"
                        d="M21.2016 13.5692C19.4565 15.0074 18.0515 16.6867 17.1509 18.6963C16.513 20.1178 16.1308 21.6549 15.6728 23.1558C15.5323 23.5948 15.4129 23.8958 14.893 24.0561C13.7858 24.3878 12.7194 24.8546 11.4675 25.3312C11.608 24.1662 11.6488 23.0638 11.889 22.0005C13.0824 16.5441 16.0156 12.2458 20.6888 9.10552C21.1103 8.8268 21.3744 8.8268 21.7917 9.10552C25.9562 11.9011 28.866 15.6332 30.1769 20.4592C32.0962 27.5345 30.5591 33.867 25.7244 39.4122C25.4434 39.7411 25.1792 39.8303 24.7746 39.5683C23.843 38.969 22.8834 38.413 21.9055 37.8221C30.1825 29.7071 27.3781 18.3242 21.2016 13.5692Z" />
                    <path class="blue-show"
                        d="M20.2489 43.6196C18.203 44.7221 15.9712 45.4447 13.6635 45.7518C9.43158 46.3092 5.3893 45.6904 1.55638 43.7826C1.12925 43.5708 0.971883 43.3408 0.999984 42.8754C1.36436 37.6308 3.44614 33.1805 7.24535 29.5247C10.1664 26.7235 13.6663 25.008 17.6426 24.2889C20.4392 23.7745 23.3162 23.8849 26.0643 24.6122C26.0643 25.8846 26.2049 27.1834 25.9238 28.4223C24.6144 28.2439 23.3948 28.0586 22.1752 27.915C20.0972 27.6726 18.0613 27.9778 16.1167 28.6606C10.3561 30.6841 6.70301 34.6434 5.2502 40.5648C5.1364 41.0247 5.26285 41.1571 5.68155 41.2922C9.27562 42.4545 12.8472 42.3709 16.3865 41.1013C16.808 40.9508 17.0511 41.0149 17.37 41.2936C18.2973 42.0866 19.2528 42.8182 20.2489 43.6196Z" />
                    <path class="blue-show"
                        d="M15.7935 29.592C16.9569 33.8941 19.2036 37.1356 22.7372 39.4197C26.9692 42.1567 31.5454 42.7839 36.4068 41.4209C37.0868 41.2314 37.1992 40.936 37.0362 40.2893C36.2152 36.9278 34.3351 33.9133 31.669 31.6838C31.3037 31.3758 31.2067 31.1264 31.3234 30.6303C31.5524 29.6673 31.6353 28.6709 31.7786 27.687C31.8039 27.5128 31.8348 27.34 31.8769 27.0752C33.3651 27.9575 34.7167 29.0489 35.8897 30.3153C38.8599 33.4816 40.5952 37.2332 41.2288 41.499C41.3152 42.0246 41.357 42.5565 41.3539 43.0891C41.3435 43.2139 41.3055 43.3349 41.2426 43.4436C41.1797 43.5522 41.0934 43.6458 40.99 43.7176C37.4591 45.5571 33.6501 46.3473 29.7343 45.8582C21.2226 44.7934 15.4353 40.1806 12.4973 32.1409C12.4215 31.9347 12.4116 31.5264 12.524 31.4581C13.5624 30.824 14.6288 30.2415 15.7935 29.592Z" />
                    <path class="alt-color-show"
                        d="M48.2091 13.4559L55.7695 13.0908V13.7876C55.7695 20.5633 55.7695 27.3385 55.7695 34.1133C55.7695 35.4985 55.8229 36.8559 57.0228 37.9708H48.1711C49.3668 36.8726 49.3921 35.539 49.3893 34.1774C49.3753 28.4172 49.3753 22.6625 49.3893 16.9135C49.3781 15.6481 49.2474 14.451 48.2091 13.4559Z" />
                    <path class="blue-show"
                        d="M21.1959 6.07192C19.5928 6.23776 18.1048 4.62954 18.1512 3.04084C18.2046 1.34901 19.5309 0 21.2324 0C22.9339 0 24.2434 1.32392 24.2968 3.04363C24.3502 4.73825 22.8243 6.25588 21.1959 6.07192Z" />
                </svg>
            </div>
            <div id="hamburger-icon" class="hamburger hamburger-signs ham-sign">
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
    </section>

    <section class="encompass">
        <section class="content signup-area">
            <div class="signup-page-container">
                <div class="signup-logo-main" onclick="location.href='index.php'">
                <img src="./assets/img/FTMblack.png" alt="FTM" class="alt-color-show" style="margin: 0px;" width="100%" height="40%"></img>
                </div>
                <h1>Create<br>Account</h1>
            </div>
            <div class="signup-page-container-main"></div>
        </section>
        <section class="content sigup-section">
            <div class="drag-em-down"></div>

            <!-- <div class='handle error-handle'>
                <div class='inner-handle'>
                    <p>Fill every input available</p>
                </div>
            </div> -->
            <form action="includes/signup.php" class="form-main form-main-drag" method="POST">
                <div class="div-input">
                    <p>First Name</p>
                    <input type="text" name="fname" value="<?php echo $firstname; ?>">
                </div>
                <div class="div-input">
                    <p>Middle Name</p>
                    <input type="text" name="mname" value="<?php echo $middlename; ?>">
                </div>
                <div class="div-input">
                    <p>Last Name</p>
                    <input type="text" name="lname" value="<?php echo $lastname; ?>">
                </div>
                <div class="div-input">
                    <p>Country Of Residence</p>
                    <select class="select-option" name="country" id="" value="">
                        <option>Select</option>
                        <option value="AF">Afghanistan</option>
                        <option value="AX">Åland Islands</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AS">American Samoa</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AQ">Antarctica</option>
                        <option value="AG">Antigua and Barbuda</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AW">Aruba</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="BS">Bahamas</option>
                        <option value="BH">Bahrain</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbados</option>
                        <option value="BY">Belarus</option>
                        <option value="BE">Belgium</option>
                        <option value="BZ">Belize</option>
                        <option value="BJ">Benin</option>
                        <option value="BM">Bermuda</option>
                        <option value="BT">Bhutan</option>
                        <option value="BO">Bolivia, Plurinational State of</option>
                        <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                        <option value="BA">Bosnia and Herzegovina</option>
                        <option value="BW">Botswana</option>
                        <option value="BV">Bouvet Island</option>
                        <option value="BR">Brazil</option>
                        <option value="IO">British Indian Ocean Territory</option>
                        <option value="BN">Brunei Darussalam</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="KH">Cambodia</option>
                        <option value="CM">Cameroon</option>
                        <option value="CA">Canada</option>
                        <option value="CV">Cape Verde</option>
                        <option value="KY">Cayman Islands</option>
                        <option value="CF">Central African Republic</option>
                        <option value="TD">Chad</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CX">Christmas Island</option>
                        <option value="CC">Cocos (Keeling) Islands</option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comoros</option>
                        <option value="CG">Congo</option>
                        <option value="CD">Congo, the Democratic Republic of the</option>
                        <option value="CK">Cook Islands</option>
                        <option value="CR">Costa Rica</option>
                        <option value="CI">Côte d'Ivoire</option>
                        <option value="HR">Croatia</option>
                        <option value="CU">Cuba</option>
                        <option value="CW">Curaçao</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egypt</option>
                        <option value="SV">El Salvador</option>
                        <option value="GQ">Equatorial Guinea</option>
                        <option value="ER">Eritrea</option>
                        <option value="EE">Estonia</option>
                        <option value="ET">Ethiopia</option>
                        <option value="FK">Falkland Islands (Malvinas)</option>
                        <option value="FO">Faroe Islands</option>
                        <option value="FJ">Fiji</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="GF">French Guiana</option>
                        <option value="PF">French Polynesia</option>
                        <option value="TF">French Southern Territories</option>
                        <option value="GA">Gabon</option>
                        <option value="GM">Gambia</option>
                        <option value="GE">Georgia</option>
                        <option value="DE">Germany</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GR">Greece</option>
                        <option value="GL">Greenland</option>
                        <option value="GD">Grenada</option>
                        <option value="GP">Guadeloupe</option>
                        <option value="GU">Guam</option>
                        <option value="GT">Guatemala</option>
                        <option value="GG">Guernsey</option>
                        <option value="GN">Guinea</option>
                        <option value="GW">Guinea-Bissau</option>
                        <option value="GY">Guyana</option>
                        <option value="HT">Haiti</option>
                        <option value="HM">Heard Island and McDonald Islands</option>
                        <option value="VA">Holy See (Vatican City State)</option>
                        <option value="HN">Honduras</option>
                        <option value="HK">Hong Kong</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IR">Iran, Islamic Republic of</option>
                        <option value="IQ">Iraq</option>
                        <option value="IE">Ireland</option>
                        <option value="IM">Isle of Man</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japan</option>
                        <option value="JE">Jersey</option>
                        <option value="JO">Jordan</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KE">Kenya</option>
                        <option value="KI">Kiribati</option>
                        <option value="KP">Korea, Democratic People's Republic of</option>
                        <option value="KR">Korea, Republic of</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LA">Lao People's Democratic Republic</option>
                        <option value="LV">Latvia</option>
                        <option value="LB">Lebanon</option>
                        <option value="LS">Lesotho</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libya</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MO">Macao</option>
                        <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                        <option value="MG">Madagascar</option>
                        <option value="MW">Malawi</option>
                        <option value="MY">Malaysia</option>
                        <option value="MV">Maldives</option>
                        <option value="ML">Mali</option>
                        <option value="MT">Malta</option>
                        <option value="MH">Marshall Islands</option>
                        <option value="MQ">Martinique</option>
                        <option value="MR">Mauritania</option>
                        <option value="MU">Mauritius</option>
                        <option value="YT">Mayotte</option>
                        <option value="MX">Mexico</option>
                        <option value="FM">Micronesia, Federated States of</option>
                        <option value="MD">Moldova, Republic of</option>
                        <option value="MC">Monaco</option>
                        <option value="MN">Mongolia</option>
                        <option value="ME">Montenegro</option>
                        <option value="MS">Montserrat</option>
                        <option value="MA">Morocco</option>
                        <option value="MZ">Mozambique</option>
                        <option value="MM">Myanmar</option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="NL">Netherlands</option>
                        <option value="NC">New Caledonia</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Niger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NF">Norfolk Island</option>
                        <option value="MP">Northern Mariana Islands</option>
                        <option value="NO">Norway</option>
                        <option value="OM">Oman</option>
                        <option value="PK">Pakistan</option>
                        <option value="PW">Palau</option>
                        <option value="PS">Palestinian Territory, Occupied</option>
                        <option value="PA">Panama</option>
                        <option value="PG">Papua New Guinea</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Peru</option>
                        <option value="PH">Philippines</option>
                        <option value="PN">Pitcairn</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="QA">Qatar</option>
                        <option value="RE">Réunion</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russian Federation</option>
                        <option value="RW">Rwanda</option>
                        <option value="BL">Saint Barthélemy</option>
                        <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                        <option value="KN">Saint Kitts and Nevis</option>
                        <option value="LC">Saint Lucia</option>
                        <option value="MF">Saint Martin (French part)</option>
                        <option value="PM">Saint Pierre and Miquelon</option>
                        <option value="VC">Saint Vincent and the Grenadines</option>
                        <option value="WS">Samoa</option>
                        <option value="SM">San Marino</option>
                        <option value="ST">Sao Tome and Principe</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="SN">Senegal</option>
                        <option value="RS">Serbia</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leone</option>
                        <option value="SG">Singapore</option>
                        <option value="SX">Sint Maarten (Dutch part)</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="SB">Solomon Islands</option>
                        <option value="SO">Somalia</option>
                        <option value="ZA">South Africa</option>
                        <option value="GS">South Georgia and the South Sandwich Islands</option>
                        <option value="SS">South Sudan</option>
                        <option value="ES">Spain</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SD">Sudan</option>
                        <option value="SR">Suriname</option>
                        <option value="SJ">Svalbard and Jan Mayen</option>
                        <option value="SZ">Swaziland</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="SY">Syrian Arab Republic</option>
                        <option value="TW">Taiwan, Province of China</option>
                        <option value="TJ">Tajikistan</option>
                        <option value="TZ">Tanzania, United Republic of</option>
                        <option value="TH">Thailand</option>
                        <option value="TL">Timor-Leste</option>
                        <option value="TG">Togo</option>
                        <option value="TK">Tokelau</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinidad and Tobago</option>
                        <option value="TN">Tunisia</option>
                        <option value="TR">Turkey</option>
                        <option value="TM">Turkmenistan</option>
                        <option value="TC">Turks and Caicos Islands</option>
                        <option value="TV">Tuvalu</option>
                        <option value="UG">Uganda</option>
                        <option value="UA">Ukraine</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                        <option value="UM">United States Minor Outlying Islands</option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VE">Venezuela, Bolivarian Republic of</option>
                        <option value="VN">Viet Nam</option>
                        <option value="VG">Virgin Islands, British</option>
                        <option value="VI">Virgin Islands, U.S.</option>
                        <option value="WF">Wallis and Futuna</option>
                        <option value="EH">Western Sahara</option>
                        <option value="YE">Yemen</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabwe</option>
                    </select>
                </div>
                <div class="div-input">
                    <p>State</p>
                    <input type="text" name="state" value="" value="<?php echo $state; ?>">
                </div>
                <div class="div-input">
                    <p>City</p>
                    <input type="text" name="city" value="<?php echo $city;?>">
                </div>
                <div class="div-input">
                    <p>Postal Code</p>
                    <input type="number" name="postalcode" value="<?php echo $postalcode; ?>">
                </div>
                <div class="div-input">
                    <p>Email</p>
                    <input type="Email" name="email" value="<?php echo $email; ?>">
                </div>
                <div class="div-input">
                    <p>Password</p>
                    <input type="Password" name="password">
                </div>
                <div class="div-input">
                    <p>Retype Password</p>
                    <input type="Password" name="repassword">
                </div>
                <div class="div-tick-box">
                    <input type="checkbox" class="checkbox" required>
                    <p>By Clicking on the box, you agree to our Terms and Conditions</p>
                </div>
                <div class="button-signup">
                    <button class="btn btn-alt create-btn" type="submit" name="submit">Create Account</button>
                </div>
                <div class="already-account">
                    <p>Already have an account?<a href="login.php">Log in</a></p>
                </div>
            </form>
            <?php
            ?>
        </section>
    </section>
    <?php include('./footer.php');?>
    <script src="assets/js/jquery-min-fallback.js"></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> -->
    <script src="assets/js/login.js"></script>
</body>

</html>