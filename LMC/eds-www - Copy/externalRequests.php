<?php
$lookstring = $_GET['type'] . "requests_";
$typ = $_GET['type'];
$match = new array();
$qstring = "SELECT * FROM  band_account";
$link = "band_requests_id";
if($typ != 'band'){
$qstring = "SELECT * FROM venue_account";
$link = "venue_requests_id";
}

$retarray = "extrequests :[ ";

$mysqli =  new mysqli("127.0.0.1" ,"lmcdata" , '' , "lmcdata");
$query = $mysqli->query($qstring);
$result = $query->fetch_assoc();
while($result != 0){
$val = $result["'" . $link . "'"];
$qstringB = "SELECT descript FROM "	. $val . "WHERE name='" . $result['username'] . "'";
$subres = $mysqli->query($qstringB);
if($subres != 0){
 $assoc = $subres->fetch_assoc();	
 $retarray = $retarray . " '" $assoc['descript'] . "',";
}
$result = $query->fetch_assoc();
}

$retarray = substr($retarray, 0 , strlen($retarray) - 1) . "]";
echo $_GET['callback'] . "(" . "{" . $retarray . "}" . ")";
?>