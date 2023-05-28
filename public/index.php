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



<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title>FTM - The world's leading investing platform</title>
	<meta name="description" content="FTM">
	<meta name="viewport" content="width=device-width, initial-scale=1">	
	
	<!-- Favicon -->
	<link rel="icon" type="image/png" href="assets/images/FTM.png">
	<!-- bootstrap CSS -->
	<link rel="stylesheet" 	href="assets/css/bootstrap.min.css" type="text/css" media="all" />	
	<!-- nivo-slider CSS -->
	<link rel="stylesheet" 	href="assets/css/animate.css" type="text/css" media="all" />
	<!-- Animated Text CSS -->
	<link rel="stylesheet" 	href="assets/css/animated-text.css" type="text/css" media="all" />
	<!-- owl-carousel CSS -->
	<link rel="stylesheet" 	href="assets/css/owl.carousel.css" type="text/css" media="all" />
	<!-- font-awesome CSS -->
	<link rel="stylesheet" href="../cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
	<!-- icomoon CSS -->
	<link rel="stylesheet"  href="assets/css/icomoon-style.css" type="text/css" media="all" />
	<!-- Main Style CSS -->
	<link rel="stylesheet"  href="assets/css/style.css" type="text/css" media="all" />
	<!-- Font -->
	<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&amp;display=swap" rel="stylesheet">	
	
