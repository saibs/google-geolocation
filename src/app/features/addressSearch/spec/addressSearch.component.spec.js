import component from '../addressSearch.component';
import template from '../addressSearch.html';
import controller from '../addressSearch.controller';

describe('Component: addressSearch', function() {
	it('includes the intended template', () => {
		expect(component.template).toEqual(template);
	});

	it('invokes the right controller', () => {
		expect(component.controller).toEqual(controller);
	});
});
