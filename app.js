function googleSuccess(){
	var ViewModal = function(){
		var self = this;
		var input = $("#text");
		var submit = document.getElementById("submit-btn");

		//var geocoder = new google.maps.Geocoder();

		submit.addEventListener('click',function(){

			var latVal;
			var lngVal;

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
				var map = new google.maps.Map(document.getElementById("map"),{
	          		zoom: 11,
	         	 	center: {lat: latVal, lng: lngVal}
				});
			},1000);
		});
	}

	ko.applyBindings(new ViewModal());
};