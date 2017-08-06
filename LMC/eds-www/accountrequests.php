<?php
$val = $_GET["usrid"];
$tp = $_GET["type"];
$msqli = new mysqli("127.0.0.1", "lmcdata", '', "lmcdata");
$tablename = "venuerequests_";
if($tp == "band"){$tablename = "bandrequests_";}
$val = $tablename . strtolower($val);
$data = $msqli->query("SELECT * FROM " . $val );
$callb = $_GET['callback'] . "(" . "{ ";
$jsarray = " 'requests':[";
$avail = " 'available': [";
$ret = $data->fetch_assoc();
$countA = 0;
$countB = 0;
while($ret != 0){
	$jsarray =  $jsarray . "'" . $ret['descript'] . "',";
	$countA = $countA + 1;
	$ret = $data->fetch_assoc();
}
If($tp == "venue"){
$data = $msqli->query("SELECT name, band_bio, username FROM band_account where band_account.active != 'false' ");
$ret = $data->fetch_assoc();
while($ret != 0){
	 $add = " [ '" . $ret['name'] . "', '" . $ret['band_bio'] . "' , '" .  $ret['username'] . "'],";
	$avail = $avail . $add;
	$countB = $countB + 1;
	$ret = $data->fetch_assoc();
}
}
else{
$data = $msqli->query("SELECT name, active, venue_bio, username FROM venue_account where venue_account.active != 'false' ");
	$ret = $data->fetch_assoc();
while($ret != 0){
	$add = " [ '" . $ret['name'] . "', '" . $ret['active'] . "' , '" . $ret['venue_bio'] . "' , '" .  $ret['username'] . "'],";
	$avail = $avail . $add;
	$countB = $countB + 1;
	$ret = $data->fetch_assoc();
}
}
if($countA > 0){  $jsarray =  substr($jsarray, 0 , strlen($jsarray) - 1); }
if($countB > 0){ $avail = substr($avail , 0, strlen($avail) - 1);}
$callb = $callb . $jsarray . "] , "  . $avail . "] }" . ")";
echo $callb;
?>