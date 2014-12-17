'use strict';

describe('Controller: HeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var HeaderCtrl,
    scope,
    $location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$location_) {
    $location = _$location_;
    scope = $rootScope.$new();
    
    HeaderCtrl = $controller('HeaderCtrl', {
      $scope: scope
    });
  }));

  it('should root isActive be true', function () {
    $location.path('/');
    expect(scope.isActive('/')).toBe(true);
  });

  it('should yhteystiedot isActive be true', function () {
    $location.path('/yhteystiedot');
    expect(scope.isActive('/yhteystiedot')).toBe(true);
  });

  it('should ruokalista isActive be true', function () {
    $location.path('/ruokalista');
    expect(scope.isActive('/ruokalista')).toBe(true);
  });

  it('should ryhmat isActive be true', function () {
    $location.path('/ryhmat');
    expect(scope.isActive('/ryhmat')).toBe(true);
  });

  it('should kuvagalleria isActive be true', function () {
    $location.path('/kuvagalleria');
    expect(scope.isActive('/kuvagalleria')).toBe(true);
  });

  it('should hallitus isActive be true', function () {
    $location.path('/hallitus');
    expect(scope.isActive('/hallitus')).toBe(true);
  });

   it('should retket isActive be true', function () {
    $location.path('/retket');
    expect(scope.isActive('/retket')).toBe(true);
  });

});
