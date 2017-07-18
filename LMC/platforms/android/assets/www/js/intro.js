var testbandusr = "dicksticks";
var testbandpw = "password";
var testhostusr = "bighouse";
var testhostpw = "password";
var musicanaccount = document.getElementById("musicanlogin");
var venueaccount = document.getElementById("venue");

musicanaccount.addEventListener("click", function(e){
var user = document.getElementById("usr").value;
var password = document.getElementById("password").value;
if(user == testbandusr && password == testbandpw){
	alert("match");
}

}
);

venueaccount.addEventListener("click", function(e){
var user = document.getElementById("usr").value;
var password = document.getElementById("password").value;
if(user == testhostusr && password == testhostpw){
	alert("match");
}
});
