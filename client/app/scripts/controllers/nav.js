'use strict';

/**
 * @ngdoc function
 * @name meshopApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the meshopApp
 */
angular.module('meshopApp')
  .controller('NavCtrl', function ($scope, $location, $cookies) {
    
    function setUserName(){
    	console.log('cookie.email: ' + $cookies.email);
    	$scope.userName = $cookies.email;
    }

    $scope.isActive = function(viewLocation){
    	return viewLocation === $location.path();
    };

    $scope.$on('loggedIn', function(event, args){
    	console.log('loggedIn hit: ' + args);
    	$scope.username = args;	
    })

    setUserName();

  });
