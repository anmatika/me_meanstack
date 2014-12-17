'use strict';
/** 
 * @ngdoc function
 * @name karvinenApp.controller:KuvagalleriaCtrl
 * @description
 * # KuvagalleriaCtrl
 * Controller of the karvinenApp
 */
 angular.module('karvinenApp')
 .controller('KuvagalleriaCtrl', function ($scope, $http, $q, galleriaSvc) {

	$scope.myInterval = 5000;
	
	$scope.getSlides = function () {
		galleriaSvc.getSlides()
			.then(function(slides){
				$scope.slideItems = slides;
			},
			function(reason){
				console.log(reason);
			});
  	}

  	$scope.getSlides();

 });
