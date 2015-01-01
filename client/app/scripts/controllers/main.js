'use strict';

/**
 * @ngdoc function
 * @name meshopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meshopApp
 */
angular.module('meshopApp')
	.controller('MainCtrl', function($scope, productSvc) {

		$scope.getProducts = function() {
			productSvc.getProducts()
				.then(function(products) {
						console.log(products);
						$scope.products = products;
					},
					function(reason) {
						console.log(reason);
					});
		}

		$scope.getProducts();
	});