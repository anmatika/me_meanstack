'use strict';

/**
 * @ngdoc service
 * @name karvinenApp.galleriaSvc
 * @description
 * # galleriaSvc
 * Service in the karvinenApp.
 */
angular.module('karvinenApp')
  .service('galleriaSvc', function ($http, $q) {
     
      function getSlides() {
	   	
	   	var deferred = $q.defer();

	   	$http.get('/routes/galleria')
	   		.success(function(data){
	   			// data comes as
	   			// images: {
	   			// 	"foldername_1": ["foo.png", "daa.png"],
	   			// 	"foldername_2": ["abc.png"], "fii.png"]
	   			// }
	   			var slides = [],
	   			slideItem = {},
	   			img;
	   			// iterate properties(folders) of object "galleria_1", galleria_2...
	   			for (var folder in data.images){
	   				var fileNames = data.images[folder];
	   				
	   				slideItem = { 
	   							  header: folder,
	   							  images: [] 
	   							};

	   				// iterate array of fileNames
	   				for (var i in fileNames){
	   					var fileName = fileNames[i];
					 	img = {
	   					 	"image": "/images/galleria/" + folder + "/" + fileName
	   					}
	   					
	   					slideItem.images.push(img);
	   					   					
	   				}

	   				slides.push(slideItem);   				
	   			}

	   			// console.log(slides);
		   		
	   			deferred.resolve(slides);

		   		// GOAL:
		   		//
		   		// 	$scope.slideItems = [
		   		// 			{ 
		   		// 				header: "galleria_1",
		   		// 			  	images: [ 
		   		// 					{ image: '/images/galleria/galleria_1/1.jpg' },
		   		// 					{ image: '/images/galleria/galleria_1/2.jpg' }
							// 	]
							// },
							// { 
		   		// 				header: "2",
		   		// 			  	images: [ 
		   		// 					{ image: '/images/galleria/2/2.jpg' },
		   		// 					{ image: '/images/galleria/2/3.jpg' }
							// 	]
							// }
		   		// 	]
   		}).
   		error(function(data){
   			console.log(data);
   			deferred.reject(data);
   		});

   		return deferred.promise;
   }

   return {
   	getSlides: getSlides
   }
  });
