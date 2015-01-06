'use strict';

/**
 * @ngdoc function
 * @name meshopApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the meshopApp
 */
angular.module('meshopApp')
	.controller('LoginCtrl', function($scope, $http, loginSvc) {
		$scope.send = function() {
			loginSvc.send($scope.email, $scope.password)
				.then(function(data) {
						if (data.success) {
							console.log('data.user._id: ' + data.user._id);
							console.log('data.local.email: ' + data.user.local.email);
							console.log('data.local.password: ' + data.user.local.password);
							console.log('status: ' + status);
							$scope.successmessage = "Login succeeded";
							$scope.errormessage = "";

						} else {
							$scope.errormessage = data.message;
							$scope.successmessage = "";
						}
						// this callback will be called asynchronously
						// when the response is available	
					},
					function(reason) {
						console.log(reason);
					});
		};

		$scope.isLoggedIn = function() {
			loginSvc.isLoggedIn()
				.then(function(data) {
						console.log(data);
					},
					function(reason) {
						console.log(reason);	
					});
		};

		$scope.logout = function() {
			loginSvc.logout()
			 .then(function(data){
			 	console.log(data);			
			 },
			 function(reason){
			 	console.log(reason);	
			 });
		};
	});