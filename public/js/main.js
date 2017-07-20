// Default environment variables
var __env = {};

// Import variables if present
if(window){
	Object.assign(__env, window.__env);
}

angular.module('testeAngular', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/fotos', {
			templateUrl: 'partials/principal.html',
			controller: 'FotosController'
		});

		$routeProvider.when('/fotos/new', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		});

		$routeProvider.when('/fotos/edit/:fotoId', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		});

		$routeProvider.otherwise({redirectTo: '/fotos'});
	})
	.config(function(__env) {
		//__env.apiUrl = 'http://localhost:3001';
	})
	.constant('__env', __env)
	.config(function disableLogging($logProvider) {
    	$logProvider.debugEnabled(__env.enableDebug);
	})
	.run(function confirmBootstrap($log) {
		$log.debug('Angular bootstrapped!');
	})
	.run(function logEnvironment($log, __env) {
		$log.debug('Environment variables:');
		$log.debug(__env)
	})
;
