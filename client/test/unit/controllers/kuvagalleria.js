'use strict';

describe('Controller: KuvagalleriaCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var KuvagalleriaCtrl,
    scope,
    $httpBackend,
    $controller,
    $rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');

    scope = $rootScope.$new();

    KuvagalleriaCtrl = $controller('KuvagalleriaCtrl', {
      $scope: scope
    });
  }));

// 
  it('KuvagalleriaCtrl.getSlides should been called', function () {
       // expect(scope.getSlides).toHaveBeenCalled();
  });

  it('Expect interval to be 5000', function() {
    expect(scope.myInterval).toBe(5000);
  });

  it('expect POST', function(){
    
  });

  it('', function(){


  });
    
});
