import angular from 'angular';
import module from '../addressSearch.module';

describe('Controller: AddressSearchController', function() {

	beforeEach(angular.mock.module(function($provide) {
		$provide.provider('$state', function() {
			this.state = jasmine.createSpy('state');
			this.$get = function() {
				return {};
			};
		});
	}));

	beforeEach(angular.mock.module(module.name));

	beforeEach(angular.mock.module(function($provide) {

		$provide.service('AddressSearchService', function($q) {
			this.searchAddress = jasmine.createSpy('searchAddress').and.returnValue($q.resolve({}));
		});

		$provide.service('$mdDialog', function() {
			this.confirm = jasmine.createSpy('confirm').and.returnValue(this);
			this.show = jasmine.createSpy('show');
			this.title = () => this;
			this.textContent = () => this;
			this.ariaLabel = () => this;
			this.ok = () => this;
			this.cancel = () => this;
		});
	}));

	beforeEach(inject(function($rootScope, $componentController) {
		this.$scope = $rootScope.$new();

		this.ctrl = $componentController('addressSearch',
			{
			},
			{
			}
		);
	}));

	it('should be defined', function() {
		expect(this.ctrl).toBeDefined();
	});

	it('should initialize address `$onInit`', function() {
		this.ctrl.$onInit();
		expect(this.ctrl.address).toBeDefined();
	});

	it('should invoke `searchAddress` of AddressSearchService `onSearch`', function() {
		this.ctrl.onSearch(this.ctrl.address);
		expect(this.ctrl.AddressSearchService.searchAddress).toHaveBeenCalled();
	});
});
