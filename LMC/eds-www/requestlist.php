<?php
$type = $_GET['req_id'];
$mysqli =  new mysqli("lmc.konghexdev.x10host.com" ,"konghexd_LMCuser" , "BoldPassword23" , "konghexd_LMC");
echo $type . "  ";
$query = $mysqli->query("SELECT * FROM $type");
$jsonString = "{ ";
$item = "'item";
$count = 0;
$result = $query->fetch_assoc();
while($result != 0){
	$append = $item . $count . "' : '" . $result['name'] . "', ";
	//echo " " . $append;
	$jsonString = $jsonString . $append;
	$count = $count + 1;
	$result = $query->fetch_assoc();
}
$trim = $jsonString;
if($count > 0){
$trim = substr($jsonString, 0, strlen( $jsonString) - 2);
}
$msg = "contents " . "(" . $trim . "}" . ")";
echo $msg;


?>