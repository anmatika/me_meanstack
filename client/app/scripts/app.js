'use strict';

/**
 * @ngdoc overview
 * @name meshopApp
 * @description
 * #
 *
 * Main module of the application.
 */
angular
  .module('meshopApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngCart',
    'pascalprecht.translate'
  ])
  .config(function($routeProvider, $translateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/order', {
        templateUrl: 'views/order.html',
        controller: 'OrderCtrl'
      })
      .when('/customerDetails', {
        templateUrl: 'views/customerdetails.html',
        controller: 'CustomerdetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $translateProvider.translations('en', {
        about: 'About',
        services: 'Services',
        contact: 'Contact',
        signUp: 'Sign up',
        login: 'Log in',
        addToCart: 'Add to cart',
        thisItemIsInYourCart: 'This item is in your cart',
        quantity: 'Quantity',
        price: 'Price',
        total: 'Total',
        checkout: 'Checkout',
        logout: 'Log out',
        account: 'Account'
      }).translations('fi', {
        about: 'Tietoja meistä',
        services: 'Palvelut',
        contact: 'Yhteystiedot',
        signUp: 'Rekisteröidy',
        login: 'Kirjaudu',
        addToCart: 'Ostoskoriin',
        thisItemIsInYourCart: 'Tuote lisätty ostoskoriisi',
        quantity: 'Määrä',
        price: 'Hinta',
        total: 'Yhteensä',
        checkout: 'Kassalle',
        logout: 'Kirjaudu ulos',
        account: 'Tili'
      });
      $translateProvider.preferredLanguage('fi');
  });