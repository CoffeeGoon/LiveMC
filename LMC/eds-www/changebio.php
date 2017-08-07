<?php
$mysqli =  new mysqli("lmc.konghexdev.x10host.com" ,"konghexd_LMCuser" , "BoldPassword23" , "konghexd_LMC");
$bio = $_GET['newbio'];
$account = $_GET['acname'];
$type = $_GET['ty'];
$val = "band_bio";
if($type != "band_account"){ $val = "venue_bio"; }
$check = "SELECT name FROM " . $type . " WHERE username='" . $account . "'";
$res = $mysqli->query($check);
if($res->fetch_assoc() != 0){
$query = "UPDATE " . $type . " SET " . $val . "='" . $bio . "' WHERE username='" . $account . "'";
$mysqli->query($query);
echo $_GET['callback'] . '(' . "{ 'success':'1' }" . ")";
}
else{
echo $_GET['callback'] . '(' . "{ 'success':'0' }" . ")";

}

?>