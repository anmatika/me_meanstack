'use strict';

/**
 * @ngdoc function
 * @name meshopApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the meshopApp
 */
angular.module('meshopApp')
	.controller('LoginCtrl', function($scope, $http) {
		$scope.send = function() {
			console.log($scope.password);

			$http.post('/login', {
				email: $scope.email,
				password: $scope.password
			}).
			success(function(data, status, headers, config) {
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
			}).
			error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				console.log(data);
			});
		};

		$scope.isLoggedIn = function () {
			$http.get('/isloggedin').
			success(function(data, status, headers, config) {
				console.log(data);
				// this callback will be called asynchronously
				// when the response is available
			}).
			error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});
		};

		$scope.logout = function () {
			$http.get('/logout').
			success(function(data, status, headers, config) {
				console.log(data);
				// this callback will be called asynchronously
				// when the response is available
			}).
			error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});
		};
	});