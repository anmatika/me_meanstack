'use strict';

describe('Controller: LoginCtrl', function() {
  // load the controller's module
  beforeEach(module('meshopApp'));

  var controller,
    scope,
    controller,
    rootScope,
    q,
    location,
    loginService,
    defer;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($injector) {
    controller = $injector.get('$controller');
    rootScope = $injector.get('$rootScope');
    q = $injector.get('$q');
    location = $injector.get('$location');

    scope = rootScope.$new();

  }));

  // create loginService stub
  beforeEach(function() {

    loginService = {
      getUser: function() {
        defer = q.defer();
        return defer.promise;
      },
      login: function(email, password) {
        defer = q.defer();
        return defer.promise;
      },
      logout: function(){
        defer = q.defer();
        return defer.promise;
      }
    }
  });

  // create controller and spies
  beforeEach(function(){
    var ctrl = controller('LoginCtrl', {
      $scope: scope,
      $rootScope: rootScope,
      $location: location,
      loginSvc: loginService
    });

    spyOn(loginService, 'getUser').and.callThrough();
    spyOn(loginService, 'login').and.callThrough();
    // spyOn(rootScope, '$broadcast');
  })


  it('getUser should call loginService.getUser', function() {

    scope.getUser();
    expect(loginService.getUser).toHaveBeenCalled();

  });

  it('login should call loginService.login and succeed message show', function() {
    var email = 'a@a.com',
      password = '123',
      data = {
        success: true,
        user:{
          local: {
            email: email
          }
        }
      };

    scope.email = email;
    scope.password = password;

    scope.login();
    

    defer.resolve(data);

    scope.$root.$digest();

    expect(loginService.login).toHaveBeenCalledWith(email, password);
    expect(scope.successmessage).toBe('Login succeeded');
    expect(scope.errormessage).toBe('');
    // expect(rootScope.$broadcast).toHaveBeenCalledWith('loggedIn', data.user.local.email);
  });

  it('login should call loginService.login and fail message show', function() {
    var email = 'a@a.com',
      password = '123';

    scope.email = email;
    scope.password = password;

    scope.login();
    
    defer.resolve({
      success: false,
      message: 'Invalid credentials'
    });

    scope.$root.$digest();

    expect(loginService.login).toHaveBeenCalledWith(email, password);
    expect(scope.errormessage).toBe('Invalid credentials');
    expect(scope.successmessage).toBe('');
  });

  
});