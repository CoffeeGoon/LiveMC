//initalizes main account page reads stored password and username from file and
// verifies account existance in the backend. if account does not exist then
// puts up a page needs verification alternate

var contactinfo;
var bio;
var availableconnects = new Array();
var requests = new Array();
var requeststo = new Array();
var active;
var name;

var tokens = new Array(3);

var inflate = function(e){
	if(e.enable != '1'){
      $('#innards').remove();
    $('#deny').show();
    $('#deny').css('color', 'white');
}
else{
 document.getElementById('bannertext').innerHTML= "<br>" + e.name + "<br>";
 var output = document.getElementById("pagespace");
 //<td id="contactinfo"></td><td id="setvisibility"></td><td id="pagedescription"></td><td id="internalrequests"></td><td id="externalrequests">
//create onclick listeners for td to fill in result space
$('#contactinfo').click( function(x){
 
  output.innerHtml=  e.active;
});	
$('#setvisibility').click( function(x){
   var flag = '|';
  var split = 0;
  for(split; split < e.active.length; split++){
    if(e.active.substring(split, split + 1) == flag){
      break;
    }
  }
  var actv = e.active.substring(0, split);
  var dt = e.active.substring(split + 1, e.active.length);
  if(actv = 'true'){
    if(tokens[2] == "band"){
   output.innerHtml =  "your account is visible to other users <br> <button id='toggle'>activate here </button>  <script> $('#toggle').click(); </script>";
 }
 else{
  output.innerHtml ="your account is visible to other users here is what they will see" + e.name + " " + dt +"<br> <button id='toggle'>activate here </button>  <script> $('#toggle').click(); </script>";
 }
  }
   else{
    output.innerHtml = "your account is innactive <br> <button id='toggle'>activate here </button> <script> $('#toggle').click(); </script>";

   }

});
$('#pagedescription').click( function(x){
     output.innerHtml =  e.bio;
});	
$('#internalrequests').click( function(x){
      // populate with php file request for specific table
      // alternatively create side tab that shows all active selections
      //list views
});	
$('#externalrequests').click( function(x){
    //populate with all opposite entries that have requested this account all active accounts->requested_id->name = e.name
});

}

	}

var addr = window.location.href;
var look = window.location.search.substring(1);
var vars = look.split('&');
for(var i = 0; i < vars.length; i++){
   var pair = vars[i].split("=");
    tokens[i] = pair[1];
}

if(tokens[2] == "band"){
var url = 'http://127.0.0.1/bandrecord.php?callback=?&username=' + tokens[0] + "&password=" + tokens[1];
	$.getJSON(url, inflate);
}
else{
   var url = 'http://127.0.0.1/venuerecord.php?callback=?&username=' + tokens[0] + "&password=" + tokens[1];
	$.getJSON(url, inflate);
}


