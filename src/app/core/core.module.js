/*eslint-env node */

import angular from 'angular';
import 'angular-ui-router';
import 'angular-material';
import 'angular-animate';
import BackendService from './backendService/backendService.module';

import * as CONSTANTS from './core.constants';

/**
 * @ngdoc overview
 * @name _core
 *
 * @description
 *  The core application module, contents of this module are available to the whole app
 */
const coreModule = angular.module('app.core', [
	// Angular modules
	'ui.router',
	'ngMaterial',
	BackendService.name
])
	.constant('GOOGLE_API_KEY', CONSTANTS.GOOGLE_API_KEY);

export default coreModule;
