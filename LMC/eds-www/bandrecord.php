<?php
$mysqli =  new mysqli("127.0.0.1" ,"lmcdata" , '' , "lmcdata");
$username= $_GET['username'];
$password = $_GET['password'];
$result = $mysqli->query("SELECT * FROM band_account WHERE username='$username' AND password='$password'");
$row = $result->fetch_assoc();
$bio = $row['band_bio'];
$name =$row['name'];
//$bandreq = $row['requested_venues_id'];
$requests =$row['band_requests_id'];
$contactinfo = $row['contact_info'];
// contains active  ad bool for venue also contains date and time of event
$active = $row['active'];
if($name == ''){
	echo $_GET['callback'] . '(' . "{ 'enable' : '0', 'bio' : '', 'name' : '', 'active' : '', 'requests' : '', 'requests_from' : ''}" . ')';

}
else{
	echo $_GET['callback'] . '(' . "{ 'enable' : '1', 'bio' : '$bio', 'name' : '$name', 'active' : '$active', 'requests' : '', 'requests_from' : '$requests', 'contactinfo' : '$contactinfo' }" . ')';

}

?>