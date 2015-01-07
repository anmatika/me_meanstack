'use strict';

/**
 * @ngdoc function
 * @name meshopApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the meshopApp
 */
angular.module('meshopApp')
	.controller('SignupCtrl', function($scope, $http, signupSvc) {
		$scope.signup = function() {

			signupSvc.signup($scope.email, $scope.password)
				.then(function(data) {
						console.log('data: ' + data);
						if (data.success) {
							console.log('data._id: ' + data.user._id);
							console.log('data.local.email: ' + data.user.local.email);
							console.log('data.local.password: ' + data.user.local.password);
							console.log('status: ' + status);
							$scope.successmessage = "Signup succeeded";
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
	});