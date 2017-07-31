<?php
$id = $_GET['user'];
$val = $_GET['value'];
$typ = $_GET['typ'];
$mysqli = new mysqli("127.0.0.1",'lmcdata', '' , "lmcdata");
$tname = "band_account";
if($typ != "band" ){ $tname = "venue_account";}
$statement = "UPDATE " . $tname . " SET active= '" . $val . "' WHERE username = '" . $id . "' "; 
$return = $mysqli->query($statement);
echo $_GET['callback'] . "( { 'good' : 'done' } )" ;
?>