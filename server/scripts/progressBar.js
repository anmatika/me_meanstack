(function($){
	'use strict';

	var phase = $('#phase').val();
	switch(phase){
		case "2":
			$('li#shipping').addClass("activeProgressBar");
			// $('li#shipping').css("font-weight", "bold");
		break;
		case "3":
			$('li#summary').addClass("activeProgressBar");
			// $('li#summary').css("font-weight", "bold");
		break;
		default:
			$('li#address').addClass("activeProgressBar");
			// $('li#address').css("font-weight", "bold");
		break;
	}

}(jQuery));