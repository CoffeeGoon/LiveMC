<?php
$mysqli =  new mysqli("lmc.konghexdev.x10host.com" ,"konghexd_LMCuser" , "BoldPassword23" , "konghexd_LMC");
$availablebandquery = "SELECT name FROM band_account WHERE active=1";
$availablehostquery = "SELECT name FROM venue_account WHERE active=1";
$allbands = "SELECT * FROM band_account";
$allhosts = "SELECT * FROM venue_account";
$batablename = 'bandrequests_';
$vatablename = 'venuerequests_';
$query = $mysqli->query("SELECT * FROM band_account");
$result = $query->fetch_assoc();
while($result != 0){
 $name = $batablename . $result['username'];
 $mysqli->query("CREATE TABLE $name(name varchar(40))");
 $name = 'venue_requests_of_' + $result['username'];
 $mysqli->query("CREATE TABLE $name( varchar(40)  name) ");
$result = $query->fetch_assoc();
}

$query = $mysqli->query($allhosts);
$result = $query->fetch_assoc();

while($result != 0){
	$name = $vatablename . $result['username'];
    $mysqli->query("CREATE TABLE $name(name varchar(40)) ");
    $name = 'band_requests_of_' + $result['username'];
    $mysqli->query("CREATE TABLE $name( name varchar(40)) ");
    $result = $query->fetch_assoc();
}

?>