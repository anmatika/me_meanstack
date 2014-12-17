'use strict';

describe('Controller: HallitusCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var HallitusCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HallitusCtrl = $controller('HallitusCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
