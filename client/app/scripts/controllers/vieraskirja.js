'use strict';

/**
 * @ngdoc function
 * @name karvinenApp.controller:VieraskirjaCtrl
 * @description
 * # VieraskirjaCtrl
 * Controller of the karvinenApp
 */
angular.module('karvinenApp')
	.controller('VieraskirjaCtrl', function($scope, vieraskirjaSvc) {

		$scope.sendMessage = function() {

			vieraskirjaSvc.sendMessage($scope.title, $scope.message)
				.then(function() {
					vieraskirjaSvc.getPosts().then(function(posts) {
						$scope.posts = posts;
					});
				});
		}

		vieraskirjaSvc.getPosts()
			.then(function(posts) {
				$scope.posts = posts;
			});

		return {
			sendMessage: $scope.sendMessage
		};

	});