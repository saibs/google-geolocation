/**
 * @ngdoc service
 * @name backendService.service:BackendService
 *
 * @description
 *
 */
class BackendService {
	constructor($http, GOOGLE_API_KEY) {
		'ngInject';
		this.$http = $http;
		this.GOOGLE_API_KEY = GOOGLE_API_KEY;
		this.googleBaseAPI = 'https://maps.googleapis.com/maps/api';
	}
	/**
	 * @ngdoc method
	 * @name backendService.service:BackendService#searchAddress
	 * @methodOf backendService.service:BackendService
	 *
	 * @description
	 * Search address using google geocode api.
	 *
	 * @param {String=} address
	 * @returns {Promise} an $http promise Object resolving an Object containing search results
	 */
	searchAddress(address) {
		return this.$http({
			method: 'GET',
			url: `${this.googleBaseAPI}/geocode/json?address=${address}&key=${this.GOOGLE_API_KEY}`
		});
	}
}

export default BackendService;

