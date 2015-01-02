'use strict';

/**
 * @ngdoc service
 * @name meshopApp.productSvc
 * @description
 * # productSvc
 * Service in the meshopApp.
 */
angular.module('meshopApp')
  .service('productSvc', function ($http, $q) {
     
      function getProducts() {
	   	
	   	var deferred = $q.defer();
		
	   	$http.get('/getProducts')
	   		.success(function(data){
	   			
	   			deferred.resolve(data);
		   		
   		}).
   		error(function(data){
   			console.log(data);
   			deferred.reject(data);
   		});

   		return deferred.promise;
   }

   return {
   	getProducts: getProducts
   }
  });
