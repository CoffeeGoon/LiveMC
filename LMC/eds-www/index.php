
<?php
$mysqli =  new mysqli("lmc.konghexdev.x10host.com" ,"konghexd_LMCuser" , "BoldPassword23" , "konghexd_LMC");
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

