class AddressSearchService {
	constructor(BackendService) {
		'ngInject';
		this.BackendService = BackendService;
	}
	searchAddress(address) {
		return this.BackendService
			.searchAddress(address.toString())
			.then((searchResult) => {
				const successful = searchResult.data.status === 'OK';

				return {
					address,
					successful,
					location: successful ? searchResult.data.results[0].geometry.location : {}
				};
			});
	}
}

export default AddressSearchService;
