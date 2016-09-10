
/**
 * @ngdoc overview
 * @name _app
 *
 * @description
 * 	The root application route
 *
 */
const appConfig = function(
	$urlRouterProvider, $mdThemingProvider) {

	$urlRouterProvider
		.when('', '/search')
		.otherwise('/search');

	$mdThemingProvider.theme('default')
		.primaryPalette('amber');
};

export default appConfig;
