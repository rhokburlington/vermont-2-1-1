$(document).ready(function() {

  // Store latitude and longitude
  var latitude;
  var longitude;


  //http://groups.google.com/group/google-maps-js-api-v3/browse_thread/thread/0c28ecbdb92e9e23
   var initGeolocation = function() {
      if(navigator.geolocation)
      {
       // Call getCurrentPosition with success and failure callbacks
       navigator.geolocation.getCurrentPosition( success, fail );
      }
     else
      {
          alert("Sorry, your browser does not support geolocation services.");
      }
   };

   // click handler for when user clicks on an .address button
  $(".address").click(function() {
    // store id of clicked button
    var btn_id = $(this).attr("id");

    // set appropriate lat and long, based on id of button
    switch(btn_id) {
      case "pregnancy-nh-claremont":
          latitude = 43.3728869;
          longitude = -72.3381952;
        break;

      case "pregnancy-nh-lebanon":
        latitude = 43.6446729;
        longitude = -72.3092939;
        break;

      case "pregnancy-vt-barre":
        latitude = 44.190655;
        longitude = -72.497414;
        break;
    }

    // Initialize geolocation
    initGeolocation();
  });

   var directionDisplay;
   var directionsService = new google.maps.DirectionsService();
   var map;

   var success = function(position)  {
      directionsDisplay = new google.maps.DirectionsRenderer();
      coords = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

      var myOptions = 
      {
          zoom:12,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          center: coords
      };
      
      map = new google.maps.Map(document.getElementById("map-canvas"),myOptions);
      directionsDisplay.setMap(map);
      calcRoute(latitude, longitude);
  };

  var calcRoute = function(_lat,_long) {
     var start = coords;
     var end = new google.maps.LatLng(_lat, _long);
     var request = {
       origin:start,
       destination:end,
       travelMode: google.maps.TravelMode.DRIVING
     };
     directionsService.route(request, function(result, status) {
         if (status == google.maps.DirectionsStatus.OK) { 
            directionsDisplay.setDirections(result);
         }
     });
  };

  var fail = function() {
      // Could not obtain location
      alert('Failed to retreive your location.');
  }; 

});