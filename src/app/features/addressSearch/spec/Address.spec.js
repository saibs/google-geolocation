import Address from '../Address';

describe('Model: Address', function() {
	beforeEach(function() {
		this.address = new Address({ houseNumber: 66, street: 'jackson road', postalCode: '9001', city: 'CA' });
	});

	it('should be defined', function() {
		expect(new Address()).toBeDefined();
		expect(this.address).toBeDefined();
	});

	it('should give concatenated address when `toString` is invoked', function() {
		expect(this.address.toString()).toBe('66 jackson road, CA 9001');
	});
});
