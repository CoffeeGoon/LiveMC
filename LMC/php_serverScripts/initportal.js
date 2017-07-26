//initalizes main account page reads stored password and username from file and
// verifies account existance in the backend. if account does not exist then
// puts up a page needs verification alternate

var contactinfo;
var bio;
var availableconnects = new array();
var requests = new array();
var requeststo = new array();
var active;
var name;


if(document.getCookie() == ''){
	$('#innards').remove();
    $('#deny').hidden = false;
}
else{
var inflate = function(e){
	if(e.enable == 0){
      $('#innards').remove();
    $('#deny').hidden = false;
}
else{
alert(e.name);
//create onclick listeners for td to fill in result space
	

}

	}


}
var url = 'http://127.0.0.1/bandrecord.php?callback=?&username=' document.getCookie();
	$.getJSON(url, inflate);




}