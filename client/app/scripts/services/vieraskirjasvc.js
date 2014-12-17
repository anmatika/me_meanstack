'use strict';

angular.module('karvinenApp')
	.service('vieraskirjaSvc', function($http, $q) {
		
		var getPosts = function() {
			var deferred = $q.defer();

			$http.get('/routes/getPosts')
				.success(function(data) {
					deferred.resolve(data);
				}).
			error(function(data) {
				console.log(data);
				deferred.reject(data);
			});

			return deferred.promise;
		}

		var sendMessage = function(title, message) {
			console.log('sendMessage')
			var deferred = $q.defer();

			$http.post('/routes/createPost', {
					title: title,
					body: message
				})
				.success(function(data) {
					deferred.resolve();
				}).
			error(function(data) {
				console.log(data);
				deferred.reject(data);
			});

			return deferred.promise;
		}

		return {
			getPosts: getPosts,
			sendMessage: sendMessage
		};
	});