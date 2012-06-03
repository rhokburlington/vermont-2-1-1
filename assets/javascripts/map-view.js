$(document).ready(function() {
	//http://www.davidjwatts.com/Simple-jQuery-Mobile-Site-with-Google-Maps-API-V3
	/*var center;
	var map = null;

	var initialize = function(lat,lng) {

		center = new google.maps.LatLng(lat,lng);
		var myOptions = {
			zoom: 14,
			center: center,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};		
		map = new google.maps.Map(document.getElementById("map-view"), myOptions);
	};

	var detectBrowser = function() {

		var useragent = navigator.userAgent;
		var mapdivMap = $("#map-view");

		if(useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1) {
			mapdivMap.css("width", "100%");
			mapdivMap.css("height", "100%");
		}
		else {
			mapdivMap.css("width","600px");
			mapdivMap.css("height","800px");
		}
	};

	$("#go-map-view").click(function() {

		if(navigator.geolocation) {
			detectBrowser();
			navigator.geolocation.getCurrentPosition(function(position) {
				initialize(position.coords.latitude, position.coords.longitude);
			});
		}
		else {
			detectBrowser();
			initialize(52.636161,-1.133065);
		}
	});
	*/

});