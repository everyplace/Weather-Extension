$(document).ready(function(){
	
	$("body").append("<div id='temperatureExtension'>");
	
	//set up an empty api object to store all of your information in
	var api = {};

	//set specific properties
		api.key = "02b9b4c2b7dae068";
		api.state = "NY";
		api.city = "Brooklyn";

	//use string concatenation to create the full url
	//http://api.wunderground.com/api/asdfadsf1234/hourly/q/NY/Brooklyn.json
		api.conditions = "http://api.wunderground.com/api/"+api.key+"/conditions/q/"+api.state+"/"+api.city+".json";

	//Request data remotely from the api
	//note that the url parameter uses one of the urls stored in the api object
	$.ajax({
	  type: 'GET',
	  dataType: 'json',
	  url: api.conditions,
	  success: function(response){

		console.log(response);

		//here's where all of your fun code goes!
			//the variable "response" is now a json object containing all of your results

			//example of outputting the current temp
			$('#temperatureExtension').append(response.current_observation.feelslike_f + " degrees f");
			var imageTag = '<img src="'+response.current_observation.icon_url+'"/>';
			$('#temperatureExtension').append(imageTag);
			
	  }
	});
});
