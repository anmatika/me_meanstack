'use strict';

/**
 * @ngdoc service
 * @name meshopApp.loginSvc
 * @description
 * # loginSvc
 * Service in the meshopApp.
 */
angular.module('meshopApp')
  .service('loginSvc', function($http, $q) {

    return {

      login: function(email, password) {
        
        var deferred = $q.defer();
        console.log(password);

        $http.post('/login', {
          email: email,
          password: password
        }).
        success(function(data, status, headers, config) {
          deferred.resolve(data);
        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log(data);
          deferred.reject(data);

        });

        return deferred.promise;

      },

      getUser: function() {
        var deferred = $q.defer();
        
        $http.get('/getuser').
        success(function(data, status, headers, config) {
          deferred.resolve(data);
          // this callback will be called asynchronously
          // when the response is available
        }).
        error(function(data, status, headers, config) {
          deferred.reject(data);
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });

        return deferred.promise;
      },

      logout: function() {
        var deferred = $q.defer();

        $http.get('/logout').
        success(function(data, status, headers, config) {
          deferred.resolve(data);
          // this callback will be called asynchronously
          // when the response is available
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