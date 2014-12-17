'use strict';

describe('testing routes in app.js', function () {

  it('should map routes to controllers', function() {
    module('karvinenApp');

    inject(function($route) {

      expect($route.routes['/'].controller).toBe('MainCtrl');
      expect($route.routes['/'].templateUrl).
        toEqual('views/main.html');

      expect($route.routes['/ryhmat'].controller).toBe('RyhmatCtrl');
      expect($route.routes['/ryhmat'].templateUrl).
        toEqual('views/ryhmat.html');
     
      expect($route.routes['/kuvagalleria'].controller).toBe('KuvagalleriaCtrl');      
      expect($route.routes['/kuvagalleria'].templateUrl).
         toEqual('views/kuvagalleria.html');
            
      expect($route.routes['/ruokalista'].controller).toBe('RuokalistaCtrl');      
      expect($route.routes['/ruokalista'].templateUrl).
         toEqual('views/ruokalista.html');

      expect($route.routes['/hallitus'].controller).toBe('HallitusCtrl');      
      expect($route.routes['/hallitus'].templateUrl).
         toEqual('views/hallitus.html');
     
      expect($route.routes['/yhteystiedot'].templateUrl).
         toEqual('views/yhteystiedot.html');
      
      expect($route.routes['/retket'].templateUrl).
         toEqual('views/retket.html');

      // otherwise redirect to
      expect($route.routes[null].redirectTo).toEqual('/');
    });
  });
});