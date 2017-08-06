var testbandusr = "dicksticks";
var testbandpw = "password";
var testhostusr = "bighouse";
var testhostpw = "password";
var access = false;
var musicanaccount = document.getElementById("musicanlogin");
var venueaccount = document.getElementById("venue");
var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function(){
if(this.readyState == 4 && this.status == 200){
  if(ajax.responseText == "0"){
    alert(" no user with this name");

  }
  else{
     var user = document.getElementById("usr").value;
    var password = document.getElementById("password").value;
    if( password != ajax.responseText){
      alert("incorrect password");

    }
    else{
       alert("correct username password combination");

    }

  }


}


}


musicanaccount.addEventListener("click", function(e){
	var url = "http://127.0.0.1/bandpasscheck.php/" + document.getElementById("usr").value;
ajax.open("GET",url, true );
ajax.send();
}
);

venueaccount.addEventListener("click", function(e){
var url = "http://127.0.0.1/hostpasscheck.php/" + document.getElementById("usr").value;
ajax.open("GET",url, true );
ajax.send();
}
);
