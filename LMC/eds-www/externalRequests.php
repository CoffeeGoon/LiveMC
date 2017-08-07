<?php
$mysqli =  new mysqli("lmc.konghexdev.x10host.com" ,"konghexd_LMCuser" , "BoldPassword23" , "konghexd_LMC");
$typ = $_GET['type'];
$match =  array();
$qstring = "SELECT * FROM  venue_account";
$link = "venue_requests_id";
if($typ != 'band'){
$qstring = "SELECT * FROM band_account";
$link = "band_requests_id";
}

$retarray = "extrequests :[ ";
$contacts = "cont : [";
$mysqli =  new mysqli("127.0.0.1" ,"lmcdata" , '' , "lmcdata");
$query = $mysqli->query($qstring);
$result = $query->fetch_assoc();
while($result != 0){
$val =  strtolower($result[ $link ]);
//echo $val . " ";
$qstringB = "SELECT descript FROM "	. $val . " WHERE username='" . $_GET['user'] . "'";
$subres = $mysqli->query($qstringB);
$assoc = 0;
if($subres){
$assoc = $subres->fetch_assoc();
}
//echo $qstringB . " ";
if($assoc != 0){
  $contacts = $contacts . " '" . $result['contact_info'] . "',";
 if($typ != "band"){
 $retarray = $retarray . " '" . $result['name'] . "',";
}
else{
	 $retarray = $retarray . " '" . $result['name'] . " " . $result['active'] . "',";
}
}
$result = $query->fetch_assoc();
}

$retarray = substr($retarray, 0 , strlen($retarray) - 1) . "]";
$contacts = substr($contacts, 0 , strlen($contacts) - 1) . "]";
echo $_GET['callback'] . "(" . "{" . $retarray . ", " . $contacts . "}" . ")";
?>