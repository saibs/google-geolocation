import Address from './Address';

class AddressSearchController {
	constructor($mdDialog, AddressSearchService) {
		'ngInject';

		this.name = 'addressSearch';

		// refs
		this.$mdDialog = $mdDialog;
		this.AddressSearchService = AddressSearchService;
	}

	$onInit() {
		this.address = new Address();
	}
	onSearch(address) {
		this.AddressSearchService
			.searchAddress(address)
			.then((result) => {
				let msg;

				if (result.successful) {
					msg = `The coordinates for this address are: ${result.location.lat}, ${result.location.lng}`;
				} else {
					msg = 'No results found';
				}
				const alert = this.$mdDialog
					.alert()
					.title('Result')
					.textContent(msg)
					.ariaLabel('result')
					.ok('ok');

				return this.$mdDialog.show(alert);
			});
	}
}

export default AddressSearchController;
