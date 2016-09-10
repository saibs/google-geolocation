const addressSearchConfig = ($stateProvider) => {
	$stateProvider
		.state('search', {
			url: '/search',
			template: `
				<address-search
					flex
					layout="column">
				</address-search>
			`
		});
};

export default addressSearchConfig;
