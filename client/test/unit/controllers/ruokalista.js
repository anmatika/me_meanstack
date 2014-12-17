'use strict';

describe('Controller: RuokalistaCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var RuokalistaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RuokalistaCtrl = $controller('RuokalistaCtrl', {
      $scope: scope
    });
  }));

  it('scope.<day> should be correct', function () {
 
    var date = new Date();
    switch(date.getDay()){
      case 0:
        expect(scope.sunday).toBe(true);
        expect(scope.monday).not.toBeTruthy();    
        expect(scope.tuesday).not.toBeTruthy();
        expect(scope.wednesday).not.toBeTruthy();
        expect(scope.thursday).not.toBeTruthy();
        expect(scope.friday).not.toBeTruthy();
        expect(scope.saturday).not.toBeTruthy();
        break;
      case 1:
        expect(scope.sunday).not.toBeTruthy();
        expect(scope.monday).toBe(true);    
        expect(scope.tuesday).not.toBeTruthy();
        expect(scope.wednesday).not.toBeTruthy();
        expect(scope.thursday).not.toBeTruthy();
        expect(scope.friday).not.toBeTruthy();
        expect(scope.saturday).not.toBeTruthy();
        break;
      case 2:
        expect(scope.sunday).not.toBeTruthy();
        expect(scope.monday).not.toBeTruthy();    
        expect(scope.tuesday).toBe(true);
        expect(scope.wednesday).not.toBeTruthy();
        expect(scope.thursday).not.toBeTruthy();
        expect(scope.friday).not.toBeTruthy();
        expect(scope.saturday).not.toBeTruthy();
        break;
      case 3:
        expect(scope.sunday).not.toBeTruthy();
        expect(scope.monday).not.toBeTruthy();    
        expect(scope.tuesday).not.toBeTruthy();
        expect(scope.wednesday).toBe(true);
        expect(scope.thursday).not.toBeTruthy();
        expect(scope.friday).not.toBeTruthy();
        expect(scope.saturday).not.toBeTruthy();
        break;
      case 4:
        expect(scope.sunday).not.toBeTruthy();
        expect(scope.monday).not.toBeTruthy();    
        expect(scope.tuesday).not.toBeTruthy();
        expect(scope.wednesday).not.toBeTruthy();
        expect(scope.thursday).toBe(true);
        expect(scope.friday).not.toBeTruthy();
        expect(scope.saturday).not.toBeTruthy();
        break;
      case 5:
        expect(scope.sunday).not.toBeTruthy();
        expect(scope.monday).not.toBeTruthy();    
        expect(scope.tuesday).not.toBeTruthy();
        expect(scope.wednesday).not.toBeTruthy();
        expect(scope.thursday).not.toBeTruthy();
        expect(scope.friday).toBe(true);
        expect(scope.saturday).not.toBeTruthy();
        break;
      case 6:
        expect(scope.sunday).not.toBeTruthy();
        expect(scope.monday).not.toBeTruthy();    
        expect(scope.tuesday).not.toBeTruthy();
        expect(scope.wednesday).not.toBeTruthy();
        expect(scope.thursday).not.toBeTruthy();
        expect(scope.friday).not.toBeTruthy();
        expect(scope.saturday).toBe(true);
        break;
    }
  });
});
