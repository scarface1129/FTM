<?php 
die();
function dailyInvestment($conn){
	$sql = "SELECT * FROM investmentactive WHERE InvestmentActive = 'YES'";
	$result = mysqli_query($conn, $sql);
	$users = mysqli_fetch_all($result,MYSQLI_ASSOC);
	mysqli_free_result($result);
	foreach ($users as $user) {
		if($user['InvestmentType'] == 'Starter'){
			$days = 10;
			$percent = 0.02;
		}
	if($user['InvestmentType'] == 'Regular'){
		$days = 5;
		$percent = 0.04;
		}
	if($user['InvestmentType'] == 'Business'){
		$days = 5;
		$percent = 0.07;
		}
	if($user['InvestmentType'] == 'Executive'){
		$days = 10;
		$percent = 0.1;
		}
	if($user['InvestmentType'] == 'Apex'){
		$days = 10;
		$percent = 0.15;
		}

		$intrest = $percent * $user['Amount_Funded'];
		$ROI = $intrest * 5;
		$dailyIntrest = $intrest/$days;
		$totalEarning = $dailyIntrest + $user['Amount_Earned']; 
		$id = $user['userId'];
        $sql = "UPDATE `investmentactive` SET `Amount_Earned_Today` = '$dailyIntrest', Amount_Earned = $totalEarning WHERE userId = '$id';";
		mysqli_query($conn, $sql);

	}
}

?>