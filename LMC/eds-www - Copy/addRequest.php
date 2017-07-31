<?php
$mysqli = new  mysqli("127.0.0.1",'lmcdata', '' , "lmcdata");
$tname = $_GET['user'];
$acid = $_GET['otheruser'];
$stringarray = $_GET['des'];
$check = "SELECT * FROM " . $tname . " WHERE username='" . $acid . "'";
$qer = $mysqli->query($check);
$res = $qer->fetch_assoc();
if($res == 0){ 
$qstring = "INSERT  INTO " . $tname . "(username , descript) VALUES('" . $acid . "' , '" . $stringarray . "')" ;
$result = $mysqli->query($qstring);
echo $_GET['callback'] . "({'success':'" . $qstring  . "'})";
}
else{
echo $_GET['callback'] . "({'success':'false'})"; }
?> 