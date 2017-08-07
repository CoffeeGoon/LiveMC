<?php
$id = $_GET['user'];
$val = $_GET['value'];
$typ = $_GET['typ'];
$mysqli =  new mysqli("lmc.konghexdev.x10host.com" ,"konghexd_LMCuser" , "BoldPassword23" , "konghexd_LMC");
$tname = "band_account";
if($typ != "band" ){ $tname = "venue_account";}
$statement = "UPDATE " . $tname . " SET active= '" . $val . "' WHERE username = '" . $id . "' "; 
$return = $mysqli->query($statement);
echo $_GET['callback'] . "( { 'good' : 'done' } )" ;
?>