$(document).ready(function() {
	
	var initialize = function() {

		var myOptions = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-view"),
            myOptions);

	};
	//initialize();
});