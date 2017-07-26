<?php

$msqli = new mysqli("127.0.0.1","lmclogin", '' , "lmcaccounts");
$keyvalue = $msqli->query("SELECT username, password FROM vennue_accounts");
$return = $keyvalue->fetch_assoc();
while($return != 0){

$GET[$return["username"]] = $return["password"];

}

?>