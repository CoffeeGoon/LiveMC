<?php

$mysqli =  new mysqli("lmc.konghexdev.x10host.com" ,"konghexd_LMCuser" , "BoldPassword23" , "konghexd_LMC");
$usern = $_GET['user'];
$qstring = "SELECT password FROM venue_accounts WHERE username='$usern'"  ;
$keyvalue = $mysqli->query($qstring);
$return = $keyvalue->fetch_assoc();
$pw = $return['password'];
echo $_GET['callback'] . '(' . "{'retvalue' : '$pw'}" . ')';


?>