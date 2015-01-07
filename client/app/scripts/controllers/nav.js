'use strict';

/**
 * @ngdoc function
 * @name meshopApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the meshopApp
 */
angular.module('meshopApp')
	.controller('NavCtrl', function($scope, $location, $cookies, loginSvc) {

		var setUserName = function() {
			
			loginSvc.getUser()
				.then(function(data) {
						$scope.username = data.local.email;
					},
					function(reason) {
						console.log(reason);
					});
		}

		$scope.isActive = function(viewLocation) {
			return viewLocation === $location.path();
		};

		$scope.$on('loggedIn', function(event, args) {
			console.log('loggedIn hit: ' + args);
			$scope.username = args;
		})

		setUserName();

	});