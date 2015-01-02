	'use strict';

/**
 * @ngdoc function
 * @name meshopApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the meshopApp
 */
angular.module('meshopApp')
  .controller('SignupCtrl', function ($scope, $http) {
    $scope.signup = function() {
			console.log($scope.password);

			$http.post('/signup', {
				email: $scope.email,
				password: $scope.password
			}).
			success(function(data, status, headers, config) {
				// console.log(data.local.email);
				console.log('data: ' + data);
				console.log('data._id: ' + data.user._id);
				if (data.success) {
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
			}).
			error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				console.log(data);
			});
		};
  });
