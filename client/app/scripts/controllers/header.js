'use strict';

/**
 * @ngdoc function
 * @name meshopApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the meshopApp
 */
angular.module('meshopApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    $scope.isActive = function(viewLocation){
    	return viewLocation === $location.path();
    };
  });
