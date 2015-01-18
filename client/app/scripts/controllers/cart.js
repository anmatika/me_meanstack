'use strict';

/**
 * @ngdoc function
 * @name meshopApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the meshopApp
 */
angular.module('meshopApp')
	.controller('CartCtrl', ['$scope', '$rootScope', '$http', '$location', 'ngCart', function($scope, $rootScope, $http, $location, ngCart) {

		$scope.items = ngCart.getItems();

		$scope.checkout = function() {
			console.log('checkout func');
			
		    
		     $http.post('/checkout', ngCart.getItems()).success(function(data){
		     	// $location.url('/secure/orderconfirmation');
		     	
		     	if(data === 'notLogged'){
		     		window.location.href = '/secure/account';
		     	} else {
		     		window.location.href = '/secure/orderconfirmation';
		     	}
		     });
			
		}

		$rootScope.$on('ngCart:change', function(){
			console.log('cart changed');
		});

		// function post(path, params, method) {
		// 	method = method || "post"; // Set method to post by default if not specified.

		// 	// The rest of this code assumes you are not using a library.
		// 	// It can be made less wordy if you use one.
		// 	var form = document.createElement("form");
		// 	form.setAttribute("method", method);
		// 	form.setAttribute("action", path);
			
		// 	for (var key in params) {
		// 		if (params.hasOwnProperty(key)) {
		// 			var hiddenField = document.createElement("input");
		// 			hiddenField.setAttribute("type", "hidden");
		// 			hiddenField.setAttribute("name", key);
		// 			hiddenField.setAttribute("value", params[key]);

		// 			form.appendChild(hiddenField);
		// 		}
		// 	}

		// 	document.body.appendChild(form);
		// 	form.submit();
		// }

	}]);