</head>
<style>
	.logo img {
    max-width: 83px;
    width: 100%;
}
</style>
<body class="homepage">
	<div class="loader"><i class="fa-solid fa-spinner"></i></div>
	<!-- HEADER DEFAULT MANU AREA -->
	<header>
	 	<div class="cryptco-main-menu one_page  hidden-xs hidden-sm header--fixed headrooma">
			<div class="cryptco_nav_area fluid">
				<div class="container"> 			
					<div class="row align-items-center logo-left">				
						<!-- LOGO -->
						<div class="col-lg-3 col-sm-4">
							<div class="logo">								
								<a class="main_sticky" href="index.php" title="cryptco">
									<!-- <img src="assets/images/FTM.png" alt="FTM" class="w-80" /> -->
									<!-- <img src="assets/images/FTM LETTERS.png" alt="FTM" class="w-80" /> -->
									<img src="./assets/img/FTM.png" alt="FTM" class="alt-color-show" style="margin: 0px;cursor: pointer;" width="40%" height="40%"  onclick="location.href='index.php'" ></img>
                					<img src="./assets/img/FTM LETTERS.png" alt="FTM" class="alt-color-show" style="margin-left: -32px;cursor: pointer;" width="30%" height="30%"  onclick="location.href='index.php'" ></img>
								</a>
							</div>	  
		  				</div>
						
						<!-- MAIN MENU -->
						<div class="col-lg-6 col-sm-8 phone_menu">
							
							<nav class="cryptco_menu main-search-menu ">
								<div class="navbar-header d-lg-none">
									<button type="button" id="show-themability_megamenu" data-toggle="collapse" class="navbar-toggle">
										<i class="fa-solid fa-bars"></i>
									</button>
								</div>
								<div class="main-menu-outer">
									<div class="d-lg-none menu_title">Menu<i class="fa-solid fa-xmark"></i></div>
									<ul class="main-menu nav_scroll">										
										<!-- <li><a href="index-2.php">Home</a></li>
										<li><a href="blog.php">Blog</a></li>
										<li><a href="about.php">About</a></li>
										<li><a href="contact.php">Contact</a></li>
										<li class="telephone text-right d-lg-none"><a href="tel:+1123456789"><i class="fa fa-phone"></i>+1 123 456-789</a></li> -->
										<li><a class="" href="index.php">Home</a></li>
										<li><a class="" href="aboutus.php">About Us</a></li>
										<li><a class="" href="faq.php">F.A.Q</a></li>
										<?php if(!isset($_SESSION['userid'])){
											?>
										<li><a class="" href="signup.php">Sign Up</a></li>
										<li><a class="" href="login.php">Login</a></li>
										<?php } else{?>
											<li><a class="" href="dashboard.php">Dashboard</a></li>
											<?php }?>
									</ul>
								</div>																									
							</nav>				
						</div>
						<!-- END MAIN MENU -->

						<!-- Contact -->
						<div class="col-lg-3 d-none d-lg-block d-xl-block">
							<div class="telephone text-right"><a href="tel:+1123456789"><i class="fa fa-phone"></i>+1 123 456-789</a></div>
						</div>
						<!-- .Contact -->
					</div> 
				</div> 	
			</div>  				
		</div>
	</header>	
	<!-- .HEADER MENU AREA -->

    <!-- slider Area -->
	<div class="slider_area d-flex align-items-center position-relative overflow-hidden">
		<div class="slider_img">
			<img src="assets/images/Btc.jpg" alt="slider img">
		</div>
		
		<!-- single slide -->
		<div class="single_slide position-absolute">
			<div class="slider_content text_center">
				<div class="slider_text">
					<div class="slider_text_inner">
						<h1>	Bitcoin </h1>
						<h1>Investment </h1>
						<h1>Platform</h1>
						<h2 class="cd-headline clip is-full-width"> We provide
							<span class="cd-words-wrapper">
							<b class="is-visible">Bitcoin </b>
								<b> Blockchain</b>
								<b>Cryptocurrency</b>
								<b>Blockchain</b>
								<b>Trade</b>
								<b>News</b>
							</span>
						</h2>
					</div>
					<div class="single_slider_button">
						<a class="btn" href="signup.php">Register</a>
					</div>
				</div>
			</div>
		</div>
		
	</div>
    <!-- .slider Area -->

	<!-- crypto portfolio -->
	<div class="crypto_portfolio mt-50">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 text-center">
					<div class="portfolio_img">
						<img src="assets/images/cartoon.png" alt="portfolio" class="image">
					</div>
				</div>
				<div class="col-lg-6">
					<div class="crypto_portfolio_description">
						<div class="title-main">
							<h2 class="product-title">Professionally managed finance growth</h2>
				        	<p class="title-desc">Financial Planning, Investment Planning & Wealth Management firm focused on tailoring strategies to meet our clients' individual goals.</p>
						</div>				        

				        <div class="portfolio_desc_inner">
			                <div class="iconleft"><i class="icon-account"></i></div>
			                <div class="portfolio_outer">
				                <h4 class="crypto_portfolio_title">Fund your account</h4>
				                <p class="portfolio_paragraf_info">Add funds to your crypto account to start your investment in the crypto world. </p>
								
							</div>
				        </div>
						<div class="portfolio_desc_inner">
						<div class="portfolio_outer">
							<?php if(!isset($_SESSION['userid'])){
                        		?>
								<button class="btn btn-alt" onclick="location.href='signup.php'">Create Account</button>
								<?php } else{?>
									<button class="btn btn-alt" onclick="location.href='dashboard.php'">Dashboard</button>
								<?php }?>
						</div>
						</div>
				        <div class="portfolio_desc_inner">
				            <div class="iconleft"><i class="icon-identity"></i></div>
				            <div class="portfolio_outer">
				                <h4 class="crypto_portfolio_title">Verify your identity</h4>
				                <p class="portfolio_paragraf_info">Complete the identity verification process to secure your account and transactions.</p>				      
				            </div>
				        </div>
				        <div class="portfolio_desc_inner">
				            <div class="iconleft"><i class="icon-trading"></i></div>
				            <div class="portfolio_outer">
				                <h4 class="crypto_portfolio_title">Start Investing</h4>
				                <p class="portfolio_paragraf_info">You're good to go! Buy/sell crypto, set up recurring buys for your investments, and discover what Binance has to offer.</p>
				            </div>
				        </div>
				    </div>
			    </div>
		    </div>
		</div>
	</div>
	
	<!-- .crypto portfolio -->
	<section class="container margin-tops">
        <div class="container-text">
            <h1>FTM-What?</h1>
            <p>Everyone is asking questions: What is FTM? or who is FTM?</p>
        </div>
        <div class="container-tweet">
          
            <img src="./assets/img/tweet-cards-grouped.png" alt="tweet-cards"  width="70%" height="100%"/>
        </div>
        <div class="container-answer">
            <div class="">
                <p class="">So here we go: </p>
                <p class=""> FTM is an exceptional investment company that targets and
                    profits from trading Bitcoin. Bitcoin volatility goes third in hand with the most
                    rated
                    crypto Bitcoin, which makes profiting from BTC simple and same time difficult in regards to its
                    volatility as trading involves profit and loss... <a class="link-underline" href="aboutus.php">Keep
                        Reading</a></p>
                <div class="image-logo">
                <!-- <img src="./assets/img/FTMletterblack.png" alt="FTM" class="alt-color-show"  width="" height=""></img> -->
				<img src="./assets/img/FTMblack.png" alt="FTM" class="alt-color-show img1"></img>
                <img src="./assets/img/FTMletterblack.png" alt="FTM" class="alt-color-show img2"></img>
                </div>
            </div>
        </div>
    </section>
	<div class="counter_live text-center mt-50">
				<div class="container">
					<div class="row">
						<div class="col-sm-4">
							<div class="counter_section" data-number="257">
								<span id="number1" class="count"></span><span>K</span><span class="counter_info">Registered investors</span>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="counter_section" data-number="676">
								<span id="number2"></span><span>K</span><span class="counter_info">Total transactions</span>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="counter_section" data-number="233">
								<span id="number3"></span><span class="counter_info">Total users</span>
							</div>
						</div>
					</div>
				</div>
			</div>
	<!-- We provide Top Crypto Money Solutions -->
	<div class="crypto_solution mt-50">
		<div class="container">
			<div class="title-main text-center">
				<h2 class="product-title">Ok, so why trust you?</h2>
				<h3 class="">Lots of cryptocurrency investment platforms out there so time to get the wheat out of the chaff.</h3>
			</div>
			<div class="crypto_solution_section">
				<div class="provide-carousel owl-carousel">
					
					<div class="crypto_solution_block equalHeight">
						<div class="icons"><i class="icon-bitcoin"></i></div>
						<h3 class="crypto_solution_desc">Diversified Portfolio</h3>
						<p style="color:wheat">We reinvest your funds into the stock and forex markets to
                    		maximize our profits.
						</p>
					</div>
					<div class="crypto_solution_block equalHeight">
						<div class="icons"><i class="icon-payment"></i></div>
						<h3 class="crypto_solution_desc">Secure Funds</h3>
						<p style="color:wheat">By using cutting edge technology, we protect your profits.</p>
					</div>
					<div class="crypto_solution_block equalHeight">
						<div class="icons"><i class="icon-crypto-bag"></i></div>
						<h3 class="crypto_solution_desc">Fast Payouts</h3>
						<p style="color:wheat">All investments are paid out as soon as they reach their expiry.</p>
					</div>
					<div class="crypto_solution_block equalHeight">
						<div class="icons"><i class="icon-research"></i></div>
						<h3 class="crypto_solution_desc">Research & Development</h3>
						<p style="color:wheat">We make periodic researches on the stocks and crypto currencies we invest in.</p>
					</div>
					<!-- <div class="crypto_solution_block equalHeight">
						<div class="icons"><i class="icon-Coin-Offering"></i></div>
						<h3 class="crypto_solution_desc">ICO Coin Offering</h3>
					</div>
					<div class="crypto_solution_block equalHeight">
						<div class="icons"><i class="icon-tracing"></i></div>
						<h3 class="crypto_solution_desc">Tracing Solutions</h3>
					</div> -->
				</div>
			</div>
		</div>
	</div>
	<!-- .We provide Top Crypto Money Solutions -->
	<div class="about_info margin-top">
		<div class="container">
			<div class="row">
				<div class="col-sm-6">
					<div class="about_img">
						<img src="assets/images/about-us.jpg" alt="about_image">
					</div>
				</div>
				<div class="col-sm-6">
					<h1>HOW OUR REFERRAL SYSTEM WORKS</h1>
					<div class="about_desc">
						<p>
						Our Referral system works differently. When a user refers someone using their referral codes, the system takes note of that, and the user gets the referral bonus which is some persentage of the first deposit made by who they referred will be awarded as soon as they activate their first investment</p>
						
					</div>
				</div>
			</div>
		</div>
	</div>

	<section class="container">
        <div class="">
            <h1>Start Building Passive Income</h1>
            <p>Our Over four years of experience in the trading world puts us over the edge against most investment
                companies.</p>
        </div>
        <div class="row">
			<div class="col-md-6 col-sm-6 col-lg-4">
				<a href="invest.php">
					<div class="luna-plan js-scroll fade-in-bottom">
						<p class="luna-plan-type">Starter</p>
						<div class="luna-plan-price-box">
							<div class="luna-plan-price-min-div">
								<p class="luna-plan-price-lvl">$100 <span>Min</span></p>
							</div>
							<div class="luna-plan-price-max-div">
								<p class="luna-plan-price-lvl">$399 <span>Max</span></p>
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
			</div>
            <div class='col-md-6 col-sm-6 col-lg-4'>
				<a href="invest.php">
					<div class="luna-plan js-scroll fade-in-bottom">
						<p class="luna-plan-type">Regular</p>
						<div class="luna-plan-price-box">
							<div class="luna-plan-price-min-div">
								<p class="luna-plan-price-lvl">400 <span>Min</span></p>
							</div>
							<div class="luna-plan-price-max-div">
								<p class="luna-plan-price-lvl">$699 <span>Max</span></p>
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
			</div>
			<div class="col-md-6 col-sm-6 col-lg-4">
				<a href="invest.php">
					<div class="luna-plan js-scroll fade-in-bottom">
						<p class="luna-plan-type">Business</p>
						<div class="luna-plan-price-box">
							<div class="luna-plan-price-min-div">
								<p class="luna-plan-price-lvl">$700 <span>Min</span></p>
							</div>
							<div class="luna-plan-price-max-div">
								<p class="luna-plan-price-lvl">$999 <span>Max</span></p>
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
			</div>	
          	<div class="col-md-6 col-sm-6 col-lg-4">
				<a href="invest.php">
					<div class="luna-plan js-scroll fade-in-bottom">
						<p class="luna-plan-type">Executive</p>
						<div class="luna-plan-price-box">
							<div class="luna-plan-price-min-div">
								<p class="luna-plan-price-lvl">$1000 <span>Min</span></p>
							</div>
							<div class="luna-plan-price-max-div">
								<p class="luna-plan-price-lvl">$4999 <span>Max</span></p>
								<p class="luna-plan-price-lvl-txt"></p>
							</div>
							<div class="luna-plan-contract">
								<p class="contract-details">120 Hours Contract</p>
								<p class="contract-details">10% Daily ROI</p>
								<p class="contract-details">15% Referral commission</p>
							</div>
							<div class="external-link">
								<i class="fas fa-external-link-alt"></i>
							</div>
						</div>
					</div>
				</a>
			</div>
          	<div class="col-md-6 col-sm-6 col-lg-4">
				<a href="invest.php">
					<div class="luna-plan js-scroll fade-in-bottom">
						<p class="luna-plan-type">Apex</p>
						<div class="luna-plan-price-box">
							<div class="luna-plan-price-min-div">
								<p class="luna-plan-price-lvl">$5000 <span>Min</span></p>
							</div>
							
							<div class="luna-plan-contract">
								<p class="contract-details">72 Hours Contract</p>
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
        </div>
    </section>
	<!-- Customer Say -->
	<div class="home-customer mt-50">
		<div class="container">
			<div class="title-main text-center">
				<h2 class="product-title">What Are Our Customers Saying ?</h2>
	        	<p class="title-desc">Every customer is valuable to us. Here are the reviews of some of our customers who choose us.</p>
			</div>		

			<div class="customer-carousel owl-carousel">
				<div class="customer_section text-center">						
					<div class="customer_description">							
						<p>I recently made an investment in Bitcoin through their platform and I was extremely pleased with the process. 

