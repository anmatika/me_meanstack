'use strict';

describe('Service: loginSvc', function() {

  // load the service's module
  beforeEach(module('meshopApp'));

  // instantiate service
  var loginSvc,
    $httpBackend,
    $q

  beforeEach(inject(function(_loginSvc_, $injector) {
    loginSvc = _loginSvc_;
    $httpBackend = $injector.get('$httpBackend');
  }));

  it('should do something', function() {
    expect(!!loginSvc).toBe(true);
  });

});