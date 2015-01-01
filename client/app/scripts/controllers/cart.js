'use strict';

/**
 * @ngdoc function
 * @name meshopApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the meshopApp
 */
angular.module('meshopApp')
  .controller('CartCtrl', ['$scope', 'ngCart', function ($scope, ngCart) {
    
    $scope.checkout = function() {
           console.log('checkout func');
           // $scope.summary = ngCart.toObject();
           
           $scope.summary = ngCart.getItems();
         // Post your cart to your resource
         //$http.post('cart/', ngCart.toObject());
    }
  }]);
