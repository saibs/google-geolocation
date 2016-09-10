import angular from 'angular';
import module from '../addressSearch.module';

describe('Service: AddressSearchService', function() {

	// Providers
	beforeEach(angular.mock.module(function($provide) {
		$provide.provider('$state', function() {
			this.state = jasmine.createSpy('state');
			this.$get = function() {
				return {
					go: jasmine.createSpy('go')
				};
			};
		});

	}));

	beforeEach(angular.mock.module(module.name));

	beforeEach(angular.mock.module(function($provide) {

		$provide.service('BackendService', function($q) {
			this.searchAddress = jasmine.createSpy('searchAddress').and.returnValue($q.resolve({}));
		});

	}));

	// Injections
	beforeEach(inject(function($injector, AddressSearchService) {
		this.service = AddressSearchService;
	}));

	it('should be defined', function() {
		expect(this.service).toBeDefined();
	});

	it('should invoke backendservice `searchAddress` with address string when its `searchAddress` is invoked', function() {
		const address = {
			toString: jasmine.createSpy('toString')
		};

		this.service.searchAddress(address);
		expect(this.service.BackendService.searchAddress).toHaveBeenCalled();
		expect(address.toString).toHaveBeenCalled();
	});
});
