<?php

$msqli = new mysqli("127.0.0.1" ,"lmcdata" , '' , "lmcdata");
$usern = $_GET['user'];
$qstring = "SELECT password FROM band_accounts WHERE username='$usern'"  ;
$keyvalue = $msqli->query($qstring);
$return = $keyvalue->fetch_assoc();
$pw = $return['password'];
echo $_GET['callback'] . '(' . "{'retvalue' : '$pw'}" . ')';


?>