<?php

$serverName = "localhost";
$dBUserName = "root";
$dBPassword = "";
$dBName = "cryptowiseinc";

$conn = mysqli_connect($serverName, $dBUserName, $dBPassword, $dBName);

$tabledrop = mysqli_query($conn, "DROP TABLE cryptomarket");
$tablecreate = mysqli_query($conn, "CREATE TABLE cryptomarket(Id int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
coinName varchar(128) NOT NULL,
coinSymbol varchar(128) NOT NULL,
coinPrice varchar(128) NOT NULL,
coinPercentChange varchar(128) NOT NULL)");
if($tabledrop !== FALSE)
{
   echo("This table has been deleted.");
}else{
   echo("This table has not been deleted.");
}
$sql = "DELETE FROM MyGuests WHERE id=3";

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://l4chsalter-alternative-me-crypto-v1.p.rapidapi.com/v2/ticker/?limit=7&structure=array",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => [
    "x-rapidapi-host: l4chsalter-alternative-me-crypto-v1.p.rapidapi.com",
    "x-rapidapi-key: fea82aca20msh09e0680190c7a7ep178f22jsna58827443fdf"
  ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
}

    $itemsObject = json_decode($response, true);

  $items = array();

  for ($i=0; $i <=5 ; $i++) {
        $obj = (object) array('name' => $itemsObject["data"][$i]["name"], 'symbol' => $itemsObject["data"][$i]["symbol"],'price' => $itemsObject["data"][$i]["quotes"]["USD"]["price"], 'percentage' => $itemsObject["data"][$i]["quotes"]["USD"]["percentage_change_24h"]);
        array_push($items, $obj);
  }


  foreach ($items as $value) {
    $cryptoname = $value->name;
    $cryptosymbol = $value->symbol;
    $cryptoprice = $value->price;
    $cryptopercentage = $value->percentage;
    $sql = "INSERT INTO cryptomarket (coinName, coinSymbol, coinPrice, coinPercentChange) VALUES ('$cryptoname', '$cryptosymbol', '$cryptoprice', '$cryptopercentage');";
    if($conn->query($sql) === TRUE){
    }
  }

  function withdrawRequest($conn, $withdrawUser, $withdrawalAmt, $blockchainAdd) {
  $sql = "INSERT INTO withdraw (userName, withdrawAmt, blockchainAdd) VALUES ('$withdrawUser', '$withdrawAmt', '$blockchainAdd');";
      if($conn->query($sql) === TRUE){
    }
    echo $withdrawalAmt;
    echo $blockchainAdd;
    echo $withdrawUser;
}
?>