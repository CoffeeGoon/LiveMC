<?php
$mysqli =  new mysqli("lmc.konghexdev.x10host.com" ,"konghexd_LMCuser" , "BoldPassword23" , "konghexd_LMC");
$args = array(7);
$args[0] = $_GET['use'];
$args[1] = $_GET['password'];
$args[2] = $_GET['name'];
$args[3] = $_GET['contact'];
$args[4] = $_GET['abio'];
 if($_GET['type'] == 'band'){
  $breq = "bandrequests_" . $args[0];
  $q1 = "INSERT INTO band_account (username, password, name, contact_info, active, band_requests_id, band_bio) VALUES ( '" . $args[0] . "' , '" . $args[1] . "' ,'" . $args[2] . "' , '" . $args[3] . "' , 'false' , '" . $breq . "' , '" . $args[4] . "')";
 $init = $mysqli->query( $q1);
 $init = $mysqli->query("INSERT INTO band_accounts (username, password) VALUES ('" . $args[0] . "', '" . $args[1] . "')");
 $init = $mysqli->query("CREATE TABLE $breq(username varchar(40), descript varchar(60))");
}
else{
$breq = "venuerequests_" . $args[0];
 $q1 ="INSERT INTO venue_account (username, password, name, contact_info, active, venue_requests_id, venue_bio) VALUES ( '" . $args[0] . "' , '" . $args[1] . "' ,'" . $args[2] . "' , '" . $args[3] . "' , 'false' , '" . $breq . "' , '" . $args[4] . "')";
 $init = $mysqli->query( $q1);
 $init = $mysqli->query("INSERT INTO venue_accounts (username, password) VALUES ('" . $args[0] . "', '" . $args[1] . "')");
 $init = $mysqli->query("CREATE TABLE $breq(username varchar(40), descript varchar(60))");
}

//echo $q1 . " ";

echo $_GET['callback'] . "(" . "{ 'return' : 'yes'  }" . ")";

?>