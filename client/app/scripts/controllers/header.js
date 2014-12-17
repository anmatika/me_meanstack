'use strict';

/**
 * @ngdoc function
 * @name karvinenApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the karvinenApp
 */
angular.module('karvinenApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    $scope.isActive = function(viewLocation){
    	return viewLocation === $location.path();
    };
  });
