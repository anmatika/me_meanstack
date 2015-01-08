'use strict';

describe('Controller: NavCtrl', function() {
	// load the controller's module
	beforeEach(module('meshopApp'));

	var controller,
		scope,
		controller,
		rootScope,
		q,
		httpBackend,
		loginService,
		location,
		cookies,
		defer;

	// Initialize the controller and a mock scope
	beforeEach(inject(function($injector) {
		controller = $injector.get('$controller');
		rootScope = $injector.get('$rootScope');
		q = $injector.get('$q');
		httpBackend = $injector.get('$httpBackend');

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
			logout: function() {
				defer = q.defer();
				return defer.promise;
			}
		}
	});

	// create controller and spies
	beforeEach(function() {
		var ctrl = controller('NavCtrl', {
			$scope: scope,
			$location: location,
			$cookies: cookies,
			$rootScope: rootScope,
			loginSvc: loginService
		});

		spyOn(loginService, 'logout').and.callThrough();
	})


	it('logout should call loginService.logout', function() {

		scope.logout();
		expect(loginService.logout).toHaveBeenCalled();
	});

});