
<?php
$mysqli = new mysqli("127.0.0.1:3306", "", "lmcaccounts");
$getexample = $mysqli->query("SELECT *  AS _message FROM 'band_accounts' WHERE username="dicksticks"");
$return = $getexample->fetch_assoc();
echo "alert(" +$return[_message] + ")" ;


?>