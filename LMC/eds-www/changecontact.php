<?php
$mysqli = new mysqli("127.0.0.1", "lmcdata", '', 'lmcdata');
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