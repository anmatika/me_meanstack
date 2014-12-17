'use strict';

/**
 * @ngdoc overview
 * @name karvinenApp
 * @description
 * # 
 *
 * Main module of the application.
 */
angular
  .module('karvinenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/ryhmat', {
        templateUrl: 'views/ryhmat.html',
        controller: 'RyhmatCtrl'
      })
      .when('/yhteystiedot', {
        templateUrl: 'views/yhteystiedot.html'
      })
      .when('/retket', {
        templateUrl: 'views/retket.html'
      })
      .when('/kuvagalleria', {
        templateUrl: 'views/kuvagalleria.html',
        controller: 'KuvagalleriaCtrl'
      })
      .when('/hallitus', {
        templateUrl: 'views/hallitus.html',
        controller: 'HallitusCtrl'
      })
      .when('/ruokalista', {
        templateUrl: 'views/ruokalista.html',
        controller: 'RuokalistaCtrl'
      })
      .when('/vieraskirja', {
        templateUrl: 'views/vieraskirja.html',
        controller: 'VieraskirjaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });