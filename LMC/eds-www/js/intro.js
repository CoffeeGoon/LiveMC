
var access = false;
var musicanaccount = document.getElementById("musicanlogin");
var venueaccount = document.getElementById("venue");
var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function(){
if(this.readyState == 4 && this.status == 200){
  if(ajax.responseText == ""){
    alert(" no user with this name");

  }
  else{
     var user = document.getElementById("usr").value;
    var password = document.getElementById("password").value;
    if( password != ajax.responseText){
      var response = "incorrect password correct password " + ajax.responseText;
      alert(response);

    }
    else{
       alert("correct username password combination");

    }

  }


}


}


musicanaccount.addEventListener("click", function(e){
	var url = "bandpasscheck.php?pw&usr=" + document.getElementById("usr").value;
ajax.open("GET",url, true );
ajax.send();
}
);

venueaccount.addEventListener("click", function(e){
var url = "hostpasscheck.php?pw&usr=" + document.getElementById("usr").value;
ajax.open("GET",url, true );
ajax.send();
}
);
