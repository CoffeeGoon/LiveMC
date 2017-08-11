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
 
 var del = function(i){
  alert(i);
  var username = requests(i);
  var call = "http://lmc.konghexdev.x10host.com/deleterequest.php?callback=?";
  $.getJSON(call, { user : tokens[0], type : tokens[2], otheruser : username}, function(g){
     window.location.reload();

  }
    );
  }
 
 
 var fill = function(swit){

   $("#popdesc" + swit).toggle();


 };
var request = function(num){
          //alert("poop");
          var acname = users[num];
          var descript = descripts[num];
          reqname = tokens[2] + "requests_" + tokens[0];
           var stri = "http://lmc.konghexdev.x10host.com/addRequest.php?callback=?&user=" + reqname + "&otheruser=" + acname +"&des=" + descript;
           //alert(stri);
         $.getJSON(stri, function(t){
          document.location.reload();
           });

         };




var inflate = function(e){
	$("#bioinput").hide();
	$("#contactinput").hide();
  var reqname = e.requests;
	if(e.enable != '1'){
      $('#innards').remove();
    $('#deny').show();
    $('#deny').css('color', 'white');
}
else{
 document.getElementById('bannertext').innerHTML= "<br>" + decodeURIComponent(e.name) + "<br>";
 var output = document.getElementById("pagespace");
 var tes = decodeURIComponent(e.name);
 //<td id="contactinfo"></td><td id="setvisibility"></td><td id="pagedescription"></td><td id="internalrequests"></td><td id="externalrequests">
//create onclick listeners for td to fill in result space
$('#contactinfo').click( function(x){
	 $("#bioinput").hide();
  $("#lis").hide().listview("refresh");
  output.innerHTML=  decodeURIComponent(e.contactinfo) + " <br> <div id='consub'>submit</div>";
   $("#contactinput").show();//<input id='conchange' type='text'> </input> <br> <div id='consub'>submit</div>";
  $("#consub").click(function(m){
    //alert($('#conchange').val());
    var tname = 'venue_account';
    if(tokens[2] == 'band'){ tname = 'band_account'; }
    $.getJSON('http://lmc.konghexdev.x10host.com/changecontact.php?callback=?', {info : encodeURIComponent($('#contactinput').val()), ty : tname, acname : tokens[0] } ,
        function(g){
          window.location.reload();
        }    
      );
  });
});	
$('#setvisibility').click( function(x){
 $("#contactinput").hide();
 $("#bioinput").hide();
  $("#lis").hide().listview("refresh");
  if(e.active == 'false'){
      output.innerHTML = tes  + " is currently disabled would you like to set your account to active? <br> <div style='color:white' id='atog'>toggle </div>";
   $("#atog").click(function(k){
    if(tokens[2] == 'venue'){
      $("#activeinfo").show();
      $("#actpost").click(function(r){
      var nuactive = document.getElementById("month").value + " " + document.getElementById("day").value + " " + document.getElementById("year").value + " " + document.getElementById("time").value;
      var url = "http://lmc.konghexdev.x10host.com/toggleactive.php?callback=?&typ=venue&user=" + tokens[0] + "&value=" + encodeURIComponent(nuactive);
      $.getJSON(url, function(z){ window.location.reload();});
    });
    }
    else{
        var url =  "http://lmc.konghexdev.x10host.com/toggleactive.php?callback=?&typ=band&user=" + tokens[0] + "&value=true";
    $.getJSON(url, function(z){window.location.reload();});

    }
 });

  }
  else{
    output.innerHTML = tes + " is currently active and visible to other users would you like to deactivate your visibility? <br> <div style='color:white' id='atog'>toggle </div>";
     $("#atog").click( function(k){
         var url =  "http://lmc.konghexdev.x10host.com/toggleactive.php?callback=?&typ="+ tokens[2] + "&user=" + tokens[0] + "&value=false";  
          $.getJSON(url, function(z){window.location.reload();}); 
    });
  }

});

$("#crossbutton").click(function(x){
	$("#contactinput").hide();
 $("#bioinput").hide();
 output.innerHTML = '';
var url = "http://lmc.konghexdev.x10host.com/externalrequests.php?callback=?&user=" + tokens[0] + "&type=" + tokens[2];
var exquests = new Array();
var req = new Array();
var cinfo = new Array();
 $.getJSON(url, function(exr){  exquests = exr.extrequests.slice(); cinfo = exr.cont.slice(); 
var urlB = "http://lmc.konghexdev.x10host.com/accountrequests.php?callback=?";
$.getJSON(urlB, { usrid : tokens[0], type : tokens[2]}, function(k){ req = k.requests.slice();
var least = req.length;

$("#lis").children().remove();
for(var n = 0; n < least; n++){
  var stringA = decodeURIComponent(req[n]);
for(var r = 0; r < exquests.length; r++){
 var stringB = decodeURIComponent(exquests[r]);
 if(stringA == stringB){
  var item = "<li data-role='list-divider'>" + stringA + "<li data-role='list-divider'> contact info: " +  cinfo[r] + "</li></li>";
    $('#lis').append(item).show().listview('refresh');
 }
}
}
});
});

}
  );



$('#pagedescription').click( function(x){
	$("#contactinput").hide();
 $("#bioinput").hide();
  $("#lis").hide().listview("refresh");
     $("#pagespace").html('');
     $("#pagespace").append( "<div style='text-align:left' id='editp'> Edit </div> <p1>" + decodeURIComponent(e.bio) + " </p1> <br>  <br> <div id='changebio' > submit </div> <br>");
  $('#changebio').hide();
  $('#editp').click( function(m){
     $('#changebio').toggle();
      $("#bioinput").toggle();
  });
  $('#changebio').click(function(m){
        //alert($('#parachange').val());  
         var tname = 'venue_account';
    if(tokens[2] == 'band'){ tname = 'band_account'; }
    $.getJSON('http://lmc.konghexdev.x10host.com/changebio.php?callback=?', {newbio : encodeURIComponent($('#bioinput').val()), ty : tname, acname : tokens[0] } ,
        function(g){
          window.location.reload();
        }    
      );     

  });

});	
$('#internalrequests').click( function(x){
	$("#contactinput").hide();
 $("#bioinput").hide();
  $("#lis").hide().listview("refresh");
       var markup = "<br><u> <div  id='req'>REQUESTS__</div> <div id='actchoices'>_ACTIVE PROFILES</div> </u> <br> <br>"; 
       output.innerHTML = markup;
     // $("#space").append("<ul id='profiles' data-role='listview' data-inset='true' data-divider-theme='d'> </ul>'");
      // $("#profiles").listview("refresh");
       var url = "http://lmc.konghexdev.x10host.com/accountrequests.php?callback=?";
       $.getJSON(url, { usrid : tokens[0], type : tokens[2]}, function(k){
          var ready = 0;         
      $('#actchoices').click(function(){ 
          $('#lis').children().remove();
           $('#lis').show();
           users = new Array();
           descripts = new Array();
           var total = '';
        for( var i = 0; i < k.available.length; i++){

          var block = "";
        for(var j = 0; j < k.available[i].length - 2; j++){
         
            block = block + decodeURIComponent(k.available[i][j]) + "  <br>"
      }

        namrg = decodeURIComponent(k.available[i][k.available[i].length - 1]);
       users.push(namrg);
       var changepop =  "<h3 style='background-color:#000000; color:white; font-family:arial' hidden  id='popdesc" + i + "' data-role='listdivider' >  " + decodeURIComponent(k.available[i][k.available[i].length - 2]) + "  </h3> ";
        // $('#popdesc').append(changepop);
       //   $("#popdesc" + i).hide();
       //total = total + changepop;
       displayvalue = decodeURIComponent(k.available[i][0]);
       if(k.available[i].length > 3){ displayvalue = displayvalue + " " + decodeURIComponent(k.available[i][1]);}
       descripts.push(displayvalue);
      block ="<li  data-role='list-divider'> <a href='' onClick='fill(" + i + ")' >"  + block + "</a>  <li onClick='request(" + i + ")' id='Item" +  i + "'>Request </li> </li>" + changepop ; 
     // alert(block); onclick='request('" + namrg + "','" +  displayvalue +"'')'
        $('#lis').append(block).listview("refresh");
        $("#popdesc" + i).hide();
         
        //$('#Item').children().last().click( request(namrg, displayvalue) );
           //var sel = "#Item" + i ;
      
      }
    
  //$('#Item0').click(alert(users[0]));
      
    });
     


      $('#req').click(function(){
        $('#lis').children().remove();
         $('#lis').show();
         requests = k.requests.slice();
        for( var i = 0; i < k.requests.length; i++){
        $('#lis').append( "<li data-role='list-divider'>  "  +  decodeURIComponent(k.requests[i]) + "  <img src='img/exx.jpg' onClick='del(" + i + ")'></img> </li>").listview("refresh");
      }

      });



       });
      // populate with php file request for specific table
      // alternatively create side tab that shows all active selections
      //list views
});	
$('#externalrequests').click( function(x){
$("#contactinput").hide();
 $("#bioinput").hide();
  output.innerHTML = "";
  $('#lis').children().remove();
  $('#lis').show().listview('refresh');
 var url = "http://lmc.konghexdev.x10host.com/externalrequests.php?callback=?&user=" + tokens[0] + "&type=" + tokens[2];
 $.getJSON(url, function(exr){
   for(var n = 0; n < exr.extrequests.length; n++){
     var tok = "<li data-role='list-divider'>" + decodeURIComponent(exr.extrequests[n]) + "</li>";
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
var url = 'http://lmc.konghexdev.x10host.com/bandrecord.php?callback=?&username=' + tokens[0] + "&password=" + tokens[1];
	$.getJSON(url, inflate);
}
else{
   var url = 'http://lmc.konghexdev.x10host.com/venuerecord.php?callback=?&username=' + tokens[0] + "&password=" + tokens[1];
	$.getJSON(url, inflate);
}


