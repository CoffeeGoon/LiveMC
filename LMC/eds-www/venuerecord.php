<?php
$mysqli =  new mysqli("lmc.konghexdev.x10host.com" ,"konghexd_LMCuser" , "BoldPassword23" , "konghexd_LMC");
$usr = $_GET['username'];
$pass = $_GET['password'];
$result = $mysqli->query("SELECT * FROM venue_account WHERE username='$usr' AND password='$pass'");
$row = $result->fetch_assoc();
$bio = $row['venue_bio'];
$name =$row['name'];
$venuereq = $row['venue_requests_id'];
//$requests =$row['requested_bands_id'];
$contactinfo = $row['contact_info'];
$active = $row['active'];
if($name == ''){
	echo $_GET['callback'] . '(' . "{ 'enable' : '0', 'bio' : '', 'name' : '', 'active' : '', 'requests' : '', 'requests_from' : '' }" . ')';

}
else{
	echo $_GET['callback'] . '(' . "{ 'enable' : '1', 'bio' : '$bio', 'name' : '$name', 'active' : '$active', 'requests' : '$venuereq', 'requests_from' : '', 'contactinfo' : '$contactinfo'}" . ')';
}

?>