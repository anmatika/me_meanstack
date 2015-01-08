'use strict';

describe('Controller: SignupCtrl', function () {

  // load the controller's module
  beforeEach(module('meshopApp'));

  var SignupCtrl,
    scope,
    controller,
    rootScope,
    httpBackend,
    q,
    signupService,
    defer;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($injector) {
    controller = $injector.get('$controller');
    rootScope = $injector.get('$rootScope');
    q = $injector.get('$q');
    httpBackend = $injector.get('$httpBackend');

    scope = rootScope.$new();

  }));

  // create signupService stub
  beforeEach(function() {

    signupService = {
      signup: function() {
        defer = q.defer();
        return defer.promise;
      }
    }
  });

  // create controller and spies
  beforeEach(function(){
    var ctrl = controller('SignupCtrl', {
      $scope: scope,
      $http: httpBackend,
      $rootScope: rootScope,
      signupSvc: signupService
    });

    spyOn(signupService, 'signup').and.callThrough();
  })


  it('signup should call signupService.signup', function() {

    scope.signup();
    expect(signupService.signup).toHaveBeenCalled();

  });

  it('signup should call signupService.signup and succeed message show', function() {
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

    scope.signup();
    

    defer.resolve(data);

    scope.$root.$digest();

    expect(signupService.signup).toHaveBeenCalledWith(email, password);
    expect(scope.successmessage).toBe('Signup succeeded');
    expect(scope.errormessage).toBe('');
  });

  it('signup should call signupService.signup and fail message show', function() {
    var email = 'a@a.com',
      password = '123',
      data = {
        success: false,
        message: 'Invalid'
      };

    scope.email = email;
    scope.password = password;

    scope.signup();

    defer.resolve(data);

    scope.$root.$digest();

    expect(signupService.signup).toHaveBeenCalledWith(email, password);
    expect(scope.errormessage).toBe('Invalid');
    expect(scope.successmessage).toBe('');
  });
 
});
