angular.module('testeAngular')
	.controller('GruposController', function($scope, $http) {
		$http.get(__env.apiUrl + '/v1/grupos')
			.success(function(grupos) {
			$scope.grupos = grupos;
		})
		.error(function(erro) {
			console.log(erro);
		});
	});