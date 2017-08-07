<?php
$mysqli =  new mysqli("lmc.konghexdev.x10host.com" ,"konghexd_LMCuser" , "BoldPassword23" , "konghexd_LMC");
$account = $_GET['acname'];
$newcontact = $_GET['info'];
$type = $_GET['ty'];
$val = "contact_info";
$check = "SELECT name FROM " . $type . " WHERE username='" . $account . "'";
$res = $mysqli->query($check);
if($res->fetch_assoc() != 0){
$query = "UPDATE " . $type . " SET " . $val . "='" . $newcontact . "' WHERE username='" . $account . "'";
$mysqli->query($query);
echo $_GET['callback'] . '(' . "{ 'success':'1' }" . ")";
}
else{
echo $_GET['callback'] . '(' . "{ 'success':'0' }" . ")";

}

?>