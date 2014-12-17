'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

describe('Test to print out jasmine version', function() {
  it('prints jasmine version', function() {
          // console.log('jasmine-version:' + jasmine.getEnv().versionString());
      });
  });
});
