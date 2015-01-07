'use strict';

/**
 * @ngdoc service
 * @name meshopApp.signuopSvc
 * @description
 * # signuopSvc
 * Service in the meshopApp.
 */
angular.module('meshopApp')
  .service('signupSvc', function($http, $q) {

    return {

      signup: function(email, password) {

        var deferred = $q.defer();
        $http.post('/signup', {
          email: email,
          password: password
        }).
        success(function(data, status, headers, config) {
          deferred.resolve(data);
        }).
        error(function(data, status, headers, config) {
          deferred.reject(data);
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });

        return deferred.promise;
      }
    }
  });