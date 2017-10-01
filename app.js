function googleSuccess(){
	var ViewModal = function(){

		var self = this;
		var input = $("#text");
		var submit = document.getElementById("submit-btn");

		submit.addEventListener('click',function(){

			var latVal;
			var lngVal;

			var map;
			var request;

			console.log(input.val());

          	var geocoder =  new google.maps.Geocoder();
	    		geocoder.geocode( { 'address': input.val()}, function(results, status) {
	          	if (status == google.maps.GeocoderStatus.OK) {
	           		// alert("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng());
	           		 latVal = results[0].geometry.location.lat();
	           		 console.log(latVal);
	           		 lngVal = results[0].geometry.location.lng();
	           		 console.log(lngVal);
	           		 
	          	} else {
	            	alert("Something got wrong " + status);
	          	}
        	});
	    		
    		setTimeout(function(){
				map = new google.maps.Map(document.getElementById("map"),{
	          		zoom: 14,
	         	 	center: {lat: latVal, lng: lngVal}
				});

				request = {
					location: {lat: latVal, lng: lngVal},
					radius: '1000',
					types: ['history']
				};
				
				var service = new google.maps.places.PlacesService(map);	
				service.nearbySearch(request, function(results, status) {
			    if (status == google.maps.places.PlacesServiceStatus.OK) {
			      for (var i = 0; i < results.length; i++) {
			        var place = results[i];
			        // If the request succeeds, draw the place location on
			        // the map as a marker, and register an event to handle a
			        // click on the marker.
			        var marker = new google.maps.Marker({
			          map: map,
			          position: place.geometry.location
			        });
			      }
			    }
			  });
			},3000);
		});
	}

	ko.applyBindings(new ViewModal());
};