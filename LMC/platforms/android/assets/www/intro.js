var clicked;
var musicanaccount = document.getElementById("musicanlogin");
var venueaccount = document.getElementById("venue");
var callbac = function(e){
	
  if(e.retvalue == "0"){
    alert(" no user with this name");

  }
  else{
     var user = document.getElementById("usr").value;
    var password = document.getElementById("password").value;
    if( password != e.retvalue){
      alert("incorrect password");

    }
    else{
     // fs.open("password.txt", 'w');
      //fs.writefile("password.txt", e.retvalue);
      //fs.close();
      //fs.open("username.txt", 'w');
      //fs.writefile('username.txt', document.getElementById('usr'));
      var url = "initportal.html?username=" + document.getElementById("usr").value + "&password=" + e.retvalue +"&type=" + clicked; 
      window.location.assign(url);
    }

  }
}


musicanaccount.addEventListener("click", function(e){
  clicked = "band";
	var url = "http://127.0.0.1/bandpasscheck.php?callback=?&user=" + document.getElementById("usr").value;
	$.getJSON(url, callbac);

}
);

venueaccount.addEventListener("click", function(e){
  clicked = "venue";
var url = "http://127.0.0.1/hostpasscheck.php?callback=?&user=" + document.getElementById("usr").value;
$.getJSON(url, callbac);
}
);
