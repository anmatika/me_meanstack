'use strict';

describe('testing routes in app.js', function () {

  it('should map routes to controllers', function() {
    module('meshopApp');

    inject(function($route) {

      expect($route.routes['/'].controller).toBe('MainCtrl');
      expect($route.routes['/'].templateUrl).
        toEqual('views/main.html');

  

      // otherwise redirect to
      expect($route.routes[null].redirectTo).toEqual('/');
    });
  });
});