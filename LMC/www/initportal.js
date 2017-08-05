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
var reqname = "";
var namrg;
var tokens = new Array(3);
 var users = new Array();
 var descripts = new Array();
var request = function(num){
          //alert("poop");
          var acname = users[num];
          var descript = descripts[num];
          reqname = tokens[2] + "requests_" + tokens[0].toLowerCase();
           var stri = "http://127.0.0.1/addRequest.php?callback=?&user=" + reqname + "&otheruser=" + acname +"&des=" + descript;
           //alert(stri);
         $.getJSON(stri, function(t){
          document.location.reload();
           });

         };




var inflate = function(e){
  var reqname = e.requests;
	if(e.enable != '1'){
      $('#innards').remove();
    $('#deny').show();
    $('#deny').css('color', 'white');
}
else{
 document.getElementById('bannertext').innerHTML= "<br>" + e.name + "<br>";
 var output = document.getElementById("pagespace");
 var tes = e.name;
 //<td id="contactinfo"></td><td id="setvisibility"></td><td id="pagedescription"></td><td id="internalrequests"></td><td id="externalrequests">
//create onclick listeners for td to fill in result space
$('#contactinfo').click( function(x){
  $("#lis").hide().listview("refresh");
  output.innerHTML=  e.contactinfo + "<br>Change: <input id='conchange' type='text'> </input> <br> <div id='consub'>submit</div>";
  $("#consub").click(function(m){
    alert($('#conchange').val());
  });
});	
$('#setvisibility').click( function(x){
  $("#lis").hide().listview("refresh");
  if(e.active == 'false'){
      output.innerHTML = tes  + " is currently disabled would you like to set your account to active? <br> <div style='color:white' id='atog'>toggle </div>";
   $("#atog").click(function(k){
    if(tokens[2] == 'venue'){
      $("#activeinfo").show();
      $("#actpost").click(function(r){
      var nuactive = document.getElementById("month").value + " " + document.getElementById("day").value + " " + document.getElementById("year").value + " " + document.getElementById("time").value;
      var url = "http://127.0.0.1/toggleactive.php?callback=?&typ=venue&user=" + tokens[0] + "&value=" + nuactive;
      $.getJSON(url, function(z){ window.location.reload();});
    });
    }
    else{
        var url =  "http://127.0.0.1/toggleactive.php?callback=?&typ=band&user=" + tokens[0] + "&value=true";
    $.getJSON(url, function(z){window.location.reload();});

    }
 });

  }
  else{
    output.innerHTML = tes + " is currently active and visible to other users would you like to deactivate your visibility? <br> <div style='color:white' id='atog'>toggle </div>";
     $("#atog").click( function(k){
         var url =  "http://127.0.0.1/toggleactive.php?callback=?&typ="+ tokens[2] + "&user=" + tokens[0] + "&value=false";  
          $.getJSON(url, function(z){window.location.reload();}); 
    });
  }

});
$('#pagedescription').click( function(x){
  $("#lis").hide().listview("refresh");
     output.innerHTML="<div style='text-align:right' id='editp'> Edit </div>" + e.bio + "<br> <textarea id='parachange'style='font-family:baus; font-size:28px; font-weight:bold' id='acbio' rows='12' cols='50'>" +
  "</textarea> <br> <div id='changebio' > submit </div> <br>";
  $('#changebio').hide();
  $("#parachange").hide();
  $('#editp').click( function(m){
     $('#changebio').toggle();
  $("#parachange").toggle();

  });
  $('#changebio').click(function(m){
        alert($('#parachange').val());     

  });

});	
$('#internalrequests').click( function(x){
  $("#lis").hide().listview("refresh");
       var markup = "<br><u> <div  id='req'>REQUESTS__</div> <div id='actchoices'>_ACTIVE PROFILES</div> </u> <br> <br>"; 
       output.innerHTML = markup;
     // $("#space").append("<ul id='profiles' data-role='listview' data-inset='true' data-divider-theme='d'> </ul>'");
      // $("#profiles").listview("refresh");
       var url = "http://127.0.0.1/accountrequests.php?callback=?";
       $.getJSON(url, { usrid : tokens[0], type : tokens[2]}, function(k){
          var ready = 0;         
      $('#actchoices').click(function(){ 
          $('li').remove();
           $('#lis').show();
           users = new Array();
           descripts = new Array();
        for( var i = 0; i < k.available.length; i++){

          var block = "";
        for(var j = 0; j < k.available[i].length - 1; j++){
         
            block = block + k.available[i][j] + "  <br>"
      }
        namrg = k.available[i][k.available[i].length - 1];
       users.push(namrg);

       displayvalue = k.available[i][0];
       if(k.available[i].length > 3){ displayvalue = displayvalue + " " + k.available[i][1];}
       descripts.push(displayvalue);
      block = "<li data-role='list-divider'>" + block + " <li onClick='request(" + i + ")' id='Item" +  i + "'>Request </li></li>"; 
     // alert(block); onclick='request('" + namrg + "','" +  displayvalue +"'')'
        $('#lis').append(block).listview("refresh");
         
        //$('#Item').children().last().click( request(namrg, displayvalue) );
           //var sel = "#Item" + i ;
      
      }
  //$('#Item0').click(alert(users[0]));
      
    });
     


      $('#req').click(function(){
        $('li').remove();
         $('#lis').show();
        for( var i = 0; i < k.requests.length; i++){
        
        $('#lis').append( "<li data-role='list-divider'>" + k.requests[i] + "</li>").listview("refresh");
      }

      });



       });
      // populate with php file request for specific table
      // alternatively create side tab that shows all active selections
      //list views
});	
$('#externalrequests').click( function(x){
  output.innerHTML = "";
  $('li').remove();
  $('#lis').show();
 var url = "http://127.0.0.1/externalrequests.php?callback=?&user=" + tokens[0] + "&type=" + tokens[2];
 $.getJSON(url, function(exr){
   for(var n = 0; n < exr.extrequests.length; n++){
     var tok = "<li data-role='list-divider'>" + exr.extrequests[n] + "</li>";
     $('#lis').append(tok).listview("refresh");
   }
 });
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


