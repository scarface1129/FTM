<?php

include_once 'dbconnection.php';

function escapeJsonString($value) { 
    $escapers = array("\'");
    $replacements = array("\\/");
    $result = str_replace($escapers, $replacements, $value);
    return $result;
}


$curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://coingecko.p.rapidapi.com/coins/bitcoin-cash/market_chart?vs_currency=usd&days=1",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => [
		"x-rapidapi-host: coingecko.p.rapidapi.com",
		"x-rapidapi-key: fea82aca20msh09e0680190c7a7ep178f22jsna58827443fdf"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
    $implodeprice = [];
    $prices = [];

	$response = escapeJsonString($response);
    $response = json_decode($response, true);
    // echo $response;
    // print("<pre>".print_r($response, true)."</pre>");
    for($i = 0; $i < 18; $i++){
        $pricespush = array_push($prices, $response['prices'][$i][1]);
    }

    $currentPrice = $prices[0];
    $implode = implode(",", $prices);

    $sql2 = "UPDATE cryptoPrice SET currentPrice = ?, AllPrices = ? WHERE id = ?;";
	$stmt2 = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt2, $sql2)){
		header("Location: crypto.php?error=stmtfailed");
		exit();
	}
    $userid = 1;
    print_r($implode);
    
	mysqli_stmt_bind_param($stmt2, "sss", $currentPrice, $implode, $userid);
	mysqli_stmt_execute($stmt2);
	mysqli_stmt_close($stmt2);
    // $price = $response['market_data']['current_price']['usd'];
    // echo $price;
}

