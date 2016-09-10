import angular from 'angular';
import service from './addressSearch.service';
import config from './addressSearch.config';
import component from './addressSearch.component';

const addressSearchModule = angular.module('addressSearch', [
])
	.service('AddressSearchService', service)
	.config(config)
	.component('addressSearch', component);

export default addressSearchModule;
