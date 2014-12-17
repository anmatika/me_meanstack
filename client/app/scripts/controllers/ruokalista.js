'use strict';

/**
 * @ngdoc function
 * @name karvinenApp.controller:RuokalistaCtrl
 * @description
 * # RuokalistaCtrl
 * Controller of the karvinenApp
 */
angular.module('karvinenApp')
  .controller('RuokalistaCtrl', function ($scope) {
    var date = new Date();
    var day = date.getDay();
    switch(day){
    	case 0: $scope.sunday = true;
    	break;
    	case 1: $scope.monday = true;
    	break;
    	case 2: $scope.tuesday = true;
    	break;
    	case 3: $scope.wednesday = true;
    	break;
    	case 4: $scope.thursday = true;
    	break;
    	case 5: $scope.friday = true;
    	break;
    	case 6: $scope.saturday = true;
    	break;
    }
  });
