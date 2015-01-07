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

  it('login should make http.post to /login', function() {
    var promise = loginSvc.login('a@a.com', '123');
    var response = {
      "success": true,
      "user": {
        "_id": "54a692c3133aad0b23d4d149",
        "__v": 0,
        "local": {
          "password": "$2a$08$Lh2fcyKmbhFhwbAWfienx.qvTa2IhVbzxvMzCdM/WbEzhFCMWxa4q",
          "email": "a@a.com"
        }
      }
    }
    var resolvedData;

    $httpBackend.expectPOST('/login', {
      email: 'a@a.com',
      password: '123'
    }).respond(response);
    promise.then(function(data) {
      resolvedData = data;
    });

    // run the $http.post('/login')
    $httpBackend.flush();

    expect(resolvedData).toEqual(response);

  });

  it('getUser should make http.get to /getuser', function() {
    var promise = loginSvc.getUser();
    var response = {
      "_id": "54a692c3133aad0b23d4d149",
      "__v": 0,
      "local": {
        "password": "$2a$08$Lh2fcyKmbhFhwbAWfienx.qvTa2IhVbzxvMzCdM/WbEzhFCMWxa4q",
        "email": "a@a.com"
      }
    }
    var resolvedData;

    $httpBackend.expectGET('/getuser').respond(response);

    promise.then(function(data) {
      resolvedData = data;
    });

    $httpBackend.flush();

    expect(resolvedData).toEqual(response);

  });

  it('logout should make http.get to /logout', function() {
    var promise = loginSvc.logout();
    var response = 'OK';
    var resolvedData;

    $httpBackend.expectGET('/logout').respond(response);

    promise.then(function(data) {
      resolvedData = data;
    });

    $httpBackend.flush();

    expect(resolvedData).toEqual(response);

  });

});