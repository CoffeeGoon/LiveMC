
<?php
$mysqli = new mysqli("127.0.0.1",'lmcdata', '' , "lmcdata");
$getexample = $mysqli->query("SELECT username, password FROM band_accounts");
$return = $getexample->fetch_assoc();
while( $return != 0){
echo $return["username"];  
echo "   ";
echo $return["password"];
echo "   ";
$return = $getexample->fetch_assoc();
}
?>

