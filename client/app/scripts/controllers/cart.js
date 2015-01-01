'use strict';

/**
 * @ngdoc function
 * @name meshopApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the meshopApp
 */
angular.module('meshopApp')
  .controller('CartCtrl', function ($scope) {
    
    $scope.checkout = function() {
           console.log('checkout func');
           $scope.summary = ngCart.toObject();
           
         // Post your cart to your resource
         //$http.post('cart/', ngCart.toObject());
    }
  });