The customer service was top-notch, with all my queries being answered quickly and accurately. I was always kept updated with the progress of the transaction and was made to feel secure at all times. I was also impressed with the low fees that FTM charges for its services.</p>							
					</div>
					<div class="customer_image">
						<img src="assets/images/testimonial/user-1.jpg" alt="" loading="lazy" class="rounded-circle">
						<h3 class="user_name">Romy</h3>
					</div>
				</div>
				<div class="customer_section text-center">						
					<div class="customer_description">							
						<p>I recently invested with FTM and I am pleased to report I am highly satisfied with their services. They provided clear instructions and guidance in navigating the process of investing in bitcoin, and I felt secure and confident that my investments were in safe hands.

The customer service was exceptional, with friendly and knowledgeable staff who were always on hand to answer any questions or queries I had. They took the time to explain the process and the risks involved, ensuring that I fully understood what I was investing in.
</p>							
					</div>
					<div class="customer_image">
						<img src="assets/images/testimonial/user-2.jpg" alt="" loading="lazy" class="rounded-circle">
						<h3 class="user_name">Michal</h3>
					</div>
				</div>
				<div class="customer_section text-center">						
					<div class="customer_description">							
						<p>The fees were also competitive and fairly priced, so I was quite happy with the costs I was incurring. They also provided a secure online platform that was easy to use and understand.I am very pleased with my experience with FTM and I would highly recommend their services to anyone considering investing in bitcoin.</p>							
					</div>
					<div class="customer_image">
						<img src="assets/images/testimonial/user-3.jpg" alt="" loading="lazy" class="rounded-circle">
						<h3 class="user_name">Robert</h3>
					</div>
				</div>
				<div class="customer_section text-center">						
					<div class="customer_description">							
						<p>I am writing to express my gratitude for the excellent service I have received from FTM. I recently made an investment with the company and I was taken aback by the speed and accuracy with which my transactions were completed. The customer service representatives were friendly, knowledgeable and always willing to help.</p>							
					</div>
					<div class="customer_image">
						<img src="assets/images/testimonial/user-4.jpg" alt="" loading="lazy" class="rounded-circle">
						<h3 class="user_name">Robert</h3>
					</div>
				</div>
				<div class="customer_section text-center">						
					<div class="customer_description">							
						<p>I feel confident that FTM is a reliable and trustworthy company that takes its customers’ needs seriously. I feel secure knowing that I have made a wise decision in choosing FTM to manage my BTC investments. Thank you for your excellent service and commitment to customer satisfaction.</p>							
					</div>
					<div class="customer_image">
						<img src="assets/images/testimonial/user-5.jpg" alt="" loading="lazy" class="rounded-circle">
						<h3 class="user_name">Robert</h3>
					</div>
				</div>
			</div>
			
		</div>
	</div>
	<!-- .Customer Say -->
	
	<!-- Popular cryptocurrencies -->
	<section class="coming_soon">
		<div class="write_up">
			<p class="coming_soon_heading"><h1>Coming Soon:</h1><br>
				<h2>The FTM</h2><br>
				<h2>Mobile App.</h2></p>
			<p class="coming_soon_text">We’re working to give you a more simplified
				experience through our mobile app. To enable you understand current market conditions with the latest
				economic news updates, financial analysis and promotions. Also gives a direct access to your FTM
				profile with much ease.</p>
		</div>
        <div class="mobile_image">
            <div class=""></div>
            <img src="assets/img/mobile-view.png" alt="Mobile View" class="j">
        </div>
        
    </section>

	
	<!-- .Popular cryptocurrencies -->

    <!-- Blog -->
	<div class="home-blog mt-50">
		<div class="container">
			<div class="title-main text-center">
				<h2 class="product-title">Resent New & Articles</h2>
				<p class="title-desc">Current information about Cryptocurrencies</p>
			</div>		

			<div class="blog-carousel owl-carousel">
				<div class="blog_section text-center">
					<div class="blog_image">
						<img src="assets/images/blog/blog1.jpg" alt="" loading="lazy">
					</div>
					<div class="blog_description">
						<h4 class="blog-title" >What is Bitcoin?</h4>
						<p class="blog-inner-desc">Bitcoin (BTC) is a decentralized cryptocurrency. It is an open code; identified by encrypted and anonymous codes. Since it uses peer to peer (P2P) technology, it enables all kinds of […]</p>
						<div class="blog_more">
							<a href="what-is-bitcoin.php" class="custom-buttonw btn">Read More</a>
						</div>
					</div>
				</div>
				<div class="blog_section text-center">
					<div class="blog_image">
						<img src="assets/images/blog/blog2.jpg" alt="" loading="lazy">
					</div>
					<div class="blog_description">
						<h4 class="blog-title">Why does the coin increase?</h4>
						<p class="blog-inner-desc"> Bitcoin (BTC) has experienced an incredible increase in value since its inception in 2009. The cryptocurrency has seen its price increase exponentially since its inception, leading to an unprecedented rate of adoption. […]</p>
						<div class="blog_more">
							<a href="why-does-the-coin-increase.php" class="custom-buttonw btn">Read More</a>
						</div>
					</div>
				</div>
				<div class="blog_section text-center">
					<div class="blog_image">
						<img src="assets/images/blog/blog3.jpg" alt="" loading="lazy">
					</div>
					<div class="blog_description">
						<h4 class="blog-title">What is Bitcoin Source?</h4>
						<p class="blog-inner-desc">Bitcoin Source is an open-source software project that was launched in 2009. It is a decentralized digital currency created by a pseudonymous person or group of people known as Satoshi Nakamoto [...]</p>
						<div class="blog_more">
							<a href="what-is-bitcoin-source.php" class="custom-buttonw btn">Read More</a>
						</div>
					</div>
				</div>
				<!-- <div class="blog_section text-center">
					<div class="blog_image">
						<img src="assets/images/blog/blog4.jpg" alt="" loading="lazy">
					</div>
					<div class="blog_description">
						<h4 class="blog-title">What is Bitcoin looking for?</h4>
						<p class="blog-inner-desc">The value of Bitcoin, which is one of the leading cryptocurrencies, is determined according to the last Bitcoin transaction made on the stock exchanges. The changing demand day by day</p>
						<div class="blog_more">
							<a href="what-is-bitcoin-looking-for.php" class="custom-buttonw btn">Read More</a>
						</div>
					</div>
				</div>				 -->
			</div>
		</div>
	</div>
    <!-- .Blog -->

	<!-- Team -->
	<!-- <div class="home-team mt-50">
		<div class="container">
			<div class="title-main text-center">
				<h2 class="product-title">Team Members</h2>
				<p class="title-desc">OUR LEADERSHIP</p>
			</div>	
			<div class="team-carousel owl-carousel">				
				<div class="single-team-box">
					<div class="team-image">
						<img src="assets/images/testimonial/team-1.jpg" alt="team">
					</div>
					<div class="team-info">
						<h3>Liam Berry</h3>
						<span>CEO</span>
						<div class="team-social-icon">
							<a href="#"><i class="fa-brands fa-facebook-f"></i></a>
							<a href="#"><i class="fa-brands fa-twitter"></i></a>
							<a href="#"><i class="fa-brands fa-linkedin"></i></a>
						</div>
					</div>
				</div>
				<div class="single-team-box">
					<div class="team-image">
						<img src="assets/images/testimonial/team-2.jpg" alt="team">
					</div>
					<div class="team-info">
						<h3>Georage Lara</h3>
						<span>Co-founder</span>
						<div class="team-social-icon">
							<a href="#"><i class="fa-brands fa-facebook-f"></i></a>
							<a href="#"><i class="fa-brands fa-twitter"></i></a>
							<a href="#"><i class="fa-brands fa-linkedin"></i></a>
						</div>
					</div>
				</div>
				<div class="single-team-box">
					<div class="team-image">
						<img src="assets/images/testimonial/team-3.jpg" alt="team">
					</div>
					<div class="team-info">
						<h3>William Joseph</h3>
						<span>Managing Director</span>
						<div class="team-social-icon">
							<a href="#"><i class="fa-brands fa-facebook-f"></i></a>
							<a href="#"><i class="fa-brands fa-twitter"></i></a>
							<a href="#"><i class="fa-brands fa-linkedin"></i></a>
						</div>
					</div>
				</div>
				<div class="single-team-box">
					<div class="team-image">
						<img src="assets/images/testimonial/team-4.jpg" alt="team">
					</div>
					<div class="team-info">
						<h3>Nova Wallace</h3>
						<span>Exchange Specialist</span>
						<div class="team-social-icon">
							<a href="#"><i class="fa-brands fa-facebook-f"></i></a>
							<a href="#"><i class="fa-brands fa-twitter"></i></a>
							<a href="#"><i class="fa-brands fa-linkedin"></i></a>
						</div>
					</div>
				</div>
				<div class="single-team-box">
					<div class="team-image">
						<img src="assets/images/testimonial/team-5.jpg" alt="team">
					</div>
					<div class="team-info">
						<h3>Nims Willian</h3>
						<span>Manager</span>
						<div class="team-social-icon">
							<a href="#"><i class="fa-brands fa-facebook-f"></i></a>
							<a href="#"><i class="fa-brands fa-twitter"></i></a>
							<a href="#"><i class="fa-brands fa-linkedin"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div> -->
	<!-- .Team -->

	<!-- Need Help -->
	<div class="need_help mt-50">
		<div class="container">
			<div class="title-main text-center">
				<h2 class="product-title">Need help?</h2>
			</div>			
			<div class="help_section">
				<div class="row">
					<div class="col-md-4">
						<div class="help_block">
							<div class="icons"><i class="icon-support"></i></div>
							<div class="help_info">
								<div class="help_info_title">24/7 Chat Support</div>
								<div class="help_info_desc">Get 24/7 chat support with our friendly customer service agents at your service.</div>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="help_block">
							<div class="icons"><i class="icon-faqs"></i></div>
							<div class="help_info">
								<div class="help_info_title">FAQs</div>
								<div class="help_info_desc">View FAQs for detailed instructions on specific features.</div>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="help_block">
							<div class="icons"><i class="icon-blog"></i></div>
							<div class="help_info">
								<div class="help_info_title">Blog</div>
								<div class="help_info_desc">Stay up to date with the latest stories and commentary.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	

	<?php include('./footer2.php');?>
	<!-- .FOOTER AREA -->

	<!-- Main jquery js -->	
	<script data-cfasync="false" src="cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script type="text/javascript" src="assets/js/vendor/jquery-3.2.1.min.js"></script>
	<!-- bootstrap js -->	
	<script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
	<!-- owl-carousel js -->	
	<script type="text/javascript" src="assets/js/owl.carousel.min.js"></script>
	<!-- scrollUp js -->	
	<script type="text/javascript" src="assets/js/jquery.scrollUp.js"></script>
	<!-- wow js -->	
	<script type="text/javascript" src="assets/js/wow.js"></script>
	<!-- animated text js -->	
	<script type="text/javascript" src="assets/js/animated-text.js"></script>
	<!-- Main js -->	
	<script type="text/javascript" src="assets/js/theme.js"></script>
	
	</body>

<!-- Mirrored from cryptcohtml.themability.com/index.php by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 21 Jan 2023 04:19:57 GMT -->
</html>